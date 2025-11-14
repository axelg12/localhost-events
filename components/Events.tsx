import { formatDate } from "@/utils/format.ts";
import { Event } from "@/utils/types.ts";

export function Events(props: { title: string; events: Event[] }) {
  return (
    <div>
      <h2 class="text-xl font-bold text-gray-800 mb-3">{props.title}</h2>
      <ul class="space-y-2">
        {props.events.map((event, idx) => (
          <li key={idx}>
            <a
              href={`/event/${event.id}`}
              f-partial="event"
              class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 border border-transparent hover:border-blue-200"
            >
              <span class="font-medium">{event.title}</span>
              {event.data.start && (
                <span class="block text-sm text-gray-500 mt-1">
                  {formatDate(event.data.start)}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
