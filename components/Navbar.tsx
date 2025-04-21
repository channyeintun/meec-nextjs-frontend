import Link from "next/link"
import { LanguageSwitcher } from "./LanguageSwitcher"
import Menu from "./icons/Menu"
import Close from "./icons/Close"
import ChevronDown from "./icons/ChevronDown"

export const Navbar = () => {

    return (
        <header className="bg-[var(--background)] group">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle-00)]">
                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden">
                    <label className="cursor-pointer">
                        <input type="checkbox" className="peer hidden" />
                        <Menu className="w-6 h-6 peer-checked:hidden" />
                        <Close className="w-6 h-6 hidden peer-checked:block" />
                    </label>
                </div>

                {/* Logo */}
                <h1 className="font-sans text-[var(--text-primary)] font-bold text-[24px] leading-[24px] m-0 px-8 py-[15px]">MEEC</h1>

                {/* Language Switcher */}
                <LanguageSwitcher />
            </div>

            {/* Navigation Links */}
            <nav className="lg:flex lg:items-center lg:justify-start border-b border-[var(--border-subtle-00)]">
                <ul className="lg:ms-[var(--spacing-05)] hidden group-has-[:checked]:flex lg:flex lg:flex-row flex-col absolute top-16 left-0 w-full lg:static">
                    <li>
                        <Link href="/" className="block p-2 lg:p-0 carbon-button">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="block p-2 lg:p-0 carbon-button">About</Link>
                    </li>
                    <li>
                        <details className="group relative">
                            <summary className="flex items-center p-2 lg:p-0 cursor-pointer carbon-button group-open:bg-[var(--layer-01)]">
                                News & Blogs
                                <span className="w-4 h-4 ml-1 group-open:rotate-180">
                                    <ChevronDown />
                                </span>
                            </summary>
                            <ul className="w-full lg:w-48 bg-[var(--layer-01)] lg:absolute lg:left-0 group-open:block hidden">
                                <li>
                                    <Link href="/news" className="block text-[var(--text-primary)] px-4 py-[15px] hover:bg-[var(--layer-hover-01)]">News</Link>
                                </li>
                                <li>
                                    <Link href="/insight" className="block text-[var(--text-primary)] px-4 py-[15px] hover:bg-[var(--layer-hover-01)]">Insight</Link>
                                </li>
                                <li>
                                    <Link href="/case-study" className="block text-[var(--text-primary)] px-4 py-[15px] hover:bg-[var(--layer-hover-01)]">Case study</Link>
                                </li>
                                <li>
                                    <Link href="/podcast" className="block text-[var(--text-primary)] px-4 py-[15px] hover:bg-[var(--layer-hover-01)]">Podcast</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link href="/publications" className="block p-2 lg:p-0 carbon-button">Publications</Link>
                    </li>
                    <li>
                        <Link href="/events" className="block p-2 lg:p-0 carbon-button">Events</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="block p-2 lg:p-0 carbon-button">Contact Us</Link>
                    </li>
                    <li className="lg:ml-auto">
                        <Link href="/apply" className="block p-2 lg:p-0 carbon-button-primary">Apply for assistance</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}