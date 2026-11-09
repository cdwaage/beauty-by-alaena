# Inquiry form backend (Cloudflare Worker)

Replaces FormSubmit.co. The `/inquiry` form POSTs JSON to `/api/inquiry`; this Worker
(`beautybyalaena-inquiry`) runs on the routes `beautybyalaena.com/api/inquiry` and
`www.beautybyalaena.com/api/inquiry`, validates the fields, drops honeypot (bot)
submissions, and emails the inquiry with the Cloudflare Email Service `send_email` binding.

- From: `inquiries@forms.beautybyalaena.com` (Email Routing is enabled on the
  `forms.` subdomain only; the apex MX records stay on Google)
- To: `beautybyalaena@gmail.com`
- Reply-To: the visitor's email, so replying in Gmail answers the customer directly

## Free-plan requirement
On the Workers Free plan, Cloudflare only sends to **verified Email Routing destination
addresses**. Each recipient must click the "Verify email address" link Cloudflare sends
(Dashboard → Email Service → Email Routing → Destination addresses to resend). Until a
recipient is verified, the API returns HTTP 502 with a friendly error and nothing is sent.
Upgrading to Workers Paid ($5/mo) and onboarding the domain to Email Sending removes
that requirement (and would allow an auto-reply to the customer).

## Deploy
```sh
cd worker && npx wrangler deploy        # backend
cd .. && npx next build && npx wrangler pages deploy out --project-name beautybyalaena --branch main   # site
```
