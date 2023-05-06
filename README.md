
This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

🗺️ [Page Routing Map](https://miro.com/welcomeonboard/NXdEcWtrQWFGeUJNQWI3blNFQXpQSW9ySkR0czAzNUV6VWN0bkViY2lBM0hJWkJnc000REhxQ1BIa2VqZE9WdXwzNDU4NzY0NTE3MTM3NjkxNzk1fDI=?share_link_id=249460423803)

📝 [Dev Standardization](https://uwoca-my.sharepoint.com/:p:/g/personal/czhan672_uwo_ca/EVUIgLS4TY1AvOaXxFb3wLoBhI0iKf6BFOLQuVjPHSnwjQ?e=VdJRwa)

📆 [Project Log](https://github.com/orgs/GroopsWebDev/projects/2)

⌨️ [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

⌨️ [Ultimate Tailwind CSS Tutorial](https://www.youtube.com/watch?v=pfaSUYaSgRo)

🛍️ [最新團購邏輯+說明 April 20th](https://docs.google.com/document/d/1_vmmMtdhGWJg9gy_RMMCRAJhYQAxJYdPyOAUc_hiSMk/edit#heading=h.bypzj6sb1uvj)

⭐️ [Backend API Doc](https://docs.google.com/document/d/1o7Gv-NRj29BsmfoKJ8SqpvkHme7VCQwIIcMiVAp1nW4/edit?usp=sharing)

⭐️ [Backend Commodities List](https://uwoca-my.sharepoint.com/:x:/g/personal/czhan672_uwo_ca/EbgkCuTfktNItYqdIJKolooBwYDQbcUHkj8rqhmVrJK8vw?e=x0cUj4): (Add these products to DB + Display on the frontend)

⭐️ [Miscellaneous OKI Dev Resources](https://uwoca-my.sharepoint.com/:w:/g/personal/czhan672_uwo_ca/ERWT4wNFbClPrRtoF49y3eUBeVWG58FtnWjCzUfrirjA8Q?e=JQpzj2)

🧑🏻‍💻 [Groops 技术组文案 Google Doc](https://drive.google.com/drive/folders/1WMX8lih_z8u6f5l4JqASJsooj5A1BmVc)

📑 [Groops 网页文案素材 Google Doc](https://drive.google.com/drive/folders/1P12ub1fNfw6AiWATmXrmP9MWOvJXKDdl)

🧰 [Groops 董事会 Google Doc](https://drive.google.com/drive/folders/1xEKxPaBMwIzt-sqtS7GUNSB6pYQxiqd2)

<div align="center">
  <h3>Version Control Flow</h3>
  <img alt= "Git Version Control Flow.png" src="https://github.com/HenryCZhang/OKI-T3JS/blob/dev/README_Img/Git Version Control Flow.png" width="80%"/>
</div>
<p align="center"><i>~Before changing your code:</i></p>
<p align="center">Git pull <b>Derick</b> (make sure your branch is consistent with the <b>Derick</b> branch)</p>
<p align="center">Coding…</p>
<p align="center"><i>~After changing your code:</i></p>
<p align="center">Git push (push your code to your branch - > PR to the <b>Derick</b> branch)</p>
<p align="center">Derick resolves any merge conflicts/bugs -> PR <b>Dev</b> branch -> Henry+Linus peer review</p>

<div align="center">
  <h3>Folder Structure + File Naming Convention</h3>
  <img alt= "Git Version Control Flow.png" src="https://github.com/HenryCZhang/OKI-T3JS/blob/dev/README_Img/naming convention.png" width="100%"/>
</div>

<div align="center">
  <h3>Agile Devops</h3>
  <img alt= "Git Version Control Flow.png" src="https://github.com/HenryCZhang/OKI-T3JS/blob/dev/README_Img/agile_devops.png" width="100%"/>
</div>

<div align="center">
  <h3>Scrum Framework</h3>
  <img alt= "Git Version Control Flow.png" src="https://github.com/HenryCZhang/OKI-T3JS/blob/dev/README_Img/scrum_framework.png" width="100%"/>
</div>

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
