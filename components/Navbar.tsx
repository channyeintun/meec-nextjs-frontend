"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useDisclosure, useViewportSize, useWindowScroll } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Close from "./icons/Close";
import Menu from "./icons/Menu";

export const Navbar = () => {
    const pathname = usePathname();
    const { width } = useViewportSize();
    const [scroll] = useWindowScroll();
    const [menuOpened, menuHandlers] = useDisclosure();

    // Check if screen is desktop size (lg breakpoint in Tailwind is 1024px)
    const isDesktop = width >= 1024;

    // Only hide top bar when scrolling down on desktop
    const shouldHideTopBar = isDesktop && scroll.y > 50;

    return (
        <>
            <header className="bg-[var(--background)] group sticky top-0 z-50">
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
                                <div className="border-2 border-transparent focus-within:border-[var(--border-interactive)] lg:hidden relative box-content p-4 w-5 h-5 group-has-[:checked]:bg-[var(--layer-01)] hover:bg-[var(--layer-hover-01)] z-20 transition-colors duration-150 ease-in-out">
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
                    <ul className="nav-links lg:ps-[var(--spacing-05)] group-has-[:checked]:flex lg:flex lg:flex-row flex-col absolute z-10 top-full left-0 w-full lg:relative border-b border-[var(--border-subtle-00)] bg-[var(--background)] transition-transform duration-300 ease-in-out max-lg:-translate-x-full group-has-[:checked]:translate-x-0 max-lg:h-[calc(100dvh-58px)]">
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
                        <li>
                            <Link onNavigate={menuHandlers.close} href="/publications" className={cn(
                                "block max-sm:!px-4 max-lg:!px-8 max-lg:!py-[14px] max-lg:border-b border-[var(--border-subtle-00)] carbon-button",
                                {
                                    "active": pathname.includes("/blogs")
                                }
                            )}>News & Blogs</Link>
                        </li>
                        <li>
                            <Link onNavigate={menuHandlers.close} href="/publications" className={cn(
                                "block max-sm:!px-4 max-lg:!px-8 max-lg:!py-[14px] max-lg:border-b border-[var(--border-subtle-00)] carbon-button",
                                {
                                    "active": pathname === "/publications"
                                }
                            )}>Publications</Link>
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