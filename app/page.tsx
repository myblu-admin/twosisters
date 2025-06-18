import Image from "next/image";
import HeroBackground from "./components/hero-background";

export default function Home() {
  return (
    <HeroBackground>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/TSR_Logos_gold.png"
          alt="Two Sisters Ranch Logo"
          width={1660}
          height={530}
          priority
        />

        <div className="flex gap-6 items-center flex-col sm:flex-row">
          <a
            className="rounded-md border-2 border-solid border-[#8b6604] transition-colors flex items-center justify-center bg-[#8b6604] text-white gap-2 hover:bg-[#a37b10] hover:border-[#a37b10] font-semibold text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-7 w-full sm:w-auto"
            href="/application"
          >
            <Image
              className=""
              src="/paw.svg"
              alt="Dog paw icon"
              width={20}
              height={20}
            />
            Puppy Application
          </a>
          <a
            className="rounded-md border-2 border-solid border-[#8b6604] transition-colors flex items-center justify-center hover:bg-[#8b6604] hover:text-white font-semibold text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-7 w-full sm:w-auto"
            href="/training"
          >
            Training Deposit
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-col gap-4 items-center justify-center text-center">
        <div className="text-sm text-white">
          <p>© {new Date().getFullYear()} Two Sisters Ranch. All rights reserved.</p>
          <p>Newfoundland Doodle Puppies bred with love in Jackson, Missouri</p>
        </div>
      </footer>
    </div>
    </HeroBackground>
  );
}
