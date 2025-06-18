<p align="center">
  <img src="public/TSR_Logos_gold.png" alt="Two Sisters Ranch Logo" width="400">
</p>

# Two Sisters Ranch Website

This is the official website for Two Sisters Ranch, built with Next.js, Tailwind CSS, and integrated with Stripe for handling puppy and training deposits.

## Project Overview

The website serves as an informational hub and point of contact for Two Sisters Ranch. It provides details about available puppies, the puppy imprinting program, and allows prospective clients to place deposits securely online.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (v14+)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Payments:** [Stripe](https://stripe.com/)
- **Deployment:** (Ready for Vercel, Netlify, or other Node.js hosting)

---

## Getting Started

Follow these instructions to get the project running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/) (or yarn/pnpm)

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

This project requires environment variables to connect to Stripe.

1.  Create a new file named `.env.local` in the root of the project (`/website`).
2.  Copy the contents of `.env.example` into `.env.local`.
3.  Fill in the values with your own Stripe API keys. You can find these in your [Stripe Dashboard](https://dashboard.stripe.com/apikeys).

Your `.env.local` file should look like this:

```
# Stripe API Keys (Found in your Stripe Dashboard)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Stripe Price IDs (Create these in your Stripe Dashboard under 'Products')
NEXT_PUBLIC_PUPPY_DEPOSIT_PRICE_ID=price_...
NEXT_PUBLIC_TRAINING_DEPOSIT_PRICE_ID=price_...
```

**Important:** The `.env.local` file is included in `.gitignore` and should never be committed to version control.

---

## Running the Application

### Development Server

To run the app in development mode, use the following command. The site will be available at `http://localhost:3003`.

```bash
npm run dev
```

The application is configured to always run on **port 3003** for consistency.

### Production Build

To create a production-ready build of the application:

```bash
npm run build
```

### Running in Production Mode

To start the application in production mode (after running `npm run build`):

```bash
npm run start
```

This will also start the server on **port 3003**.

---

## Stripe Integration

### Payment Flows

The application has two primary payment flows:
1.  **Puppy Application Deposit:** A customer pays a deposit after filling out the puppy application.
2.  **Training Deposit:** A customer pays a deposit for the Puppy Imprint Training Program.

These flows are handled by the API route at `/api/stripe/checkout`.

### Testing Stripe Payments

1.  Ensure you are using your **Stripe Test Keys** in `.env.local`.
2.  Navigate to the `/application` or `/training` page and click the deposit button.
3.  You will be redirected to a Stripe Checkout page.
4.  Use one of Stripe's [official test card numbers](https://stripe.com/docs/testing#cards) to simulate a successful payment.
5.  After a successful payment, you will be redirected to the corresponding confirmation page (`/reserved` or `/training-confirmation`).
6.  You can view test payments and customer data in your [Stripe Dashboard](https://dashboard.stripe.com/) by toggling "View test data".

---

## Key File Structure

-   `app/`: Contains all pages and layouts (Next.js App Router).
    -   `app/api/`: API routes, including the Stripe checkout logic.
    -   `app/components/`: Reusable React components (e.g., `HeroBackground`, `StripeCheckout`).
    -   `app/(pages)/`: Each folder represents a page route (e.g., `app/application/page.tsx`).
-   `public/`: Static assets like images (`hero8.png`, logos) and SVGs.
-   `styles/`: Global CSS styles.
-   `next.config.mjs`: Next.js configuration file.
-   `package.json`: Project dependencies and scripts.

---

## Customization

-   **Logos & Images:** Replace image files in the `public/` directory. Key images include `TSR_Logos_gold_black.png` and `hero8.png`.
-   **Colors:** Primary brand colors can be adjusted in `tailwind.config.ts`. The main gold color is `#8b6604`.
-   **Text Content:** Page content can be edited directly in the respective `page.tsx` files within the `app/` directory.
