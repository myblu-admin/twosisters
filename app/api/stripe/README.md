# Stripe Integration Guide

## Environment Variables Setup

Copy these variables to your `.env.local` file in the root of your project:

```
# Stripe API Keys
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Stripe Product/Price IDs
STRIPE_PUPPY_PRICE_ID=price_your_puppy_deposit_price_id
STRIPE_TRAINING_PRICE_ID=price_your_training_deposit_price_id

# Webhook Secret (optional, for production)
# STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

## Important Notes

1. For testing, use Stripe test mode keys (starting with `sk_test_` and `pk_test_`)
2. For production, use live mode keys (starting with `sk_live_` and `pk_live_`)
3. Create products and prices in the Stripe dashboard, then copy their IDs here
4. The webhook secret is needed only if you're implementing webhook handling

## Product IDs Format Examples

- Price IDs typically look like: `price_1NxYZ1ABC123DEF456GHI789`
- Product IDs typically look like: `prod_1NxYZ1ABC123DEF456GHI789`
