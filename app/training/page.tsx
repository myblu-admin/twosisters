"use client";

import Image from "next/image";
import Link from "next/link";
import HeroBackground from "../components/hero-background";
import StripeCheckout from "../components/stripe-checkout";
import MaxWidthContainer from "../components/max-width-container";

export default function TrainingPage() {
  return (
    <HeroBackground>
      <div className="py-8 md:py-16">
        <MaxWidthContainer>
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-white hover:underline mb-6 inline-block">
          &larr; Back to home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Puppy Imprint Training Program</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10 mb-10 text-gray-800">
          <div className="flex justify-center mb-8">
            <Image 
              src="/TSR_Logos_gold_black.png" 
              alt="Two Sisters Ranch Logo" 
              width={300} 
              height={180} 
            />
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Transform Your Puppy's Potential</h2>
            <p className="text-lg mb-4">
              Our specialized 6-Week Puppy Imprinting Program is designed to establish a solid foundation 
              of good behavior and basic commands during your puppy's most impressionable developmental period.
            </p>
            <p className="mb-4">
              This critical time in your puppy's development shapes their future behavior and relationship with your family. 
              Our professional trainers use positive reinforcement techniques to help your puppy develop into a 
              well-mannered companion.
            </p>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Program Details</h2>
            
            <div className="border-l-4 border-[#8b6604] pl-4 mb-6">
              <h3 className="text-xl font-semibold mb-2">Weekly Training Sessions</h3>
              <p>
                Your puppy will participate in six weekly sessions. Each session builds upon the previous one, 
                gradually increasing the complexity of commands and behaviors.
              </p>
            </div>
            
            <div className="border-l-4 border-[#8b6604] pl-4 mb-6">
              <h3 className="text-xl font-semibold mb-2">Skills Development</h3>
              <p className="mb-2">Your puppy will learn:</p>
              <ul className="list-disc ml-6 space-y-1 mb-2">
                <li>Basic commands: Sit, Stay, Come, Down</li>
                <li>Leash manners and walking without pulling</li>
                <li>Potty training reinforcement</li>
                <li>Crate training and establishing comfort in their space</li>
                <li>Socialization with people and other dogs</li>
                <li>Impulse control and focus training</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-[#8b6604] pl-4 mb-6">
              <h3 className="text-xl font-semibold mb-2">Owner Education</h3>
              <p>
                We believe in training the owner as much as the puppy. You'll receive guidance on how to 
                maintain and build upon your puppy's training, addressing common behavior issues, and 
                establishing yourself as a confident leader.
              </p>
            </div>
            
            <div className="border-l-4 border-[#8b6604] pl-4 mb-6">
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p>
                After the program concludes, you'll have access to our trainer for questions and follow-up 
                guidance to ensure long-term success.
              </p>
            </div>
          </div>
          
          <hr className="border-gray-300 my-10" />
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Program Investment</h2>
            <p className="text-lg mb-4">
              Our 6-Week Puppy Imprinting Program is $2,000.
            </p>
            <p className="mb-6">
              This includes all six training sessions, training materials, and follow-up support. 
              A non-refundable deposit of $1,000 is required to reserve your spot, with the remaining 
              balance due at the start of the program.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Puppy's Future?</h3>
            <p className="mb-6">
              Reserve your spot in our next training program by paying your deposit today. 
              Once your payment is processed, our trainer will contact you to discuss your puppy's 
              specific needs and schedule your first session.
            </p>
            <StripeCheckout
              productType="training"
              buttonText="Pay $1,000 Deposit"
              className="w-full sm:w-auto"
            />
          </div>
          
          <div className="text-sm text-gray-600 italic">
            <p>
              Note: The Puppy Imprinting Program is available to all puppy owners, whether you purchased your 
              puppy from Two Sisters Ranch or another reputable breeder. The program is most effective when started 
              between 8-16 weeks of age.
            </p>
          </div>
        </div>
      </div>
        </MaxWidthContainer>
      </div>
    </HeroBackground>
  );
}
