import { Link } from "@/i18n/navigation";

export default async function NewsPage({ params }: {
    params: Promise<{
        slug: string;
    }>
}) {
    const { slug } = await params;
    return (
        <div className="flex flex-col">
            <div className="flex items-center">
                <Link href="/">Home</Link>
                <span> / </span>
                <Link href="/news">News & Blogs</Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[208px_1fr] px-[var(--spacing-05)] lg:pt-[var(--spacing-08)] pb-[var(--spacing-10)]">

            </div>
        </div>
    );
}