import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Header() {

    return (
        <header className="w-full py-6 mx-auto flex flex-col gap-2 lg:w-[86.72%] lg:flex-row lg:justify-between rounded-b-md flex-wrap">
            <nav className="flex gap-[4.375rem] justify-center lg:pl-[11.25rem]">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
            <ul className="flex gap gap-[1.575rem] justify-center items-center lg:pr-[11.25rem]">
                <li>
                    <Link href='#'>
                        <FaLinkedinIn size="18" />
                    </Link>
                </li>
                <li>
                    <Link href='#'>
                        <FaBehance size='21.6' />
                    </Link>
                </li>
                <li>
                    <Link href='#'>
                        <FaTwitter size='17.54' />
                    </Link>
                </li>
            </ul>
        </header>
    )
}

