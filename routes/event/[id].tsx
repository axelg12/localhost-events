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
  const description = event.description || `Event starting ${formatDate(event.data.start)}`;
  const url = ctx.url.toString();
  
  // Ensure dates are in ISO 8601 format for Open Graph
  const startTimeISO = event.data.start ? new Date(event.data.start).toISOString() : null;
  const endTimeISO = event.data.end ? new Date(event.data.end).toISOString() : null;

  return (
    <Partial name="event">
      <Head>
        {/* Open Graph meta tags */}
        <meta property="og:title" content={event.title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="event" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Localhost Events" />
        {startTimeISO && (
          <meta property="event:start_time" content={startTimeISO} />
        )}
        {endTimeISO && (
          <meta property="event:end_time" content={endTimeISO} />
        )}
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={event.title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <EventDetail event={event} />
    </Partial>
  );
});
