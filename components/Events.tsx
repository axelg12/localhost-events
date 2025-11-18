import { formatDate } from "@/utils/format.ts";
import { Event } from "@/utils/types.ts";

export function Events(props: { title: string; events: Event[] }) {
  // Sort events by date - earliest dates first
  const sortedEvents = [...props.events].sort((a, b) => {
    // Handle cases where start date might be null
    if (!a.data.start && !b.data.start) return 0;
    if (!a.data.start) return 1; // Push null dates to the end
    if (!b.data.start) return -1; // Push null dates to the end

    // Compare dates - earlier dates come first
    return new Date(a.data.start).getTime() - new Date(b.data.start).getTime();
  });

  return (
    <div>
      <h2 class="text-xl font-bold text-gray-800 mb-3">{props.title}</h2>
      <ul class="space-y-2">
        {sortedEvents.map((event, idx) => (
          <li key={idx}>
            <button
              type="button"
              f-partial={`/event/${event.id}`}
              class="w-full text-left block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 border border-transparent hover:border-blue-200"
            >
              <span class="font-medium">{event.title}</span>
              {event.data.start && (
                <span class="block text-sm text-gray-500 mt-1">
                  {formatDate(event.data.start)}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
