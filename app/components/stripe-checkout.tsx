"use client";

import { useState } from 'react';

interface StripeCheckoutProps {
  productType: 'puppy' | 'training';
  includeTraining?: boolean;
  customerEmail?: string;
  buttonText?: string;
  className?: string;
  disabled?: boolean;
}

export default function StripeCheckout({
  productType,
  includeTraining = false,
  customerEmail,
  buttonText = 'Pay Deposit',
  className = '',
  disabled = false
}: StripeCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productType,
          includeTraining,
          customerEmail
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'An error occurred during checkout');
      }
      
      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again later.');
      console.error('Checkout error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <button
        className={`px-6 py-3 bg-[#8b6604] text-white font-bold rounded-md hover:bg-[#a37b10] transition-colors ${className} ${disabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
        onClick={handleCheckout}
        disabled={disabled || isLoading}
      >
        {isLoading ? 'Processing...' : buttonText}
      </button>
      
      {error && (
        <p className="text-red-600 mt-2 text-sm">
          {error}
        </p>
      )}
      
      <p className="text-sm mt-2 text-gray-600">
        You will be redirected to Stripe to complete your payment securely.
      </p>
    </div>
  );
}
