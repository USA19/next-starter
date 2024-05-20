# Basic NextApp

This is a barebon `Next.js` app with `authentication` ( basic/google-auth ), `authorization` in place using `next-auth`, `Tailwindcss` and `axios` ( for api calls ).

## Features

- Next-auth
- Google-auth
- Tailwind css
- openapi-typescript for types generation from backend
- Rest APIs Integration
- Yup (schema builder for runtime value parsing and validation)
- react-hook-form
- @hookform/resolvers
- react-icons

## Before you start

Make a copy of `.env.example` file as `.env` and add environment variables accordingly.
That's it.

## Getting Started

First, install the dependencies using

```bash
npm install
```

and then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Guidlines

- Edit the `tailwind.config.ts` and `app/globals.css` to update the theme of the app

- Edit the `middleware.ts` file to update the authentication or authorization logic.

- Edit the signin method in `app/api/auth/[...nextauth]/route.ts` file according to your application, also change the login route to login.

- You can more providers or more login options using the different providers, provided by the next-auth ( for more information pleasse visit [https://next-auth.js.org/providers/](https://next-auth.js.org/providers/) )

- To make an api call from the client and server components you need to import `useAxiosAuth` hook from `lib/hook` and `axios` from `lib/axios` respectivly.

Enjoy Coding!
