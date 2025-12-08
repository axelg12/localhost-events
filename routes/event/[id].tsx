import { define } from "@/utils.ts";

import { Head, Partial } from "fresh/runtime";

import type { RouteConfig } from "fresh";
import { EventDetail } from "@/components/EventDetail.tsx";
import { formatDate } from "@/utils/format.ts";

export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default define.page((ctx) => {
  const id = ctx.params.id;
  const event = ctx.state.events.find((e) => e.id === Number(id));
  if (!event) {
    return (
      <div class="bg-white rounded-lg shadow-md p-8">
        <p class="text-red-600">Event not found</p>
      </div>
    );
  }

  // Generate meta tag content
  const title = event.title;
  const description = event.description || `Event starting ${formatDate(event.data.start)}`;
  const url = ctx.url.toString();

  return (
    <Partial name="event">
      <Head>
        {/* Open Graph meta tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="event" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Localhost Events" />
        {event.data.start && (
          <meta property="event:start_time" content={event.data.start} />
        )}
        {event.data.end && (
          <meta property="event:end_time" content={event.data.end} />
        )}
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <EventDetail event={event} />
    </Partial>
  );
});
