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
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {

// callbacks: {
//   // async signIn(params:any) 
//   // {
//   //   const {user,account,profile} = params;
//   //   if (account.provider === 'google') {
//   //     const { email, name, image } = profile
//   //     await prisma.user.upsert({
//   //       where: { email },
//   //       update: { name, image },
//   //       create: { email, name, image,password:"test",address:"test" },
//   //     })
//   //   }
//   //   return true
//   // },
  
//     async signIn(params:any) {
//       const { provider, id, email } = params.account;
//       const user = params.user;

//       if (provider === 'google' && email) {
//         const existingUser = await prisma.user.findUnique({
//           where: { email },
//         })

//         if (!existingUser) {
//           // Create a new user account and link it to the Google provider
//           const newUser = await prisma.user.create({
//             data: {
//               email,
//               name: user.name,
//               image: user.image,
//               google: { connect: { id } },
//             },
//           })
//           return true
//         } else if (!existingUser.google) {
//           // Link the existing user account to the Google provider
//           await prisma.user.update({
//             where: { id: existingUser.id },
//             data: { google: { connect: { id } } },
//           })
//           return true
//         }
//       }

//       // Return false to stop the sign in flow if the provider is not Google or no email is provided
//       return false
//     },
  
// },
  
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
        const user:any = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        console.log(bcrypt.compareSync(credentials.password,user?.password))

        if (user) {
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