import { Link } from "@/i18n/navigation"

export const Footer = () => {
    return (
        <footer style={{
            ["--background" as string]: "light-dark(#161616,#ffffff)",
            ["--text-primary" as string]: "light-dark(hsla(0, 0%, 96%, 1),hsla(0, 0%, 9%, 1))",
            ["--text-secondary" as string]: "light-dark(hsla(0, 0%, 78%, 1),hsla(0, 0%, 32%, 1))",
            ["--icon-primary" as string]: "light-dark(hsla(0, 0%, 96%, 1),hsla(0, 0%, 9%, 1))"
        }} className="mt-auto bg-[var(--background)] text-[var(--text-secondary)] px-[var(--spacing-07)] pt-[var(--spacing-11)] pb-[var(--spacing-06)] flex flex-col gap-[var(--spacing-12)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-07)]">
                <svg
                    className="sm:max-lg:col-span-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                    viewBox="0 0 48 48"
                >
                    <path
                        fill="var(--icon-primary)"
                        fillRule="evenodd"
                        d="M31.28 4 24 7.394 16.72 4l-4.045 8.675L4 16.721 7.395 24 4 31.278l8.675 4.046L16.721 44 24 40.605 31.28 44l4.045-8.675L44 31.279 40.606 24 44 16.72l-8.675-4.045zM19 30.667h10V17.333H19z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <ul className="space-y-[var(--spacing-03)]">
                    <li><h1 className="text-[var(--text-primary)] heading-02">Quick links</h1></li>
                    <li><Link href="about" className="body-02">About us</Link></li>
                    <li><Link href="/" className="body-02">Our mission</Link></li>
                    <li><Link href="/" className="body-02">Our vission</Link></li>
                    <li><Link href="https://facebook.com" target="_blank" className="body-02">Become a member</Link></li>
                </ul>
                <ul className="space-y-[var(--spacing-03)]">
                    <li><h1 className="text-[var(--text-primary)] heading-02">Resources</h1></li>
                    <li><Link href="/news">News</Link></li>
                    <li><Link href="/insight">Insights</Link></li>
                    <li><Link href="/case-study">Case study</Link></li>
                    <li><Link href="/podcast">Podcast</Link></li>
                    <li><Link href="/publications">Publications</Link></li>
                </ul>
                <ul className="space-y-[var(--spacing-03)]">
                    <li><h1 className="text-[var(--text-primary)] heading-02">Engage with MEEC</h1></li>
                    <li><Link href="https://facebook.com" target="_blank">Facebook</Link></li>
                    <li><Link href="https://twitter.com" target="_blank">Twitter</Link></li>
                    <li><Link href="https://linkedin.com" target="_blank">LinkedIn</Link></li>
                    <li><Link href="https://youtube.com" target="_blank">Youtube</Link></li>
                    <li><Link href="https://instagram.com" target="_blank">Instagram</Link></li>
                </ul>
            </div>
            <div className="grid lg:grid-cols-4 gap-[var(--spacing-03)] lg:gap-[var(--spacing-07)]">
                <div className="hidden lg:block"></div>
                <Link href="/" className="body-01">Contact MEEC</Link>
                <Link href="/" className="body-01">Privacy</Link>
                <Link href="/" className="body-01">Terms of use</Link>
            </div>
        </footer>
    )
}