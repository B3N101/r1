This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Create a mysql instance or have one hosted on AWS RDS or similar. Create a database and a user with read/write access to the database.

Create a .env.local file in the root of the project and add the following environment variables:

```bash
DATABASE_URL='mysql://root:password@localhost:port_name/database_name'
```

### Install dependencies
```bash
npm install
```



## Prisma
### Install Prisma CLI
```bash
npm install -g prisma
```

### Generate Prisma Client
```bash
npx prisma generate
```

### Migrate the database
```bash
npx prisma migrate dev --name init
```

### Seed the database
```bash
npx prisma db seed --preview-feature
```




## Running the app
### First, run the development server:

```bash
npm run dev
```
### Run in production build

```bash
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### You can modify the port by setting the PORT environment variable. For example:

```bash
PORT=3001 npm run dev
```
or for production build

```bash
PORT=3001 npm run start
```


## API Routes
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Upgrade guide
```
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
```

## Vulnerabilities
- use osv to check for vulnerabilities
- osv scanner from homebrew -> ```brew install osv-scanner```
- ```osv-scanner package-lock.json```


## GIT:
- git status 
- git commit -m "message"
- git push origin
- git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'
  - should use 
    - alias git-log-styled="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'"
    - put into .zshrc for macos