import { formatDate } from "@/utils/format.ts";
import { Event } from "@/utils/types.ts";

export function EventDetail(props: { event: Event }) {
  const { event } = props;

  return (
    <div class="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>

      <div class="space-y-4 mb-6">
        <div class="flex items-start space-x-3">
          <svg
            class="w-5 h-5 text-gray-500 mt-1 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <div>
            <p class="text-sm font-medium text-gray-500">Start</p>
            <p class="text-gray-900">{formatDate(event.data.start)}</p>
          </div>
        </div>

        {event.data.end && (
          <div class="flex items-start space-x-3">
            <svg
              class="w-5 h-5 text-gray-500 mt-1 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div>
              <p class="text-sm font-medium text-gray-500">End</p>
              <p class="text-gray-900">{formatDate(event.data.end)}</p>
            </div>
          </div>
        )}
      </div>

      {event.description && (
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-3">Description</h2>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">
            {event.description}
          </p>
        </div>
      )}

      {event.url && (
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <span>View Event</span>
          <svg
            class="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
    </div>
  );
}
