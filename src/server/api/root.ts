import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { LoveListRouter } from "./routers/lovelist";
import { orderRouter } from "./routers/order";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  lovelist: LoveListRouter,
  orderapi: orderRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
