# Jotno

> Full-stack Next.js marketplace for services and products.

## Overview

Jotno is a modern web application built with Next.js (App Router) that lets users browse products and services, book services, manage a cart, and complete payments. It includes authentication (email + social), booking flows, payment history, and server-side actions for managing products and services.

## Tech stack

- Next.js (App Router)
- React
- Node.js server routes / server actions
- MongoDB
- NextAuth for authentication
- Email provider for notifications

## Key features

- Authentication with email and social providers (Google, GitHub)
- Product and service listings with detail pages
- Booking flow and cart management
- Server-side payment handling and payment history
- Reusable component library for UI elements (auth forms, cards, layout)

## Project layout

Primary code lives under `src/`:

- `src/app` — pages and App Router routes
- `src/components` — UI components used across the app
- `src/actions/server` — server actions and API-like handlers
- `src/lib` — helpers such as DB connect and auth options

## Environment

Create a `.env` file with at least the following variables (use your own secrets — do not commit this file):

```
MONGODB_URI=your_mongodb_connection_string
DBNAME=your_database_name
NEXT_PUBLIC_server_url=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_ID=your_github_oauth_client_id

NEXTAUTH_SECRET=your_nextauth_secret

EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
```

Note: The repository contains an example `.env` locally; remove or rotate any committed secrets immediately.

## Local development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Deployment

This project can be deployed to platforms that support Next.js (e.g., Vercel). Ensure all environment variables are added to the deployment provider and that `NEXTAUTH_SECRET` and DB credentials are kept secret.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with a clear description of the change.

## License

This project does not include a license file. Add an appropriate license for your needs.
