<h1 align="center">
  Groops E-commerce Website
</h1>

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

Miscellaneous OKI Dev Resources:

https://uwoca-my.sharepoint.com/:w:/g/personal/czhan672_uwo_ca/ERWT4wNFbClPrRtoF49y3eUBeVWG58FtnWjCzUfrirjA8Q?e=JQpzj2

## Getting Started
Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

1. Clone the repository
```yaml
git clone https://github.com/HenryCZhang/OKI-T3JS.git
```
1.1 🚨 Read the First Steps of the T3 Stack setup:

```yaml
https://create.t3.gg/en/usage/first-steps
```

2. Add `.env` file to the root directory and configure the credentials in that file

4. NPM Install
```yaml
npm install
```
4. Run `npx prisma db push` from the root directory 
(This command will sync your Prisma schema with your database and will generate the TypeScript types for the Prisma Client based on your schema.)

🚨 only run this command when 'DATABASE_URL=file:./db.sqlite', otherwise the actual DB would be overwritten!‼️

```yaml
npx prisma db push
```
5. View the app locally
```yaml
npm run dev
```
6. Follow T3 Frist Steps for further configurations
```yaml
https://create.t3.gg/en/usage/first-steps
```


## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
