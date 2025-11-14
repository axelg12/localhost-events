import { define } from "@/utils.ts";

import { Partial } from "fresh/runtime";

import type { RouteConfig } from "fresh";
import { EventDetail } from "@/components/EventDetail.tsx";

export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default define.page((ctx) => {
  const id = 0;
  const event = ctx.state.events.find((e) => e.id === id);
  if (!event) {
    return (
      <div class="bg-white rounded-lg shadow-md p-8">
        <p class="text-red-600">Event not found</p>
      </div>
    );
  }
  return (
    <Partial name="event">
      <EventDetail event={event} />
    </Partial>
  );
});
