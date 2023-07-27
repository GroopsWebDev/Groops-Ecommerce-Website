import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "~/server/api/routers/user";
import { LoveListRouter } from "./routers/lovelist";
import { orderRouter } from "./routers/order";
import { walletRouter } from "./routers/wallet";
import { addressRouter } from "./routers/address";
import { membershipRouter } from "./routers/membership";
import { groupRouter } from "./routers/group";
import { productRouter } from "./routers/product";
import { ShoppingCartRouter } from "./routers/cart";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  lovelist: LoveListRouter,
  order: orderRouter,
  wallet: walletRouter,
  address: addressRouter,
  membership: membershipRouter,
  group: groupRouter,
  product: productRouter,
  cart: ShoppingCartRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
