import { Head, Partial } from "fresh/runtime";
import { define } from "../utils.ts";
import { Events } from "../components/Events.tsx";

export default define.page(function Home(ctx) {
  const events = ctx.state.events;

  const today = new Date();

  const upcomingEvents = events.filter((event) =>
    event.data.start && new Date(event.data.start) > today
  );
  const pastEvents = events.filter((event) =>
    event.data.start && new Date(event.data.start) < today
  );

  return (
    <div class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Head>
        <title>Localhost Events - Browse upcoming programming and tech events</title>
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Localhost Events" />
        <meta property="og:description" content="Browse upcoming and past programming and tech related events in your area." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ctx.url.toString()} />
        <meta property="og:site_name" content="Localhost Events" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Localhost Events" />
        <meta name="twitter:description" content="Browse upcoming and past programming and tech related events in your area." />
      </Head>

      <div class="container mx-auto px-4 py-6">
        <div class="mb-6 text-center">
          <img
            class="mx-auto mb-4"
            src="/logo.png"
            width="64"
            height="64"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-3xl font-bold text-gray-900">
            Localhost Events
          </h1>
          <p class="text-gray-600 mt-2">Browse upcoming and past events</p>
        </div>

        <div
          f-client-nav
          class="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto"
        >
          {/* Left Sidebar */}
          <aside class="lg:w-120 shrink-0">
            <div class="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <Events events={upcomingEvents} title="Upcoming events" />
              <Events events={pastEvents} title="Past events" />
            </div>
          </aside>

          {/* Main Content Area */}
          <main
            id="main-content"
            class="flex-1 min-h-[400px]"
          >
            <div class="bg-white rounded-lg shadow-md p-8 flex items-center justify-center">
              <div class="text-center text-gray-500">
                <svg
                  class="w-16 h-16 mx-auto mb-4 text-gray-400"
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
                <Partial name="event">
                  <p class="text-lg font-medium">
                    Select an event to view details
                  </p>
                  <p class="text-sm mt-2">
                    Click on any event from the sidebar
                  </p>
                </Partial>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
});
