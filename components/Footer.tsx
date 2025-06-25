import { Link } from "@/i18n/navigation"
import { Copyright } from "./Copyright"

export const Footer = () => {
    return (
        <div className="mt-auto bg-[var(--background)]" style={{
            ["--background" as string]: "light-dark(#161616,#ffffff)",
        }}>
            <footer
                role="contentinfo"
                style={{
                    ["--text-primary" as string]: "light-dark(hsla(0, 0%, 96%, 1),hsla(0, 0%, 9%, 1))",
                    ["--text-secondary" as string]: "light-dark(hsla(0, 0%, 78%, 1),hsla(0, 0%, 32%, 1))",
                    ["--icon-primary" as string]: "light-dark(hsla(0, 0%, 96%, 1),hsla(0, 0%, 9%, 1))"
                }} className="max-w-[96rem] mx-auto px-[var(--spacing-07)] pt-[var(--spacing-11)] pb-[var(--spacing-06)] flex flex-col">
                <div className="text-[32px] text-[var(--text-primary)] font-bold leading-[32px] tracking-[0] lg:hidden mb-[var(--spacing-08)]">MEEC</div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-07)] mb-[var(--spacing-11)]">
                    <div className="text-[32px] text-[var(--text-primary)] font-bold leading-[32px] tracking-[0] hidden lg:block">MEEC</div>
                    <address className="not-italic">
                        <ul className="space-y-[var(--spacing-03)]" aria-describedby="contact-info">
                            <li><h2 className="text-[var(--text-on-color)] heading-02" id="contact-info">Contact info</h2></li>
                            <li><Link className="text-[var(--text-secondary)] hover:underline hover:text-[var(--text-primary)] transition-all ease-in duration-100" href="mailto:mmengrgp@gmail.com">mmengrgp@gmail.com</Link></li>
                            <li><Link className="text-[var(--text-secondary)] hover:underline hover:text-[var(--text-primary)] transition-all ease-in duration-100" href="tel:+959123456789">+959123456789</Link></li>
                        </ul>
                    </address>
                    <nav aria-describedby="quick-links">
                        <ul className="space-y-[var(--spacing-03)]">
                            <li><h2 id="quick-links" className="text-[var(--text-on-color)] heading-02">Quick links</h2></li>
                            <li><Link href="/about" className="body-02 text-[var(--text-secondary)] hover:underline hover:text-[var(--text-primary)] transition-all ease-in duration-100">About</Link></li>
                            <li><Link href="/blogs" className="body-02 text-[var(--text-secondary)] hover:underline hover:text-[var(--text-primary)] transition-all ease-in duration-100">News & Blogs</Link></li>
                            <li><Link href="/publications" className="body-02 text-[var(--text-secondary)] hover:underline hover:text-[var(--text-primary)] transition-all ease-in duration-100">Publications</Link></li>
                        </ul>
                    </nav>
                    <nav aria-describedby="follow-us">
                        <ul className="space-y-[var(--spacing-03)]">
                            <li><h2 id="follow-us" className="text-[var(--text-on-color)] heading-02">Follow us</h2></li>
                            <li><Link className="text-[var(--text-secondary)] hover:underline hover:text-[var(--text-primary)] transition-all ease-in duration-100" href="https://www.facebook.com/share/g/1DhF1ikWaC/?mibextid=wwXIfr" target="_blank">Facebook</Link></li>
                            <li><Link className="text-[var(--text-secondary)] hover:underline hover:text-[var(--text-primary)] transition-all ease-in duration-100" href="https://youtube.com" target="_blank">Youtube</Link></li>
                            <li><Link className="text-[var(--text-secondary)] hover:underline hover:text-[var(--text-primary)] transition-all ease-in duration-100" href="https://x.com" target="_blank">X</Link></li>
                        </ul>
                    </nav>
                </div>
                <nav aria-label="Footer legal links">
                    <ul className="flex flex-col sm:grid sm:grid-cols-4 sm:gap-[var(--spacing-07)]">
                        <li className="hidden lg:block"></li>
                        <li className="body-01 text-[var(--text-secondary)] max-sm:order-3 max-lg:col-span-2"><Copyright /></li>
                        <li className="mb-[var(--spacing-03)] sm:mb-0 max-sm:order-1"><Link href="/privacy" className="body-01 text-[var(--text-secondary)] hover:underline hover:text-[var(--text-primary)] transition-all ease-in duration-100">Privacy</Link></li>
                        <li className="mb-[var(--spacing-06)] sm:mb-0 max-sm:order-2"><Link href="/terms-of-use" className="body-01 text-[var(--text-secondary)] hover:underline hover:text-[var(--text-primary)] transition-all ease-in duration-100">Terms of use</Link></li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}