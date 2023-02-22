import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider  from "next-auth/providers/credentials";
import { env } from "../../../env/server.mjs";
// import { prisma } from "../../../server/db/client";
import { PrismaClient } from '@prisma/client'
import Providers from 'next-auth/providers'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {


callbacks: {
  async signIn(params:any) {
    console.log(params,"-------------------------")
        const { account,user } = params; 
    if (account?.provider === 'google') {
      
      const { email } = user;
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
        include: {
          accounts: true,
        },
      });

      if (existingUser) {
        console.log(account);
        const googleAccount = existingUser.accounts?.find(
          (a) => a?.provider === 'google'
        );
        if (!googleAccount) {
          await prisma.account.create({
            data: {
              provider: account.provider,
              type:account.type,
              providerAccountId: account.providerAccountId,
              user: {
                connect: { email:email },
              },  
            },
          });
        }
      } else {
        console.log(account);
        await prisma.user.create({
          data: {
            email,
            password:"test",
            address:"test",
            accounts: {
              create: {
                provider: account.provider,
                type:account.type,
                providerAccountId: account.providerAccountId,
              },
            },
          },
        });
      }
      return true;
    }
    return false;
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
      async authorize(credentials:any, req) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        console.log(user)

        if (user && user.password === credentials.password) {
          return user;
        } else {
          throw new Error("Invalid email or password"); 
      }
    },
    }),
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    })
  ],
  pages:{
    signIn: "/login",
  },
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