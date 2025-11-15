import { App, staticFiles } from "fresh";
import { define, type State } from "./utils.ts";
import { Event } from "./utils/types.ts";

export const app = new App<State>();

app.use(staticFiles());

// Pass a shared value from a middleware
app.use(async (ctx) => {
  const meetupsUrl = Deno.env.get("MEETUPS_API_URL") ||
    "https://apis-is.koddsson.deno.net/x/meetups";
  const meetups = await fetch(meetupsUrl);
  const data = await meetups.json();
  const eventsWithID = data.map((event: Event, idx: number) => ({
    ...event,
    id: idx,
  }));
  ctx.state.events = eventsWithID;
  return await ctx.next();
});

// this is the same as the /api/:name route defined via a file. feel free to delete this!
app.get("/api2/:name", (ctx) => {
  const name = ctx.params.name;
  return new Response(
    `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`,
  );
});

// this can also be defined via a file. feel free to delete this!
const exampleLoggerMiddleware = define.middleware((ctx) => {
  return ctx.next();
});
app.use(exampleLoggerMiddleware);

// Include file-system based routes here
app.fsRoutes();
