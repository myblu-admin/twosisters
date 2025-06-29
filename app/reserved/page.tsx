import Image from "next/image";
import Link from "next/link";

export default function ReservedPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Puppy Reserved!</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10 mb-10 text-gray-800">
          <div className="flex justify-center mb-8">
            <Image
              src="/TSR_Logos_gold_black.png"
              alt="Two Sisters Ranch Logo"
              width={200} 
              height={100} 
              priority
            />
          </div>
          <p className="text-xl mb-6">
            Congratulations! Your deposit has been received, and your place on our waitlist is confirmed.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8 text-left">
            <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
            <ol className="space-y-3 list-decimal list-inside text-gray-700">
              <li>You'll receive a confirmation email with receipt of your deposit</li>
              <li>Our team will review your application within 48 hours</li>
              <li>We'll reach out to schedule an interview to discuss your preferences</li>
              <li>When puppies are born, we'll notify you with updates and photos</li>
              <li>At 7 weeks, you'll be invited to select your puppy based on your position on our waitlist</li>
            </ol>
          </div>
          
          <div className="border-t border-gray-200 pt-6 mt-6 space-y-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p>If you have any questions, please don't hesitate to contact us:</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8b6604]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:newfoundlanddoodles@gmail.com" className="text-[#8b6604] hover:underline">
                newfoundlanddoodles@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8b6604]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(573) 579-9771</span>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <Link 
              href="/"
              className="rounded-md border-2 border-solid border-[#8b6604] transition-colors flex items-center justify-center bg-[#8b6604] text-white gap-2 hover:bg-[#a37b10] hover:border-[#a37b10] font-semibold text-base px-6 py-3 mx-auto w-fit"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
