import { createDefine } from "fresh";
import { Event } from "@/utils/types.ts";

// This specifies the type of "ctx.state" which is used to share
// data among middlewares, layouts and routes.
export interface State {
  events: Event[];
}

export const define = createDefine<State>();
