import { router } from "../trpc";
import { authRouter } from "./auth";
import { categoryRouter } from "./category";
import { groupRouter } from "./group";

export const appRouter = router({
  auth: authRouter,
  group: groupRouter,
  category: categoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
