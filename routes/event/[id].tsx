import { define } from "@/utils.ts";
import { EventDetail } from "@/components/EventDetail.tsx";

const HARDCODED_EVENTS = [
  {
    "id": "1",
    "title": "Gervigreindarbransinn: Demó-kvöld!",
    "description":
      "Við höldum áfram að hittast og ræða gervigreind - og nú er komið að demó-kvöldi. Hvort sem það eru nýjar gervigreindarlausnir eða lausnir unnar með gervigreind munu allar kynningarnar ganga út á að sýna hugbúnað - ekki glærur.\n\nSem fyrr verður viðburðurinn í formi 6 x 10 mínútna örerinda og góðu hléi til skrafs og ráðagerða og markmiðið að læra hvert af öðru og tengjast öðrum sem vinna með gervigreind og að gervigreindarlausnum á Íslandi í vingjarnlegu og afslöppuðu umhverfi.\n\nNú þegar komnir nokkrir frábærir fyrirlesarar á dagskrá, en ef þið hafið áhuga á að sýna eitthvað skemmtilegt, endilega setjið ykkur í samband!",
    "url": "https://www.linkedin.com/events/7384646116929077248/",
    "data": {
      "start": "2025-11-20T20:00:00Z",
      "end": "2025-11-20T22:00:00Z",
    },
  },
  {
    "id": "2",
    "title": "Travel Tech hittingur - Nóvember",
    "description":
      "Góður hópur tæknifólks í ferðaþjónustu hittist annan fimmtudag hvers mánaðar til að setjast niður og ræða málefni líðandi stundar, tæknilausnir, sögur af gömlum tæknilausnum og spádóma um tæknilausnir framtíðarinna ásamt því sem er verið að bralla í ferðamálabransanum.\nVelkomið að bjóða félögum með.\nVið hittumst á RVK Brewing Tónabió, Skipholti 33, þann 13. nóvember kl 16:00",
    "url": "https://www.facebook.com/events/1319495819661458",
    "data": {
      "start": "2025-11-13T16:00:00Z",
      "end": null,
    },
  },
  {
    "id": "3",
    "title": "Databeers #14",
    "description": null,
    "url": "https://www.facebook.com/events/1320222135963028",
    "data": {
      "start": "2025-12-04T17:30:00Z",
      "end": "2025-12-04T20:30:00Z",
    },
  },
];

export default define.handlers({
  GET(ctx) {
    const id = ctx.params.id;
    const event = HARDCODED_EVENTS.find((e) => e.id === id);

    if (!event) {
      return ctx.render(
        <div class="bg-white rounded-lg shadow-md p-8">
          <p class="text-red-600">Event not found</p>
        </div>,
      );
    }

    return ctx.render(<EventDetail event={event} />);
  },
});
