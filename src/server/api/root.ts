import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { LoveListRouter } from "./routers/lovelist";
import { orderRouter } from "./routers/order";
import { walletRouter } from "./routers/wallet";
import { addressRouter } from "./routers/address";
import { membershipRouter } from "./routers/membership";
import { groupRouter } from "./routers/group";
import { productRouter } from "./routers/product";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  lovelist: LoveListRouter,
  orderapi: orderRouter,
  walletapi: walletRouter,
  addressapi: addressRouter,
  membershipapi: membershipRouter,
  groupapi: groupRouter,
  productapi: productRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
