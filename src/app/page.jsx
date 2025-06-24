import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import profileImage from './assets/images/jonas.png'
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="grid grid-cols-1 gap-8 py-20 lg:grid-cols-[1.5fr_1fr]">
      <div className="flex flex-col gap-[1.875rem]">
        <h1 className="text-[2.75rem]">Jonas</h1>
        <p>Hi, I’m Jonas, a Danish student currently studying at the Center for Medie og Kommunikation (CMK) at Roskilde Tekniske Skole. I’m passionate about web development and digital design, and I’m always exploring new tools and technologies to improve my skills.</p>
        <Link className="flex mx-auto justify-center gap-2 items-center bg-accent-dark text-foreground-light w-1/2 text-base font-bold border border-accent-light py-[1.3125rem] rounded-md shadow-[0_0_50px_-12px_#3F8E00] min-w-[13.7rem] lg:mx-0" href='/contact'>Get in touch <IoIosArrowForward /></Link>
      </div>
      <Image className="rounded-full" src={profileImage} alt='me' />
    </main>
  );
}
