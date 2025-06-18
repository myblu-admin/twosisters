import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
// In production, use environment variable: process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'your_test_key_here', {
  apiVersion: '2025-05-28.basil', // Latest API version as of June 2025
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productType, includeTraining = false, customerEmail } = body;
    
    // Define your product and price IDs (these would come from your Stripe dashboard)
    const PUPPY_DEPOSIT_PRICE_ID = process.env.STRIPE_PUPPY_PRICE_ID || 'price_placeholder_puppy';
    const TRAINING_DEPOSIT_PRICE_ID = process.env.STRIPE_TRAINING_PRICE_ID || 'price_placeholder_training';
    
    const lineItems = [];
    let successUrl = '';
    
    // Configure line items based on product type
    if (productType === 'puppy') {
      // Add puppy deposit to line items
      lineItems.push({
        price: PUPPY_DEPOSIT_PRICE_ID,
        quantity: 1,
      });
      
      // If training is included, add that as well
      if (includeTraining) {
        lineItems.push({
          price: TRAINING_DEPOSIT_PRICE_ID,
          quantity: 1,
        });
      }
      
      successUrl = `${request.headers.get('origin')}/reserved`;
    } 
    else if (productType === 'training') {
      // Only training deposit
      lineItems.push({
        price: TRAINING_DEPOSIT_PRICE_ID,
        quantity: 1,
      });
      
      successUrl = `${request.headers.get('origin')}/training-confirmation`;
    }
    else {
      return NextResponse.json({ error: 'Invalid product type' }, { status: 400 });
    }
    
    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: `${request.headers.get('origin')}/cancel`,
      customer_email: customerEmail,
      metadata: {
        productType,
        includeTraining: includeTraining.toString(),
      },
      // Optional: Add webhook for fulfillment after payment
      // payment_intent_data: {
      //   metadata: { productType, includeTraining: includeTraining.toString() }
      // }
    });
    
    return NextResponse.json({ sessionId: session.id, url: session.url });
  } 
  catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
