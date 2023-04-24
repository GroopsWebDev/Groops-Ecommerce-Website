## Getting Started
Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

Download Git link
```yaml
https://git-scm.com/downloads
```

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

4. NPM Install
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
