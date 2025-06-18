"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeroBackground from "../components/hero-background";
import StripeCheckout from "../components/stripe-checkout";
import MaxWidthContainer from "../components/max-width-container";

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    hasDog: '',
    breedPreference: '',
    whyInterested: '',
    includeTraining: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation would go here
    // If form is valid, the button will trigger the Stripe checkout
  };

  return (
    <HeroBackground>
      <div className="py-8 md:py-16">
        <MaxWidthContainer>
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="hover:underline mb-6 inline-block text-white">
              &larr; Back to home
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Puppy Application Process</h1>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-10 mb-10 text-gray-800">
              <div className="flex justify-center mb-8">
                <Image 
                  src="/TSR_Logos_gold_black.png" 
                  alt="Two Sisters Ranch Logo" 
                  width={300} 
                  height={180} 
                  priority
                />
              </div>
              <p className="mb-6">
                At Two Sisters Ranch, we take great pride in ensuring our puppies find their forever homes with families that will provide 
                happiness for both. Our application process is designed to help us understand your family's needs, 
                lifestyle, and expectations, allowing us to place our puppies in homes where they will thrive.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Application Steps</h2>
              
              <ol className="space-y-6 mb-10">
                <li>
                  <h3 className="text-xl font-semibold mb-2">1. Submit Application</h3>
                  <p className="mb-4">
                    Complete the form below with your contact information, household details, and experience with dogs. This helps us 
                    understand your:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Family dynamics and living situation</li>
                    <li>Experience with dogs</li>
                    <li>Expectations for your new puppy</li>
                    <li>Lifestyle and activity level</li>
                    <li>Training plans and goals</li>
                  </ul>
                </li>
                
                <li>
                  <h3 className="text-xl font-semibold mb-2">2. Application Review</h3>
                  <p className="mb-4">
                    We carefully review each application to ensure our puppies are placed in homes where they will thrive. Our team 
                    evaluates applications based on:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Commitment to positive reinforcement training</li>
                    <li>Ability to provide proper care, exercise, and socialization</li>
                    <li>Alignment with our breeding goals and philosophy</li>
                    <li>Understanding of the Newfoundland Doodle breed needs</li>
                  </ul>
                </li>
                
                <li>
                  <h3 className="text-xl font-semibold mb-2">3. Interview</h3>
                  <p>
                    After initial application approval, we'll schedule a phone or video call to discuss your needs and expectations, answer 
                    questions, and ensure there's the right match for each litter. This conversation helps us learn different qualities of the 
                    home environment we'll place our puppies in.
                  </p>
                </li>
                
                <li>
                  <h3 className="text-xl font-semibold mb-2">4. Approval & Deposit</h3>
                  <p>
                    Once approved, you'll be invited to secure your spot with a non-refundable deposit of $1000. This deposit will be 
                    applied to the total cost of your puppy. Approximate wait time will depend on our waiting list and upcoming litter 
                    schedules.
                  </p>
                </li>
              </ol>
              
              <h2 className="text-2xl font-bold mb-6">Pricing Information</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold mb-4">Newfoundland Doodle Puppies</h3>
                <p className="mb-4">Our puppies are priced at <strong>$4,000</strong> which includes:</p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Health guarantee</li>
                  <li>Initial vaccinations</li>
                  <li>Microchipping</li>
                  <li>Comprehensive health check by veterinarian</li>
                  <li>Starter pack of food and supplies</li>
                  <li>Ongoing breeder support</li>
                </ul>
                
                <div className="bg-[#fff8e6] p-4 rounded-md border border-[#8b6604]/20">
                  <p className="font-semibold text-[#8b6604]">
                    A non-refundable $1,000 deposit is required to reserve your puppy, with the remaining balance due upon puppy pickup.
                  </p>
                </div>
              </div>
              
              <hr className="border-gray-300 my-10" />
              
              <h2 className="text-2xl font-bold mb-6">Application Form</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6604]" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                    <input 
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6604]" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6604]" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6604]" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address*</label>
                  <input 
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6604]" 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                    <input 
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6604]" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State*</label>
                    <input 
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6604]" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code*</label>
                    <input 
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6604]" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Have you owned a dog before?*</label>
                  <select 
                    name="hasDog"
                    value={formData.hasDog}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6604]" 
                    required
                  >
                    <option value="">Please select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Breed preference (if any)</label>
                  <input 
                    type="text"
                    name="breedPreference"
                    value={formData.breedPreference}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6604]" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Why are you interested in a Newfoundland Doodle?*</label>
                  <textarea 
                    name="whyInterested"
                    value={formData.whyInterested}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6604]" 
                    required
                  ></textarea>
                </div>
                
                <div>
                  <div className="flex items-start mb-4">
                    <input 
                      id="training-program" 
                      name="includeTraining"
                      checked={formData.includeTraining}
                      onChange={handleChange}
                      type="checkbox" 
                      className="mt-1 h-4 w-4 text-[#8b6604] focus:ring-[#8b6604] border-gray-300 rounded" 
                    />
                    <label htmlFor="training-program" className="ml-3 text-sm">
                      <span className="font-semibold block mb-1">Add Puppy Imprinting Training Program (+$1,000)</span>
                      <span className="text-gray-600">Our 6-week training program gives your puppy the best possible start. <Link href="/training" className="text-[#8b6604] underline">Learn more</Link></span>
                    </label>
                  </div>
                </div>
                
                <div className="pt-4">
                  <StripeCheckout
                    productType="puppy"
                    includeTraining={formData.includeTraining}
                    customerEmail={formData.email}
                    buttonText="Pay Deposit & Submit Application"
                    disabled={!formData.email || !formData.firstName || !formData.lastName}
                  />
                  <p className="text-sm mt-2 text-gray-600">
                    By submitting this form, you agree to pay the non-refundable $1000 deposit.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </MaxWidthContainer>
      </div>
    </HeroBackground>
  );
}
