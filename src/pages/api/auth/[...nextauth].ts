import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";
import Providers from "next-auth/providers";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        return true;
      }
      return false;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token?.user?.id;
      session.user.firname = token?.user?.firname;
      session.user.lastname = token?.user?.lastname;
      return session;
    },
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        const user: any = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (user) {
          const isPassword = bcrypt.compareSync(
            credentials.password,
            user.password
          );
   
          if (isPassword) {
            return user;
          } else {
            return false;
          }
        }
        return false;
      },
    }),
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

// import NextAuth, { NextAuthOptions } from "next-auth";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";
// import { NextApiRequest, NextApiResponse } from "next";

// const prisma = new PrismaClient();

// const options: NextAuthOptions = {
//   providers: [],
//   adapter: PrismaAdapter(prisma),
//   pages: {
//     signIn: "/login",
//   },
// };

// export default (req: NextApiRequest, res: NextApiResponse<any>) => NextAuth(req, res, options);
