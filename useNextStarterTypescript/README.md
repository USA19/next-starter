# Basic NextApp

This is a barebon `Next.js` app with `authentication` ( basic/google-auth ), `authorization` in place using `next-auth`, `Tailwindcss`, `openapi-typescript` ( for generating types ), `openapi-fetch` and `Typescript`.

## Features

- Next-auth
- google-auth
- Tailwindcss
- openapi-typescript
- Typescript
- Rest APIs
- yup
- react-hook-from
- @hookform/resolvers
- react-icons

## Before you start

Add the environment variables in .env, To know all the env variables to be entered please check `.env.example` file and chekck `package.json` file to update the following script.

`"generate-types": "npx openapi-typescript path-to-swegger-json -o ./generated/index.ts"`

That's it.

## Getting Started

First, install the dependencies using

```bash
npm install
```

now, generate your types using this command

```bash
npm generate-types
```

and then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Guidlines

- Edit the `tailwind.config.ts` and `app/globals.css` to update the theme of the app

- Change the user type according to your user in the `types/next-auth.d.ts` file for next-auth to know the type or user.

- Edit the `middleware.ts` file to update the authentication or authorization logic.

- Edit the signin method in `app/api/auth/[...nextauth]/route.ts` file according to your application, also change the login route to login.

- You can more providers or more login options using the different providers, provided by the next-auth ( for more information pleasse visit [https://next-auth.js.org/providers/](https://next-auth.js.org/providers/) )

- To make an api call from the client and server components you need to import `useClientAuth` hook from `lib/hook` and `client` from `api-client` respectivly.

Enjoy Coding!
