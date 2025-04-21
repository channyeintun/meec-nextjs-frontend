import Link from "next/link"
import { LanguageSwitcher } from "./LanguageSwitcher"
import Menu from "./icons/Menu"
import Close from "./icons/Close"
import ChevronDown from "./icons/ChevronDown"

export const Navbar = () => {

    return (
        <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between p-4">
                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden">
                    <label className="cursor-pointer">
                        <input type="checkbox" className="peer hidden" />
                        <Menu className="w-6 h-6 peer-checked:hidden" />
                        <Close className="w-6 h-6 hidden peer-checked:block" />
                    </label>
                </div>

                {/* Logo */}
                <h1 className="text-xl font-bold">MEEC</h1>

                {/* Language Switcher */}
                <LanguageSwitcher />
            </div>

            {/* Navigation Links */}
            <nav className="lg:flex lg:items-center lg:justify-start lg:border-t lg:border-blue-500">
                <ul className="hidden lg:flex lg:flex-row lg:gap-6 lg:p-4 peer-checked:flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg lg:static lg:shadow-none">
                    <li>
                        <Link href="/" className="block p-2 lg:p-0">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="block p-2 lg:p-0">About</Link>
                    </li>
                    <li>
                        <details className="group relative">
                            <summary className="flex items-center p-2 lg:p-0 cursor-pointer">
                                News & Blogs
                                <span className="w-4 h-4 ml-1 group-open:rotate-180">
                                    <ChevronDown />
                                </span>
                            </summary>
                            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg lg:group-hover:block hidden">
                                <li>
                                    <Link href="/news" className="block p-2">News</Link>
                                </li>
                                <li>
                                    <Link href="/insight" className="block p-2">Insight</Link>
                                </li>
                                <li>
                                    <Link href="/case-study" className="block p-2">Case study</Link>
                                </li>
                                <li>
                                    <Link href="/podcast" className="block p-2">Podcast</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link href="/publications" className="block p-2 lg:p-0">Publications</Link>
                    </li>
                    <li>
                        <Link href="/events" className="block p-2 lg:p-0">Events</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="block p-2 lg:p-0">Contact Us</Link>
                    </li>
                    <li className="lg:ml-auto">
                        <Link href="/apply" className="block p-2 lg:p-0">Apply for assistance</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}