
This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

🚨 Groops Dev Issues:

```yaml
https://uwoca-my.sharepoint.com/:w:/g/personal/czhan672_uwo_ca/EfWIqNScCtBBqtfVSNinWdIB1pOLnpSz6XHKiDKvRz0gyQ?e=C7hgk8
```

⏰ Derick - Groops Task Assignment.dox:

```yaml
https://uwoca-my.sharepoint.com/:w:/g/personal/czhan672_uwo_ca/EZO35ee6dfFGm_zWHaig7Z8B_96hTGguxeEebz7u2C4V0w?e=BhWNVG
```

⏰ Eddy - Groops Task Assignment.dox:

```yaml
https://uwoca-my.sharepoint.com/:w:/g/personal/czhan672_uwo_ca/EWTa7gVQt5BNtwNAt9fMI0oBsqjrpnbra-zi0x8voYpU1Q?e=0c2yei
```

⏰ Harvey - Groops Task Assignment.dox:

```yaml
https://uwoca-my.sharepoint.com/:w:/g/personal/czhan672_uwo_ca/EakdoHZGzZpFvKwNZ98AobABv7enXlpdPRYVVmxPB3Xatw?e=UoibP1
```

🛍️ 最新團購邏輯+說明 April 20th:

```yaml
https://docs.google.com/document/d/1_vmmMtdhGWJg9gy_RMMCRAJhYQAxJYdPyOAUc_hiSMk/edit#heading=h.bypzj6sb1uvj
```

🛍️ 团购process:

```yaml
https://uwoca-my.sharepoint.com/:w:/g/personal/czhan672_uwo_ca/EQ3qr8dtnM5EpOtVDzGK1PAB4AUkZp0b62IPptWD2qxhoQ?e=mHfX4p
```

⭐️ Backend API Doc:

```yaml
https://docs.google.com/document/d/1o7Gv-NRj29BsmfoKJ8SqpvkHme7VCQwIIcMiVAp1nW4/edit?usp=sharing
```

⭐️ Backend Commodities List: (Add these products to DB + Display on the frontend)

```yaml
https://uwoca-my.sharepoint.com/:x:/g/personal/czhan672_uwo_ca/EbgkCuTfktNItYqdIJKolooBwYDQbcUHkj8rqhmVrJK8vw?e=x0cUj4
```

⭐️ Miscellaneous OKI Dev Resources:

```yaml
https://uwoca-my.sharepoint.com/:w:/g/personal/czhan672_uwo_ca/ERWT4wNFbClPrRtoF49y3eUBeVWG58FtnWjCzUfrirjA8Q?e=JQpzj2
```

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

```yaml
cp .env.example .env
```

3. NPM Install
```yaml
npm install
```

4. Run `npx prisma db push` from the root directory 
(This command will sync your Prisma schema with your database and will generate the TypeScript types for the Prisma Client based on your schema.)

🚨 only run this command when 'DATABASE_URL=file:./db.sqlite', otherwise the actual DB would be overwritten‼️

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

## Front End SVG Embedment:

(Adobe XD account is reuqired to use Adobe XD App. ‼️ Only 2 devices are allowed to use one account simultaneously ‼️)

🔑 Adobe XD Account Username: 
```yaml
cartiern@okimart.com
```
Adobe XD Account Password: 
```yaml
Lkh123456
```

👁️ Groops XD Design File Online (missing special fonts): 

```yaml
https://js.design/f/tG6OLu?p=Ug3WOcDXLK
```

1. Open XD file in Adobe XD app, select the section and right click on it. Click 'copy svg code'.
<div align="center">
  <img alt= "export svg" src="https://github.com/HenryCZhang/OKI-T3JS/blob/dev/README_Img/export_svg.png" width="70%"/>
</div>

2. In your code editor, create a SVG file in public/assets directory, paste the SVG code there and delete Width and Height properties!
<div align="center">
  <img alt="edit svg" src="https://github.com/HenryCZhang/OKI-T3JS/blob/dev/README_Img/edit_svg.png" width="70%"/>
</div>


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



Shopping Cart item storage methods:
https://www.pc6.com/infoview/Article_29864.html

To add new product information to database(Release 1.0)
type 'npx prisma studio' in terminal to open localhost port
the port contains basic UI.
