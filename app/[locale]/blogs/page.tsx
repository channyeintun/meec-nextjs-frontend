import { Link } from "@/i18n/navigation";

export default function Page() {
    return (
        <div className="">
            <div className="hidden lg:flex items-center gap-2 p-[var(--spacing-07)] pb-[var(--spacing-09)]">
                <Link href="/" className="text-[var(--link-primary)]">Home</Link>
                <span>/</span>
                <Link href="/news">News & Blogs</Link>
            </div>
            <h1 className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pt-[var(--spacing-08)] pb-[var(--spacing-10)] fluid-display-01 text-[var(--text-primary)] text-balance">Explore the insightful news and blogs from our community</h1>
            <div className="grid grid-cols-1 lg:grid-cols-[208px_1fr] sm:px-[var(--spacing-07)] pb-[var(--spacing-11)] lg:pb-[var(--spacing-13)] gap-[var(--spacing-11)]">
                <div className="hidden lg:block">
                    <div className="border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                        <span className="text-[var(--text-primary)] label-01">Explore by category</span>
                        <span className="text-[var(--text-primary)] body-01">test</span>
                    </div>
                    <div className="border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                        <span className="text-[var(--text-primary)] label-01">Explore by topic</span>
                        <span className="text-[var(--text-primary)] body-01">test</span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}