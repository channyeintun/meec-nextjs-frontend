import { Link } from "@/i18n/navigation";

export default function Page() {
    return (
        <div>
            <div className="hidden lg:flex items-center gap-2 p-[var(--spacing-07)] pb-[var(--spacing-09)]">
                <Link href="/" className="text-[var(--link-primary)]">Home</Link>
                <span>/</span>
                <Link href="/news">News & Blogs</Link>
            </div>
        </div>
    )
}