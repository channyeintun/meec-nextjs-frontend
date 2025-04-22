"use client";

import Link from "next/link"
import { LanguageSwitcher } from "./LanguageSwitcher"
import Menu from "./icons/Menu"
import Close from "./icons/Close"
import ChevronDown from "./icons/ChevronDown"
import { useParams, usePathname } from "next/navigation"
import { cn } from "@/lib/utils";

export const Navbar = () => {

    const pathname = usePathname();

    const { lang } = useParams<{ lang: string }>();

    return (
        <>
            <header className="bg-[var(--background)] group relative">
                <div className="flex items-center justify-between box-border border-y border-[var(--border-subtle-00)]">
                    {/* overlay */}
                    <div className="w-full h-full bg-[var(--overlay)] absolute inset-0 transition-transform duration-300 ease-in-out lg:hidden -translate-x-full group-has-[:checked]:translate-x-0 z-10"></div>
                    <div className="flex items-center">
                        {/* Hamburger Menu for Mobile */}
                        <div className="border-2 border-transparent group-has-[:checked]:border-[var(--border-interactive)] lg:hidden relative box-content p-4 w-5 h-5 group-has-[:checked]:bg-[var(--layer-01)] hover:bg-[var(--layer-hover-01)] z-20 transition-colors duration-150 ease-in-out">
                            <label className="inline-block cursor-pointer w-5 h-5 relative">
                                <input type="checkbox" className="peer w-full max-w-5 h-full max-h-5 opacity-0" />
                                <Menu className="absolute inset-0 w-full max-w-5 h-full max-h-5 transition-opacity ease-in duration-300 opacity-100 peer-checked:opacity-0" />
                                <Close className="absolute inset-0 w-full max-w-5 h-full max-h-5 transition-opacity ease-in duration-300 opacity-0 peer-checked:opacity-100" />
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
                    <ul className="nav-links lg:ps-[var(--spacing-05)] group-has-[:checked]:flex lg:flex lg:flex-row flex-col absolute top-full left-0 w-full lg:relative border-b border-[var(--border-subtle-00)] bg-[var(--background)] transition-transform duration-300 ease-in-out max-lg:-translate-x-full group-has-[:checked]:translate-x-0">
                        <li>
                            <Link href="/" className={cn(
                                "block max-lg:!px-8 max-lg:!py-[14px] carbon-button",
                                {
                                    "active": pathname.replace(`/${lang}`, '') === ""
                                }
                            )}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={cn(
                                "block max-lg:!px-8 max-lg:!py-[14px] carbon-button",
                                {
                                    "active": pathname.replace(`/${lang}`, '') === "/about"
                                }
                            )}>About</Link>
                        </li>
                        <li>
                            <details className="group relative">
                                <summary className="relative z-10 flex items-center cursor-pointer max-lg:!px-8 max-lg:!py-[14px] carbon-button lg:group-open:bg-[var(--layer-01)] group-open:shadow-[0px_4px_8px_0_rgba(0,0,0,0.2)]">
                                    News & Blogs
                                    <span className="w-4 h-4 ms-auto lg:ml-1 group-open:rotate-180">
                                        <ChevronDown />
                                    </span>
                                </summary>
                                <ul className="w-full border-t border-[var(--border-subtle-00)] lg:w-48 bg-[var(--layer-01)] lg:absolute lg:left-0 group-open:block hidden z-20 shadow-[0px_4px_8px_0_rgba(0,0,0,0.2)]">
                                    <li>
                                        <Link href="/news" className="block relative z- text-[var(--text-primary)] px-8 py-[14px] lg:px-4 lg:py-[15px] hover:bg-[var(--layer-hover-01)]">News</Link>
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
                            <Link href="/publications" className={cn(
                                "block max-lg:!px-8 max-lg:!py-[14px] carbon-button",
                                {
                                    "active": pathname.replace(`/${lang}`, '') === "/publications"
                                }
                            )}>Publications</Link>
                        </li>
                        <li>
                            <Link href="/events" className={cn(
                                "block max-lg:!px-8 max-lg:!py-[14px] carbon-button",
                                {
                                    "active": pathname.replace(`/${lang}`, '') === "/events"
                                }
                            )}>Events</Link>
                        </li>
                        <li>
                            <Link href="/contact" className={cn(
                                "block max-lg:!px-8 max-lg:!py-[14px] carbon-button",
                                {
                                    "active": pathname.replace(`/${lang}`, '') === "/contact"
                                }
                            )}>Contact Us</Link>
                        </li>
                        <li className="lg:ml-auto">
                            <Link href="/apply" className="block max-lg:!px-8 max-lg:!py-[14px] carbon-button-primary">Apply for assistance</Link>
                        </li>
                    </ul>
                </nav >
            </header >
        </>
    )
}