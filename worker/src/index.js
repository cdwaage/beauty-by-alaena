// Beauty by Alaena — inquiry form backend.
// Runs as a Cloudflare Worker on the routes beautybyalaena.com/api/inquiry and
// www.beautybyalaena.com/api/inquiry, and emails each inquiry through the
// Cloudflare Email Service `send_email` binding (replaces FormSubmit.co).

const ALLOWED_ORIGINS = [
  "https://beautybyalaena.com",
  "https://www.beautybyalaena.com",
  "https://beautybyalaena.pages.dev",
];
const MAX_FIELD = 2000;
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/;

function corsHeaders(origin) {
  const ok =
    origin &&
    (ALLOWED_ORIGINS.includes(origin) ||
      /^https:\/\/[a-z0-9-]+\.beautybyalaena\.pages\.dev$/.test(origin));
  return ok
    ? {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Accept",
        "Access-Control-Max-Age": "86400",
        Vary: "Origin",
      }
    : { Vary: "Origin" };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      ...corsHeaders(origin),
    },
  });
}

const clean = (v) =>
  (typeof v === "string" ? v : v == null ? "" : String(v))
    .replace(/\r\n?/g, "\n")
    .trim()
    .slice(0, MAX_FIELD);
const oneLine = (v) => clean(v).replace(/[\r\n\t]+/g, " ");
const esc = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(origin) });
    if (request.method !== "POST") return json({ success: false, error: "Method not allowed" }, 405, origin);

    // Browsers always send Origin on cross-site/fetch POSTs; reject foreign origins.
    if (origin && !corsHeaders(origin)["Access-Control-Allow-Origin"]) {
      return json({ success: false, error: "Forbidden" }, 403, origin);
    }

    let body;
    try {
      const ct = request.headers.get("Content-Type") || "";
      if (ct.includes("application/json")) body = await request.json();
      else body = Object.fromEntries(await request.formData());
    } catch {
      return json({ success: false, error: "Invalid request." }, 400, origin);
    }
    if (!body || typeof body !== "object") return json({ success: false, error: "Invalid request." }, 400, origin);

    // Honeypot: real visitors never see or fill this field. Pretend success for bots.
    if (clean(body.company_website || body._honey)) return json({ success: true }, 200, origin);

    const f = {
      name: oneLine(body.name).slice(0, 120),
      email: oneLine(body.email).slice(0, 200),
      phone: oneLine(body.phone).slice(0, 40),
      eventType: oneLine(body.eventType).slice(0, 120),
      eventDate: oneLine(body.eventDate).slice(0, 40),
      location: oneLine(body.location).slice(0, 200),
      numberOfPeople: oneLine(body.numberOfPeople).slice(0, 10),
      services: oneLine(body.services).slice(0, 120),
      heardAbout: oneLine(body.heardAbout).slice(0, 120),
      notes: clean(body.notes),
    };

    const missing = [];
    if (!f.name) missing.push("name");
    if (!f.email) missing.push("email");
    if (!f.phone) missing.push("phone number");
    if (!f.eventType) missing.push("event type");
    if (!f.eventDate) missing.push("event date");
    if (!f.location) missing.push("event location");
    if (!f.numberOfPeople) missing.push("number of people");
    if (!f.services) missing.push("services wanted");
    if (missing.length) return json({ success: false, error: `Please fill in: ${missing.join(", ")}.` }, 400, origin);
    if (!EMAIL_RE.test(f.email)) return json({ success: false, error: "Please enter a valid email address." }, 400, origin);

    const rows = [
      ["Name", f.name],
      ["Email", f.email],
      ["Phone", f.phone],
      ["Event Type", f.eventType],
      ["Event Date", f.eventDate],
      ["Event Location", f.location],
      ["Number of People", f.numberOfPeople],
      ["Services Wanted", f.services],
      ["How They Heard About Us", f.heardAbout || "Not specified"],
      ["Additional Notes", f.notes || "None"],
    ];
    const subject = `New Inquiry from ${f.name} — ${f.eventType}`.slice(0, 200);
    const text =
      `New inquiry from beautybyalaena.com\n\n` +
      rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
      `\n\nReply to this email to respond to ${f.name} directly.\n`;
    const html =
      `<div style="font-family:Arial,sans-serif;font-size:14px;color:#222">` +
      `<h2 style="font-weight:normal">New inquiry from beautybyalaena.com</h2>` +
      `<table cellpadding="6" style="border-collapse:collapse">` +
      rows
        .map(
          ([k, v]) =>
            `<tr><td style="border:1px solid #ddd;background:#faf6ef;vertical-align:top"><b>${esc(k)}</b></td>` +
            `<td style="border:1px solid #ddd;white-space:pre-wrap">${esc(v)}</td></tr>`
        )
        .join("") +
      `</table><p style="color:#777">Reply to this email to respond to ${esc(f.name)} directly.</p></div>`;

    const from = { email: env.FROM_ADDRESS, name: "Beauty by Alaena Website" };
    const message = { from, replyTo: { email: f.email, name: f.name }, subject, text, html };

    try {
      await env.EMAIL.send({ ...message, to: env.TO_ADDRESS });
    } catch (err) {
      console.error("inquiry send failed", String(err && err.message ? err.message : err));
      return json(
        {
          success: false,
          error: `Sorry, your inquiry could not be sent right now. Please email ${env.PUBLIC_CONTACT} directly.`,
        },
        502,
        origin
      );
    }

    // Copy to the CC address. Best effort: never fail the visitor's submission over it.
    if (env.CC_ADDRESS) {
      try {
        await env.EMAIL.send({ ...message, to: env.CC_ADDRESS });
      } catch (err) {
        console.warn("inquiry cc failed", String(err && err.message ? err.message : err));
      }
    }

    return json({ success: true }, 200, origin);
  },
};
