"use client";

import { LanguageSwitcher } from "./LanguageSwitcher"
import Menu from "./icons/Menu"
import Close from "./icons/Close"
import ChevronDown from "./icons/ChevronDown"
import { cn } from "@/lib/utils";
import { usePathname, Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useDisclosure, useViewportSize, useWindowScroll } from "@mantine/hooks";

export const Navbar = () => {
    const pathname = usePathname();
    const { width } = useViewportSize();
    const [scroll] = useWindowScroll();
    const [opened, handlers] = useDisclosure();
    const [menuOpened, menuHandlers] = useDisclosure();

    // Check if screen is desktop size (lg breakpoint in Tailwind is 1024px)
    const isDesktop = width >= 1024;

    // Only hide top bar when scrolling down on desktop
    const shouldHideTopBar = isDesktop && scroll.y > 50;

    return (
        <>
            <header className="bg-[var(--background)] group relative sticky top-0">
                <AnimatePresence>
                    {(!shouldHideTopBar || !isDesktop) && (
                        <motion.div
                            className="flex items-center justify-between box-border border-y border-[var(--border-subtle-00)]"
                            initial={isDesktop ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={isDesktop ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {/* overlay */}
                            <div className="w-full h-full bg-[var(--overlay)] absolute inset-0 transition-transform duration-300 ease-in-out lg:hidden -translate-x-full group-has-[:checked]:translate-x-0 z-20"></div>
                            <div className="flex items-center">
                                {/* Hamburger Menu for Mobile */}
                                <div className="border-2 border-transparent group-has-[:checked]:border-[var(--border-interactive)] lg:hidden relative box-content p-4 w-5 h-5 group-has-[:checked]:bg-[var(--layer-01)] hover:bg-[var(--layer-hover-01)] z-20 transition-colors duration-150 ease-in-out">
                                    <label className="inline-block cursor-pointer w-5 h-5 relative">
                                        <input checked={menuOpened} onChange={menuHandlers.toggle} type="checkbox" className="peer w-full max-w-5 h-full max-h-5 opacity-0" />
                                        <Menu className="absolute inset-0 w-full max-w-5 h-full max-h-5 transition-opacity ease-in duration-300 opacity-100 peer-checked:opacity-0" />
                                        <Close className="absolute inset-0 w-full max-w-5 h-full max-h-5 transition-opacity ease-in duration-300 opacity-0 peer-checked:opacity-100" />
                                    </label>
                                </div>

                                {/* Logo */}
                                <Link href="/">
                                    <h1 className="font-sans text-[var(--text-primary)] font-bold text-[24px] leading-[24px] m-0 px-2 lg:px-8 py-[15px]">MEEC</h1>
                                </Link>
                            </div>
                            {/* Language Switcher */}
                            <LanguageSwitcher />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation Links */}
                <nav className="lg:flex lg:items-center lg:justify-start">
                    <ul className="nav-links lg:ps-[var(--spacing-05)] group-has-[:checked]:flex lg:flex lg:flex-row flex-col absolute top-full left-0 w-full lg:relative border-b border-[var(--border-subtle-00)] bg-[var(--background)] transition-transform duration-300 ease-in-out max-lg:-translate-x-full group-has-[:checked]:translate-x-0 max-lg:h-[calc(100dvh-58px)]">
                        <li>
                            <Link onNavigate={menuHandlers.close} href="/" className={cn(
                                "block max-sm:!px-4 max-lg:!px-8 max-lg:!py-[14px] max-lg:border-b border-[var(--border-subtle-00)] carbon-button",
                                {
                                    "active": pathname === "/"
                                }
                            )}>Home</Link>
                        </li>
                        <li>
                            <Link onNavigate={menuHandlers.close} href="/about" className={cn(
                                "block max-sm:!px-4 max-lg:!px-8 max-lg:!py-[14px] max-lg:border-b border-[var(--border-subtle-00)] carbon-button",
                                {
                                    "active": pathname === "/about"
                                }
                            )}>About</Link>
                        </li>
                        <li className="relative">
                            <div
                                className="flex items-center cursor-pointer max-sm:!px-4 max-lg:!px-8 max-lg:!py-[14px] max-lg:border-b border-[var(--border-subtle-00)] carbon-button lg:hover:bg-[var(--layer-01)]"
                                onClick={handlers.toggle}
                            >
                                News & Blogs
                                <span className={cn(
                                    "w-4 h-4 ms-auto lg:ml-1 transition-transform duration-300",
                                    { "rotate-180": opened }
                                )}>
                                    <ChevronDown />
                                </span>
                            </div>
                            <ul className={cn(
                                "w-full lg:border-t border-[var(--border-subtle-00)] lg:w-48 bg-[var(--layer-01)] lg:absolute lg:left-0 z-20 lg:shadow-[0px_4px_8px_0_rgba(0,0,0,0.2)]",
                                { "block": opened, "hidden": !opened }
                            )}>
                                <li>
                                    <Link onNavigate={menuHandlers.close} href="/news" className="block text-[var(--text-primary)] px-4 md:px-8 py-[14px] lg:px-4 lg:py-[15px] hover:bg-[var(--layer-hover-01)]">News</Link>
                                </li>
                                <li>
                                    <Link onNavigate={menuHandlers.close} href="/insight" className="block text-[var(--text-primary)] px-4 md:px-8 py-[14px] lg:px-4 lg:py-[15px] hover:bg-[var(--layer-hover-01)]">Insight</Link>
                                </li>
                                <li>
                                    <Link onNavigate={menuHandlers.close} href="/case-study" className="block text-[var(--text-primary)] px-4 md:px-8 py-[14px] lg:px-4 lg:py-[15px] hover:bg-[var(--layer-hover-01)]">Case study</Link>
                                </li>
                                <li>
                                    <Link onNavigate={menuHandlers.close} href="/podcast" className="block text-[var(--text-primary)] px-4 md:px-8 py-[14px] lg:px-4 lg:py-[15px] hover:bg-[var(--layer-hover-01)]">Podcast</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link onNavigate={menuHandlers.close} href="/publications" className={cn(
                                "block max-sm:!px-4 max-lg:!px-8 max-lg:!py-[14px] max-lg:border-b border-[var(--border-subtle-00)] carbon-button",
                                {
                                    "active": pathname === "/publications"
                                }
                            )}>Publications</Link>
                        </li>
                        <li>
                            <Link onNavigate={menuHandlers.close} href="/events" className={cn(
                                "block max-sm:!px-4 max-lg:!px-8 max-lg:!py-[14px] max-lg:border-b border-[var(--border-subtle-00)] carbon-button",
                                {
                                    "active": pathname === "/events"
                                }
                            )}>Events</Link>
                        </li>
                        <li>
                            <Link onNavigate={menuHandlers.close} href="/contact" className={cn(
                                "block max-sm:!px-4 max-lg:!px-8 max-lg:!py-[14px] carbon-button",
                                {
                                    "active": pathname === "/contact"
                                }
                            )}>Contact Us</Link>
                        </li>
                        <li className="lg:ml-auto">
                            <Link onNavigate={menuHandlers.close} href="/apply" className="relative block max-sm:!px-4 max-lg:!px-8 max-lg:!py-[14px] carbon-button-primary after:content-[''] after:absolute after:bottom-[-1px] after:h-[1px] after:w-full after:bg-[var(--button-primary)] after:start-0 hover:after:bg-[var(--button-primary-hover)]">Apply for assistance</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}