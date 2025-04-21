import Link from "next/link"
import { LanguageSwitcher } from "./LanguageSwitcher"
import Menu from "./icons/Menu"
import Close from "./icons/Close"
import ChevronDown from "./icons/ChevronDown"

export const Navbar = () => {

    return (
        <header className="bg-[var(--background)] group relative">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle-00)]">
                <div className="flex items-center">
                    {/* Hamburger Menu for Mobile */}
                    <div className="lg:hidden p-4">
                        <label className="cursor-pointer max-w-6 max-h-6 relative">
                            <input type="checkbox" className="peer absolute inset-0 w-6 h-6 opacity-0" />
                            <Menu className="w-6 h-6 peer-checked:hidden" />
                            <Close className="w-6 h-6 hidden peer-checked:block" />
                        </label>
                    </div>

                    {/* Logo */}
                    <h1 className="font-sans text-[var(--text-primary)] font-bold text-[24px] leading-[24px] m-0 px-2 lg:px-8 py-[15px]">MEEC</h1>

                </div>
                {/* Language Switcher */}
                <LanguageSwitcher />
            </div>

            {/* Navigation Links */}
            <nav className="lg:flex lg:items-center lg:justify-start">
                <ul className="lg:ps-[var(--spacing-05)] hidden group-has-[:checked]:flex lg:flex lg:flex-row flex-col absolute top-full left-0 w-full lg:static border-b border-[var(--border-subtle-00)] bg-[var(--background)]">
                    <li>
                        <Link href="/" className="block max-lg:px-8 max-lg:py-[14px] carbon-button">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="block max-lg:px-8 max-lg:py-[14px] carbon-button">About</Link>
                    </li>
                    <li>
                        <details className="group relative">
                            <summary className="flex items-center cursor-pointer max-lg:px-8 max-lg:py-[14px] carbon-button lg:group-open:bg-[var(--layer-01)]">
                                News & Blogs
                                <span className="w-4 h-4 ms-auto lg:ml-1 group-open:rotate-180">
                                    <ChevronDown />
                                </span>
                            </summary>
                            <ul className="w-full lg:w-48 bg-[var(--layer-01)] lg:absolute lg:left-0 group-open:block hidden">
                                <li>
                                    <Link href="/news" className="block text-[var(--text-primary)] px-8 py-[14px] lg:px-4 lg:py-[15px] hover:bg-[var(--layer-hover-01)]">News</Link>
                                </li>
                                <li>
                                    <Link href="/insight" className="block text-[var(--text-primary)] px-8 py-[14px] lg:px-4 lg:py-[15px] hover:bg-[var(--layer-hover-01)]">Insight</Link>
                                </li>
                                <li>
                                    <Link href="/case-study" className="block text-[var(--text-primary)] px-8 py-[14px] lg:px-4 lg:py-[15px] hover:bg-[var(--layer-hover-01)]">Case study</Link>
                                </li>
                                <li>
                                    <Link href="/podcast" className="block text-[var(--text-primary)] px-8 py-[14px] lg:px-4 lg:py-[15px] hover:bg-[var(--layer-hover-01)]">Podcast</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link href="/publications" className="block carbon-button max-lg:px-8 max-lg:py-[14px]">Publications</Link>
                    </li>
                    <li>
                        <Link href="/events" className="block max-lg:px-8 max-lg:py-[14px] carbon-button">Events</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="block max-lg:px-8 max-lg:py-[14px] carbon-button">Contact Us</Link>
                    </li>
                    <li className="lg:ml-auto">
                        <Link href="/apply" className="block max-lg:px-8 max-lg:py-[14px] carbon-button-primary">Apply for assistance</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}