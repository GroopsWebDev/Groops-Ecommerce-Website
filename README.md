
This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

* Frontend - [Tailwind UI](https://tailwindui.com/components)
* Auth - [Clerk Next.js](https://clerk.com/docs/nextjs/get-started-with-nextjs)
* API Routing - [tRPC](https://trpc.io/docs/)
* DOM - [Prisma](https://www.prisma.io/docs)
* DB - MYSQL

📆 [Project Log](https://github.com/orgs/GroopsWebDev/projects/2)

📆 [产品部进度报告](https://docs.google.com/document/d/1Pc2bk3EGPR1z4tmkcqf-JRUmAp8r97iaMK5ahye9GRY/edit)

🗺️ [UI Figma Design](https://www.figma.com/file/7HXhy23kgizbej6cWZh3qA/Groops?type=design&node-id=4-62&t=G1G6K5PVtK4Gwtno-0)

🗺️ [UI Figma Design Page Routing](https://www.figma.com/file/CBk2Ut3511bv54BuOUbmAw/Groops-User-Flow?type=whiteboard&node-id=0-1&t=tHJRPMVvh2iEtrlh-0)

🗺️ [Backend ER disgram](https://lucid.app/lucidchart/a938cde6-3b28-4ff7-8886-640e5ae5233d/edit?shared=true&page=0_0&invitationId=inv_d276e011-6fb4-429e-814f-4be425b53329#)

📝 [Dev Standardization](https://uwoca-my.sharepoint.com/:p:/g/personal/czhan672_uwo_ca/EVUIgLS4TY1AvOaXxFb3wLoBhI0iKf6BFOLQuVjPHSnwjQ?e=VdJRwa)

⌨️ [Add Prisma to existing project steps](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql)

⌨️ [Prisma CLI reference](https://www.prisma.io/docs/reference/api-reference/command-reference#db-pull)

⌨️ [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

⌨️ [Ultimate Tailwind CSS Tutorial](https://www.youtube.com/watch?v=pfaSUYaSgRo)

🛍️ [最新團購邏輯+說明 April 20th](https://docs.google.com/document/d/1_vmmMtdhGWJg9gy_RMMCRAJhYQAxJYdPyOAUc_hiSMk/edit#heading=h.bypzj6sb1uvj)

⭐️ [Backend API Doc](https://docs.google.com/document/d/1o7Gv-NRj29BsmfoKJ8SqpvkHme7VCQwIIcMiVAp1nW4/edit?usp=sharing)

⭐️ [Backend Commodities List](https://uwoca-my.sharepoint.com/:x:/g/personal/czhan672_uwo_ca/EbgkCuTfktNItYqdIJKolooBwYDQbcUHkj8rqhmVrJK8vw?e=x0cUj4): (Add these products to DB + Display on the frontend)

⭐️ [Miscellaneous OKI Dev Resources](https://uwoca-my.sharepoint.com/:w:/g/personal/czhan672_uwo_ca/ERWT4wNFbClPrRtoF49y3eUBeVWG58FtnWjCzUfrirjA8Q?e=JQpzj2)

🧑🏻‍💻 [Groops 技术组文案 Google Doc](https://drive.google.com/drive/folders/1WMX8lih_z8u6f5l4JqASJsooj5A1BmVc)

📑 [Groops 网页文案素材 Google Doc](https://drive.google.com/drive/folders/1P12ub1fNfw6AiWATmXrmP9MWOvJXKDdl)

🧰 [Groops 董事会 Google Doc](https://drive.google.com/drive/folders/1xEKxPaBMwIzt-sqtS7GUNSB6pYQxiqd2)

❓[Web-dev Q+A](https://docs.google.com/document/d/1xbTEm59amO6YChKOCzaQmR2yuxGz1lV-g4aclH5apiY/edit?usp=sharing)

🔑 chatGPT Groops account: `team@gr-oops.com` password: `Groops1122`.

🔑 Tailwind UI Dev (Harvey account): `zichengzhao@g.ucla.edu` password: `Zichengzhao+1234`


<div align="center">
  <h3>Version Control Flow</h3>
  <img alt= "Git Version Control Flow.png" src="https://github.com/GroopsWebDev/Groops-Ecommerce-Website/blob/derick-clark-auth/README_Img/Git%20Version%20Control%20Flow.png" width="80%"/>
</div>
<p align="center"><i>~Before changing your code:</i></p>
<p align="center">Git pull <b>Derick</b> (make sure your branch is consistent with the <b>Derick</b> branch)</p>
<p align="center">Coding…</p>
<p align="center"><i>~After changing your code:</i></p>
<p align="center">Git push (push your code to your branch - > PR to the <b>Derick</b> branch)</p>
<p align="center">Derick resolves any merge conflicts/bugs -> PR <b>Dev</b> branch -> Henry+Linus peer review</p>

<div align="center">
  <h3>Folder Structure + File Naming Convention</h3>
  <img alt= "File Naming Convention.png" src="https://github.com/GroopsWebDev/Groops-Ecommerce-Website/blob/derick-clark-auth/README_Img/naming%20convention.png" width="100%"/>
</div>

<div align="center">
  <h3>Dev Timeline</h3>
  <img alt= "Dev Timeline.png" src="https://github.com/GroopsWebDev/Groops-Ecommerce-Website/blob/derick-clark-auth/README_Img/tech%20timeline.png" width="70%"/>
</div>

## Getting Started
Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

🚨 Read the First Steps of the [T3 Stack setup](https://create.t3.gg/en/usage/first-steps)

1. Clone the repository
```yaml
https://github.com/GroopsWebDev/Groops-Ecommerce-Website.git
```

2. Add `.env` file to the root directory and configure the credentials in that file

```yaml
cp .env.example .env
```

3. NPM Install
```yaml
npm install
```

4. Run `npx prisma db pull` from the root directory 
(The db pull command connects to your database and adds Prisma models to your Prisma schema that reflect the current database schema.)
```yaml
npx prisma db pull
```

5. Install/Update Prisma Client 
```yaml
npx prisma generate
```

⌨️ [Add Prisma to existing project steps](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql)

<div align="center">
  <img alt= "Prisma DB pull.png" src="https://github.com/GroopsWebDev/Groops-Ecommerce-Website/blob/derick-clark-auth/README_Img/prisma%20db%20pull.png" width="80%"/>
</div>
<div align="center">
  <img alt= "Prisma DB pull.png" src="https://github.com/GroopsWebDev/Groops-Ecommerce-Website/blob/Derick/README_Img/Change%20the%20database%20schema.png" width="80%"/>
</div>
<div align="center">
  <img alt= "Prisma DB pull.png" src="https://github.com/GroopsWebDev/Groops-Ecommerce-Website/blob/Derick/README_Img/Change%20the%20database%20schema.png" width="80%"/>
</div>

Run `npx prisma studio` to access the GUI to view and edit data in your database
```yaml
npx prisma studio
```

Run `npx prisma studio` to access the GUI to view and edit data in your database
```yaml
npx prisma studio
```

6. View the app locally
```yaml
npm run dev
```

7. Follow T3 Frist Steps for further configurations
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

<div align="center">
  <h3>Agile Devops</h3>
  <img alt= "agile_devops.png" src="https://github.com/GroopsWebDev/Groops-Ecommerce-Website/blob/derick-clark-auth/README_Img/agile_devops.png" width="100%"/>
</div>

<div align="center">
  <h3>Scrum Framework</h3>
  <img alt= "scrum_framework.png" src="https://github.com/GroopsWebDev/Groops-Ecommerce-Website/blob/derick-clark-auth/README_Img/scrum_framework.png" width="100%"/>
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
