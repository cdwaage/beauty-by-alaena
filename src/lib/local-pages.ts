export type LocalPageImage = {
  src: string;
  alt: string;
};

export type LocalFaq = {
  question: string;
  answer: string;
};

export type LocalPage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  linkLabel: string;
  group: "local" | "destination";
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
  ratesIntro: string;
  rateKind: "bridal" | "event";
  trialParagraphs: string[];
  bookingParagraphs: string[];
  steps: string[];
  images: LocalPageImage[];
  faqs: LocalFaq[];
  ctaHeading: string;
  ctaText: string;
};

function page(
  entry: Omit<LocalPage, "path"> & { slug: string }
): LocalPage {
  return { ...entry, path: `/${entry.slug}/` };
}

export const localPages: LocalPage[] = [
  page({
    slug: "bridal-hair-makeup-roseville",
    title: "Bridal Hair and Makeup in Roseville, CA — Beauty by Alaena",
    description:
      "On-location bridal hair and makeup for Roseville weddings from Alaena, based next door in Rocklin. Studio trials, and travel within 30 miles included.",
    eyebrow: "Roseville weddings",
    h1: "Bridal hair and makeup in Roseville",
    linkLabel: "Bridal hair and makeup in Roseville",
    group: "local",
    lede:
      "Roseville shares a border with Rocklin, where Alaena lives and where her home studio is. On the wedding day she comes to the Roseville getting-ready location, so the party is not driving to a salon chair before photos.",
    sections: [
      {
        heading: "How a Roseville wedding morning works",
        paragraphs: [
          "The short drive is the useful part of booking her for a Roseville wedding. The city name does not waive travel. Travel within 30 miles of the Rocklin studio is included. Past 30 miles it is $2 per mile, round trip, from Rocklin to the event location. She confirms that figure from the getting-ready spot before the date is held.",
          "Put Roseville in the inquiry location field, and put the getting-ready address and the be-ready time in the notes.",
          "Bridal hair is about an hour and bridal makeup about an hour and a half. A bridesmaid or mother is about 45 minutes for hair and an hour for makeup. A flower girl 8 or under is about 20 minutes each. Leave a 30 to 60 minute buffer before you need to be ready.",
          "A wedding needs at least four services, and a $150 assistant fee may apply for six or more. Hair, makeup, or both can be booked for each person. A Roseville prom or quinceañera is $150 for hair and $150 for makeup, without that wedding minimum.",
        ],
      },
    ],
    ratesIntro:
      "Roseville weddings use the same bridal menu as the rest of her local work. Every price is per person. The $100 retainer that holds the date does not come off this total.",
    rateKind: "bridal",
    trialParagraphs: [
      "The trial stays in Rocklin even when the wedding morning is in Roseville. It is at her home studio, with no travel fee. Hair is $115, makeup is $115, and both together are $220. Brides are encouraged to book one so the Roseville morning follows a look you already chose. Prom and quinceañera clients can use that same studio trial.",
    ],
    bookingParagraphs: [
      "There is no single lead time that fits every wedding. Share the date when you have it and Alaena will say whether she is open. A conversation does not hold the calendar.",
    ],
    steps: [
      "Submit the inquiry with Wedding selected, the date, Roseville as the location, how many people, and hair, makeup, or both.",
      "In the notes, add the getting-ready address and the time you need to be ready so she can confirm the 30-mile travel rule for that spot.",
      "If the date is open, a $100 retainer and a signed contract hold it. The retainer does not apply toward the services.",
      "The contract is requested at least 30 days before the wedding.",
    ],
    images: [
      {
        src: "/images/gallery1.webp",
        alt: "Artist placing a bride's veil before the ceremony",
      },
      {
        src: "/images/gallery3.webp",
        alt: "Low bridal bun with pearl hair pins",
      },
      {
        src: "/images/gallery7.webp",
        alt: "Bride with soft curled hair, a veil, and a white rose bouquet",
      },
      {
        src: "/images/gallery9.webp",
        alt: "Long glossy waves styled for a wedding morning",
      },
    ],
    faqs: [
      {
        question:
          "Do you come to a Roseville house on the wedding morning, or do we come to the studio?",
        answer:
          "Alaena comes to the Roseville getting-ready location on the wedding day. The trial is the appointment that stays at her home studio in Rocklin, and that visit has no travel fee.",
      },
      {
        question: "Is travel from Rocklin to Roseville included?",
        answer:
          "Travel within 30 miles of the Rocklin studio is included. Beyond that, the fee is $2 per mile, round trip, from Rocklin to the event location. Roseville is the next city over, but the fee follows the address. She confirms it before the date is held.",
      },
      {
        question: "What holds a Roseville wedding date?",
        answer:
          "A minimum of four services, a $100 retainer, and a signed contract. The retainer does not apply toward hair and makeup. The contract is requested at least 30 days before the wedding.",
      },
    ],
    ctaHeading: "Ask about a Roseville date",
    ctaText:
      "Send the date, the Roseville getting-ready location, and who needs hair, makeup, or both. She will say if she is open and what travel looks like for that address.",
  }),
  page({
    slug: "bridal-hair-makeup-folsom",
    title: "Bridal Hair and Makeup in Folsom, CA — Beauty by Alaena",
    description:
      "On-location bridal hair and makeup in Folsom from Alaena in Rocklin. Trials at her home studio, and travel confirmed from your getting-ready address.",
    eyebrow: "Folsom weddings",
    h1: "Bridal hair and makeup in Folsom",
    linkLabel: "Bridal hair and makeup in Folsom",
    group: "local",
    lede:
      "Folsom sits south of Alaena's Rocklin studio, in Sacramento County, with Folsom Lake as the landmark on the map. She comes to the Folsom getting-ready location for bridal hair and makeup.",
    sections: [
      {
        heading: "Getting ready in Folsom",
        paragraphs: [
          "Say where in Folsom the party is starting. A house in town and a room nearer Folsom Lake are not the same drive from Placer County. Travel within 30 miles of the Rocklin studio is included. Past 30 miles, the fee is $2 per mile, round trip, from Rocklin to the event location. She confirms it from the address before the retainer.",
          "Put Folsom in the location field, and the getting-ready address plus the be-ready time in the notes. Travel follows the place she is working, even if the ceremony is elsewhere.",
          "The bride's hair is about an hour and her makeup about an hour and a half. Bridesmaids and mothers are about 45 minutes for hair and an hour for makeup. A flower girl 8 or under is about 20 minutes each. Keep a 30 to 60 minute buffer before the be-ready time.",
          "A Folsom wedding needs at least four services. A $150 assistant fee may apply for a large party. Prom and quinceañera dates here are $150 for hair and $150 for makeup per person, without the wedding minimum.",
        ],
      },
    ],
    ratesIntro:
      "The Folsom bridal menu matches the prices on her services page. Book hair only, makeup only, or both. The retainer is separate from these amounts.",
    rateKind: "bridal",
    trialParagraphs: [
      "The trial is not at the Folsom getting-ready location. It is at the home studio in Rocklin, with no travel fee. Hair is $115, makeup is $115, and both together are $220. Brides are encouraged to schedule one so wedding morning is a plan you have already seen. Event clients can book that same studio visit.",
    ],
    bookingParagraphs: [
      "Send the date as soon as you know it. There is no fixed number of months that fits every wedding, and Alaena will tell you whether she is open. The date is not reserved until the retainer and the contract are both in place.",
    ],
    steps: [
      "Inquire with the wedding date, Folsom as the city, the headcount, and whether each person wants hair, makeup, or both.",
      "Add the getting-ready address and be-ready time in the notes so the round-trip mileage can be confirmed from Rocklin.",
      "Hold the date with a $100 retainer and a signed contract. The retainer does not apply toward the balance.",
      "Expect the contract request at least 30 days before the wedding.",
    ],
    images: [
      {
        src: "/images/gallery10.webp",
        alt: "Bride with long dark waves in a beaded gown",
      },
      {
        src: "/images/gallery12.webp",
        alt: "Bride in a lace gown with a long veil and her bridal party",
      },
      {
        src: "/images/gallery29.webp",
        alt: "Artist curling a bride's hair on the morning of the wedding",
      },
      {
        src: "/images/gallery30.webp",
        alt: "Textured dark bridal updo",
      },
    ],
    faqs: [
      {
        question: "Will you come to a Folsom getting-ready location near the lake?",
        answer:
          "Yes, if that is where the party is getting ready. Alaena travels to the Folsom event location. She does not need the ceremony to be in the same spot. Name the getting-ready address so travel is quoted to the place she is working.",
      },
      {
        question: "How is the Folsom travel fee decided?",
        answer:
          "Travel within 30 miles of the Rocklin studio is included. Beyond 30 miles it is $2 per mile, round trip, from Rocklin to the event location. The city name is not the quote. She confirms the amount from your address before the date is held.",
      },
      {
        question: "When is a Folsom wedding actually booked?",
        answer:
          "After she confirms the date is open, a $100 retainer and a signed contract hold it. Wedding bookings need at least four services. The retainer does not go toward the service total, and the contract is requested at least 30 days before the wedding.",
      },
    ],
    ctaHeading: "Inquire for a Folsom wedding",
    ctaText:
      "Include the date and the Folsom address where everyone is getting ready. Alaena will confirm whether she is available and how travel applies to that location.",
  }),
  page({
    slug: "bridal-hair-makeup-el-dorado-hills",
    title: "Bridal Hair and Makeup in El Dorado Hills — Beauty by Alaena",
    description:
      "On-location bridal hair and makeup in El Dorado Hills from Alaena in Rocklin. Confirm travel from your address, then hold the date with a retainer and contract.",
    eyebrow: "El Dorado Hills",
    h1: "Bridal hair and makeup in El Dorado Hills",
    linkLabel: "Bridal hair and makeup in El Dorado Hills",
    group: "local",
    lede:
      "El Dorado Hills is in El Dorado County, south of Folsom. Alaena's studio is in Rocklin, in Placer County, so this wedding morning is a cross-county trip. She still comes to you. The appointment is at the getting-ready location, not at the studio.",
    sections: [
      {
        heading: "Why the address comes before the retainer",
        paragraphs: [
          "Settle the travel line before anyone holds the date. Travel within 30 miles of the studio is included. If the getting-ready location is past 30 miles, the fee is $2 per mile, round trip, from Rocklin. She confirms the amount when you inquire. The retainer comes after that number is clear.",
          "Write El Dorado Hills in the location field, and put the getting-ready address plus the be-ready time in the notes. The city alone does not finish the quote.",
          "After that, it is a standard on-location bridal morning: about an hour for bridal hair, about an hour and a half for bridal makeup, and less time for each bridesmaid, mother, or flower girl. Keep a 30 to 60 minute buffer. A $150 assistant fee may apply for a large party.",
          "The wedding minimum is four services. A prom or quinceañera in El Dorado Hills is $150 for hair and $150 for makeup per person, and that minimum does not carry over.",
        ],
      },
    ],
    ratesIntro:
      "Service prices do not change because the wedding is in El Dorado County. What changes is the travel line, which is confirmed from the address. The menu itself is the published bridal list.",
    rateKind: "bridal",
    trialParagraphs: [
      "Come to Rocklin for the trial before the wedding. It is at the home studio only, with no travel fee. Hair is $115, makeup is $115, and both together are $220. A trial is encouraged so the El Dorado Hills morning is spent on a look you already approved. Prom and quinceañera clients can book the same studio visit.",
    ],
    bookingParagraphs: [
      "Ask early enough that she can answer about the specific date, and do not treat a rough season as a hold. If she is open, the next step is the retainer and the contract, with travel already stated.",
    ],
    steps: [
      "Send the inquiry with the wedding date, El Dorado Hills as the city, the number of people, and hair, makeup, or both.",
      "Put the getting-ready address and be-ready time in the notes so she can confirm whether the 30-mile included radius covers it.",
      "Review that travel amount before you pay. A $100 retainer and a signed contract are what hold the date, and the retainer does not apply toward services.",
      "The contract is requested at least 30 days before the wedding.",
    ],
    images: [
      {
        src: "/images/gallery4.webp",
        alt: "Sleek low bun with face-framing pieces",
      },
      {
        src: "/images/gallery5.webp",
        alt: "Textured blonde updo with pearl pins",
      },
      {
        src: "/images/gallery21.webp",
        alt: "Twisted low bun with caramel highlights",
      },
    ],
    faqs: [
      {
        question:
          "Is El Dorado Hills inside the included 30 miles from Rocklin?",
        answer:
          "It depends on the getting-ready address, not on the city name. Travel within 30 miles of the Rocklin studio is included. Past that, travel is $2 per mile, round trip, from Rocklin. Alaena confirms the figure before the date is held.",
      },
      {
        question: "Where do we do the hair and makeup trial?",
        answer:
          "At her home studio in Rocklin. The trial does not come to El Dorado Hills, and there is no travel fee. Brides are encouraged to book one.",
      },
      {
        question: "What has to be in place before an El Dorado Hills date is reserved?",
        answer:
          "An open date on her calendar, a wedding party of at least four services, a $100 retainer, and a signed contract. The retainer does not apply toward the total. The contract is requested at least 30 days before the event.",
      },
    ],
    ctaHeading: "Check an El Dorado Hills date",
    ctaText:
      "Send the date and the El Dorado Hills getting-ready address. She will say if she is free and what travel costs before you reserve it.",
  }),
  page({
    slug: "bridal-hair-makeup-granite-bay",
    title: "Bridal Hair and Makeup in Granite Bay, CA — Beauty by Alaena",
    description:
      "Granite Bay bridal hair and makeup with Alaena, based in Rocklin. She comes to you, trials are at her home studio, and travel within 30 miles is included.",
    eyebrow: "Granite Bay weddings",
    h1: "Bridal hair and makeup in Granite Bay",
    linkLabel: "Bridal hair and makeup in Granite Bay",
    group: "local",
    lede:
      "Granite Bay is in Placer County, between Roseville and Folsom Lake, a short trip from Alaena's Rocklin studio. She comes to the Granite Bay getting-ready location for bridal hair and makeup, including a private home when that is where the party is starting.",
    sections: [
      {
        heading: "A Placer County morning, still priced by the mile",
        paragraphs: [
          "Same county does not replace the travel rule. Granite Bay is close to Rocklin, and the trip is still measured. Travel within 30 miles of the studio is included. Beyond 30 miles, the fee is $2 per mile, round trip, from Rocklin to the event location. She confirms it from the address before the date is held.",
          "If the ceremony is in another Placer city, send the place she should arrive. Put Granite Bay on the form and the address plus the be-ready time in the notes.",
          "Bridal hair is about an hour and bridal makeup about an hour and a half. A bridesmaid or mother is about 45 minutes for hair and an hour for makeup. A flower girl 8 or under is about 20 minutes each. Add a 30 to 60 minute buffer before you need to be finished. A wedding needs at least four services, and a $150 assistant fee may apply for a large party.",
          "A Granite Bay prom or quinceañera uses the event menu: $150 for hair and $150 for makeup per person, with no four-service minimum.",
        ],
      },
    ],
    ratesIntro:
      "These are the bridal prices for a Granite Bay wedding. They match the services page. The $100 retainer is a booking fee on top of the menu, not a credit toward it.",
    rateKind: "bridal",
    trialParagraphs: [
      "Book the trial at the Rocklin home studio, not at the Granite Bay house. There is no travel fee. Hair is $115, makeup is $115, and both together are $220. Brides are encouraged to come in so the style is settled before the house is on a schedule. A quinceañera or other event trial uses the same studio and the same prices.",
    ],
    bookingParagraphs: [
      "Share the date when you have it. Alaena will tell you if that day is open. Proximity to the studio does not hold a spot. The retainer and the contract do.",
    ],
    steps: [
      "Inquire with the date, Wedding as the event, Granite Bay as the location, the number of people, and hair, makeup, or both.",
      "Add the getting-ready address and the ready time in the notes for the travel confirmation.",
      "A $100 retainer and a signed contract reserve the date. The retainer does not apply toward hair and makeup.",
      "The contract is requested at least 30 days out.",
    ],
    images: [
      {
        src: "/images/gallery6.webp",
        alt: "Bride and bridal party in matching yellow sets with soft styled hair",
      },
      {
        src: "/images/gallery11.webp",
        alt: "Voluminous blonde updo",
      },
      {
        src: "/images/gallery20.webp",
        alt: "Soft glam makeup with a half-up style and face-framing curls",
      },
      {
        src: "/images/gallery23.webp",
        alt: "Half-up hairstyle with long loose curls",
      },
    ],
    faqs: [
      {
        question: "Do you work at Granite Bay homes on the wedding morning?",
        answer:
          "She travels to the Granite Bay getting-ready location, and a private home is a normal place for that. The trial is separate and is held at her Rocklin studio.",
      },
      {
        question: "Granite Bay is close to Rocklin. Is travel automatically free?",
        answer:
          "Travel within 30 miles of the studio is included, and anything past that is $2 per mile, round trip, from Rocklin. Granite Bay is nearby, in the same county, but she still confirms the fee from the address before holding the date.",
      },
      {
        question: "How many services do I need to book a Granite Bay wedding?",
        answer:
          "A minimum of four. The date is held with a $100 retainer and a signed contract. The retainer does not apply toward the total, and the contract is requested at least 30 days before the wedding.",
      },
    ],
    ctaHeading: "Request a Granite Bay date",
    ctaText:
      "Tell her the wedding date and where in Granite Bay the party is getting ready. She will confirm availability and the travel line for that address.",
  }),
  page({
    slug: "bridal-hair-makeup-sacramento",
    title: "Bridal Hair and Makeup in Sacramento, CA — Beauty by Alaena",
    description:
      "Sacramento bridal hair and makeup from Alaena in Rocklin. She comes to your getting-ready location and confirms travel from that address before the date is held.",
    eyebrow: "Sacramento weddings",
    h1: "Bridal hair and makeup in Sacramento",
    linkLabel: "Bridal hair and makeup in Sacramento",
    group: "local",
    lede:
      "Sacramento is the state capital, south of Rocklin, and it covers enough ground that a travel answer has to start with an address. Alaena comes to the Sacramento getting-ready location for bridal hair and makeup. She does not quote the whole city as one fee.",
    sections: [
      {
        heading: "The 30-mile line is an address, not a city",
        paragraphs: [
          "Travel within 30 miles of the Rocklin studio is included. Past 30 miles it is $2 per mile, round trip, from Rocklin to the event location. Sacramento covers enough ground that she confirms the fee from the getting-ready address, before the date is held, rather than from the city name. Put Sacramento on the form and the address plus the be-ready time in the notes.",
          "She sets up where you are getting ready. A ceremony in another part of the city does not replace that address. You do not come to the studio on the wedding day.",
          "Bridal hair is about an hour and bridal makeup about an hour and a half. A bridesmaid or mother is about 45 minutes for hair and an hour for makeup. A flower girl 8 or under is about 20 minutes each. Keep a 30 to 60 minute buffer before the be-ready time.",
          "A Sacramento wedding needs at least four services. A large party may include a $150 assistant fee. Prom and quinceañera bookings are $150 for hair and $150 for makeup per person, without the wedding minimum.",
        ],
      },
    ],
    ratesIntro:
      "Sacramento brides pay the same service prices as brides in Placer County. Travel is the line item that depends on the address. The retainer sits outside the menu.",
    rateKind: "bridal",
    trialParagraphs: [
      "The trial is in Rocklin even when the wedding is in Sacramento. It is a separate trip to the home studio, with no travel fee. Hair is $115, makeup is $115, and both together are $220. Brides are encouraged to book one so the Sacramento morning is not the first time you see the look. Event clients can book the same trial.",
    ],
    bookingParagraphs: [
      "There is no universal lead time. Send the date and she will say if it is open. For a Sacramento wedding, include the getting-ready location in the first message so availability and travel are answered together.",
    ],
    steps: [
      "Submit the date, Wedding, Sacramento, the number of people, and hair, makeup, or both.",
      "Use the notes for the getting-ready address and the be-ready time. That is what she uses to confirm the $2-per-mile rule past 30 miles.",
      "If she is available, a $100 retainer and a signed contract hold the date. The retainer does not reduce the service total.",
      "The contract is requested at least 30 days before the wedding.",
    ],
    images: [
      {
        src: "/images/gallery8.webp",
        alt: "Bride and groom under a veil",
      },
      {
        src: "/images/gallery24.webp",
        alt: "Polished low bun with a side piece",
      },
      {
        src: "/images/gallery25.webp",
        alt: "Bride and groom on the reception dance floor",
      },
    ],
    faqs: [
      {
        question: "Do you travel into Sacramento for bridal hair and makeup?",
        answer:
          "Yes. Alaena is based in Rocklin and comes to the Sacramento getting-ready location. Trials stay at her home studio in Rocklin.",
      },
      {
        question: "Why can't you quote Sacramento travel without an address?",
        answer:
          "Because the rule is a radius, not a city. Travel within 30 miles of the Rocklin studio is included, and travel beyond that is $2 per mile, round trip, from Rocklin to the event location. She confirms the fee from the getting-ready address before the date is held.",
      },
      {
        question: "What reserves the Sacramento wedding once travel is clear?",
        answer:
          "A minimum of four services, a $100 retainer, and a signed contract. The retainer does not apply toward the balance. The contract is requested at least 30 days before the event.",
      },
    ],
    ctaHeading: "Inquire about Sacramento",
    ctaText:
      "Send the wedding date and the Sacramento address where the party is getting ready. Alaena will tell you if the day is open and how travel applies.",
  }),
  page({
    slug: "lake-tahoe-wedding-hair-makeup",
    title: "Lake Tahoe Wedding Hair and Makeup — Beauty by Alaena",
    description:
      "Lake Tahoe wedding hair and makeup with Alaena, based in Rocklin and Roseville. She travels to getting-ready locations around the lake. Travel is quoted per event.",
    eyebrow: "Destination weddings",
    h1: "Lake Tahoe wedding hair and makeup",
    linkLabel: "Lake Tahoe wedding hair and makeup",
    group: "destination",
    lede:
      "Alaena is based in Rocklin and Roseville and travels for Lake Tahoe weddings. This is a destination date, not a local stop inside her everyday radius. She comes to the getting-ready location around the lake. The trial happens earlier, at her home studio.",
    sections: [
      {
        heading: "What she needs in order to quote the trip",
        paragraphs: [
          "Tell her where around the lake you are getting ready, and whether that spot is in California or Nevada. North shore and south shore are different trips. Destination travel is quoted per event, before a retainer holds the date.",
          "Tahoe is outside the 30 miles of included travel around the Rocklin studio. She quotes this trip per event once she has the getting-ready location and the be-ready time.",
          "If the spot is in Nevada, say so. Out-of-state travel can include flight, hotel, and local transportation, quoted before any contract. A California spot at the lake is still quoted per event.",
          "Bridal hair is about an hour and bridal makeup about an hour and a half, with less time for each bridesmaid, mother, or flower girl. Keep a 30 to 60 minute buffer and put the be-ready time in the notes. A wedding needs at least four services, and a $150 assistant fee may apply for a large party.",
        ],
      },
    ],
    ratesIntro:
      "Bridal prices do not become a different menu because the wedding is at the lake. Travel is quoted separately, per event. The $100 retainer does not pay for either the services or the trip.",
    rateKind: "bridal",
    trialParagraphs: [
      "Do the trial in Rocklin before anyone is at the lake. It is at her home studio, with no travel fee. Hair is $115, makeup is $115, and both together are $220. Brides are encouraged to schedule one so the look is decided in Placer County and the morning around the lake is for doing it.",
    ],
    bookingParagraphs: [
      "There is no separate lead time for Tahoe. Send the date and where around the lake you are getting ready. She will say if she can take it, and what travel costs for that event.",
    ],
    steps: [
      "Inquire with the wedding date, the headcount, and hair, makeup, or both. Put the lake area in the location field, and name California or Nevada.",
      "In the notes, describe the getting-ready location around the lake and the time you need to be ready.",
      "Review the per-event travel quote. A $100 retainer and a signed contract then hold the date. The retainer does not apply toward services.",
      "The contract is requested at least 30 days before the wedding.",
    ],
    images: [
      {
        src: "/images/gallery22.webp",
        alt: "Soft glam makeup with a loose updo and face-framing waves",
      },
      {
        src: "/images/gallery26.webp",
        alt: "Artist finishing curled hair in front of a mirror",
      },
      {
        src: "/images/gallery27.webp",
        alt: "Mother and daughter with soft updos and natural makeup",
      },
    ],
    faqs: [
      {
        question: "Do you come to getting-ready locations around Lake Tahoe?",
        answer:
          "Yes. Alaena travels to the getting-ready location for a Lake Tahoe wedding, on either the California or Nevada side of the lake. The trial is held earlier at her home studio in Rocklin.",
      },
      {
        question: "How does Lake Tahoe travel pricing work?",
        answer:
          "Destination travel is quoted per event, after she knows where you are getting ready and when you need to be ready. Tahoe is not treated as part of the local 30-mile radius around Rocklin. The quote is confirmed before a retainer holds the date.",
      },
      {
        question: "What holds a Tahoe wedding date?",
        answer:
          "At least four services, a $100 retainer, and a signed contract, after travel is quoted for that event. The retainer does not apply toward the services. The contract is requested at least 30 days before the wedding.",
      },
    ],
    ctaHeading: "Inquire about a Lake Tahoe wedding",
    ctaText:
      "Send the date, which part of the lake you are getting ready in, and whether that spot is in California or Nevada. Alaena will confirm availability and quote travel for the event.",
  }),
  page({
    slug: "napa-sonoma-wedding-hair-makeup",
    title: "Napa and Sonoma Wedding Hair and Makeup — Beauty by Alaena",
    description:
      "Napa and Sonoma wedding hair and makeup with Alaena, based in Rocklin and Roseville. Name the town where you are getting ready. Travel is quoted per event.",
    eyebrow: "Destination weddings",
    h1: "Napa and Sonoma wedding hair and makeup",
    linkLabel: "Napa and Sonoma wedding hair and makeup",
    group: "destination",
    lede:
      "Napa County and Sonoma County are not the same drive from Rocklin. Alaena is based in Rocklin and Roseville and travels for weddings in both. She comes to the getting-ready location you name, and she quotes destination travel per event rather than asking you to estimate the miles.",
    sections: [
      {
        heading: "Name the county and the town",
        paragraphs: [
          "A quote for a getting-ready spot in Napa is not a quote for one in Sonoma. Say which county, and name the town. Napa Valley and the Sonoma side of the trip leave Placer County in different directions. She needs the place she is going, not a region.",
          "Local California travel within 30 miles of the Rocklin studio is included, and travel past that is $2 per mile, round trip. Napa and Sonoma are destination dates, so travel is quoted per event and confirmed before the retainer. There is no single published fee for both counties.",
          "On the wedding morning she works where the party is getting ready. Bridal hair is about an hour and bridal makeup about an hour and a half, with less time for each bridesmaid, mother, or flower girl. Leave a 30 to 60 minute buffer, and put the be-ready time in the notes. A wedding needs at least four services, and a $150 assistant fee may apply for a large party.",
        ],
      },
    ],
    ratesIntro:
      "The bridal menu is the same one she uses at home. Destination travel is a separate quote for that wedding. Nothing in the table includes the trip, and the retainer does not pay the table down.",
    rateKind: "bridal",
    trialParagraphs: [
      "The trial is in Rocklin, before the wedding trip, at her home studio. There is no travel fee. Hair is $115, makeup is $115, and both together are $220. Brides are encouraged to come in so the Napa or Sonoma morning is not the first pass at the look.",
    ],
    bookingParagraphs: [
      "Send the date when you have it. No published lead time is special to Napa or Sonoma. If she is open, travel for that town is quoted per event, and only then does the retainer reserve the day.",
    ],
    steps: [
      "Inquire with the wedding date, the headcount, and hair, makeup, or both. Name Napa or Sonoma, and the town, in the location field.",
      "Add the getting-ready location and the be-ready time in the notes so the per-event travel quote is for the right place.",
      "After you have the travel quote, a $100 retainer and a signed contract hold the date. The retainer does not apply toward services.",
      "The contract is requested at least 30 days before the wedding.",
    ],
    images: [
      {
        src: "/images/gallery2.webp",
        alt: "Bride and wedding party posed outdoors after hair and makeup",
      },
      {
        src: "/images/gallery28.webp",
        alt: "Braided low updo on the mother of the bride",
      },
      {
        src: "/images/gallery31.webp",
        alt: "Natural glam makeup with a sleek center-parted style",
      },
    ],
    faqs: [
      {
        question: "Can you do both a Napa wedding and a Sonoma wedding?",
        answer:
          "She travels for weddings in Napa and in Sonoma. They are quoted separately. Tell her which county, and the town where you are getting ready, because a quote for one is not a quote for the other.",
      },
      {
        question: "How is travel to Napa or Sonoma charged?",
        answer:
          "Destination travel is quoted per event. She confirms that amount before a retainer holds the date. These weddings are not booked as if they were inside the 30 miles of included travel around her Rocklin studio.",
      },
      {
        question: "Where is the trial if the wedding is in Napa or Sonoma?",
        answer:
          "At her home studio in Rocklin, with no travel fee. Hair is $115, makeup is $115, and both together are $220. Brides are encouraged to schedule a trial before the wedding.",
      },
    ],
    ctaHeading: "Ask about a Napa or Sonoma date",
    ctaText:
      "Send the wedding date and the town where the party is getting ready, in Napa County or Sonoma County. Alaena will say if she is open and will quote travel for that event.",
  }),
  page({
    slug: "prom-quinceanera-hair-makeup-rocklin",
    title: "Prom and Quinceañera Hair and Makeup in Rocklin — Beauty by Alaena",
    description:
      "Prom, homecoming, and quinceañera hair and makeup in Rocklin with Alaena. On-location service, trials at her home studio, and $150 for hair or makeup.",
    eyebrow: "Prom and quinceañera",
    h1: "Prom and quinceañera hair and makeup in Rocklin",
    linkLabel: "Prom and quinceañera hair and makeup in Rocklin",
    group: "local",
    lede:
      "Alaena is based in Rocklin, and this page is for prom, homecoming, quinceañera, and other events, not bridal pricing. She comes to the Rocklin getting-ready location. One person can book, or a group can. The four-service wedding minimum does not apply.",
    sections: [
      {
        heading: "What an event booking in Rocklin includes",
        paragraphs: [
          "Event hair is $150 and event makeup is $150, per person. Book one or both. The rate covers prom, homecoming, quinceañera, photoshoot, birthday, gala, and other events. A group is several people at that same rate.",
          "On the day she comes to where you are getting ready. A Rocklin location is inside the 30 miles included from her studio, because the studio is in Rocklin. If the group is getting ready in Roseville, Granite Bay, Lincoln, Loomis, Auburn, Folsom, El Dorado Hills, or Sacramento, name that city. Past 30 miles, travel is $2 per mile, round trip, confirmed from the address.",
          "Event hair is about 45 minutes and event makeup about an hour per person. A $150 assistant fee may apply for a large party. The event menu does not list a separate flower-girl price.",
          "The date is held with a $100 retainer and a signed contract. The retainer does not apply toward the service prices.",
        ],
      },
    ],
    ratesIntro:
      "These are the special-event prices for a Rocklin prom, homecoming, quinceañera, or similar date. Bridal bride, bridesmaid, and flower-girl rates are a different menu, used when the event type is a wedding.",
    rateKind: "event",
    trialParagraphs: [
      "Trials are at her Rocklin home studio, with no travel fee. Hair is $115, makeup is $115, and both together are $220. You can book the event without one. If you want a trial, it stays at the studio even when the event is at a Rocklin house.",
    ],
    bookingParagraphs: [
      "There is no fixed lead time. Send the date and she will say if she is open. One prom client and a larger quince party both start with an inquiry, then a retainer and a contract if the day is free.",
    ],
    steps: [
      "Choose Prom, Homecoming, Quinceañera, or the matching event type, and enter the date, Rocklin, how many people, and hair, makeup, or both.",
      "Add the getting-ready address and the time you need to leave in the notes. A Rocklin address is local. A different city needs a travel check.",
      "A $100 retainer and a signed contract hold the date. The retainer does not apply toward the $150 service prices, and you do not need four services.",
      "The contract is requested at least 30 days before the event.",
    ],
    images: [
      {
        src: "/images/gallery32.webp",
        alt: "Soft glam eye makeup during a trial",
      },
      {
        src: "/images/gallery33.webp",
        alt: "Soft glam makeup with blonde waves",
      },
      {
        src: "/images/gallery34.webp",
        alt: "Glam makeup with a soft eye and loose waves",
      },
    ],
    faqs: [
      {
        question: "Can one person book prom hair and makeup in Rocklin?",
        answer:
          "Yes. Event hair is $150 and event makeup is $150 per person, and a single client can book one or both. The minimum of four services applies to wedding dates, not to prom, homecoming, or quinceañera bookings.",
      },
      {
        question: "Do you come to a Rocklin house for a quinceañera?",
        answer:
          "On the event day, Alaena travels to the getting-ready location. A Rocklin location is within the 30 miles of included travel from her studio. The trial, if you want one, is at the home studio and has no travel fee.",
      },
      {
        question: "How do I reserve a prom or quinceañera date?",
        answer:
          "Send the date in the inquiry. If she is open, a $100 retainer and a signed contract hold it. The retainer does not apply toward the service total. The contract is requested at least 30 days before the event.",
      },
    ],
    ctaHeading: "Check a Rocklin prom or quinceañera date",
    ctaText:
      "Send the date, how many people, and whether you want hair, makeup, or both. Alaena will tell you if she is open. Add a note if you also want a trial at the Rocklin studio.",
  }),
];

export function getLocalPage(slug: string): LocalPage {
  const found = localPages.find((entry) => entry.slug === slug);
  if (!found) {
    throw new Error(`Unknown local page: ${slug}`);
  }
  return found;
}
