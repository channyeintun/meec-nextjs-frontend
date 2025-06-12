import { Blogs } from "@/components/Blog/Blogs";
import { CategoryFilter, FilterDropdown, TopicFilter } from "@/components/Blog/Filter";
import { createApolloClient } from "@/graphql";
import { GET_CATEGORIES } from "@/graphql/queries/categories";
import { GET_TOPICS } from "@/graphql/queries/topics";
import { Link } from "@/i18n/navigation";
import { Category } from "@/types/article";

export default async function Page() {

    const client = createApolloClient();

    const categoryPromise = client.query<{
        categories: Category[];
    }>({
        query: GET_CATEGORIES
    })

    const topicsPromise = client.query<{
        topics: Category[];
    }>({
        query: GET_TOPICS,
    })

    const [categoriesData, topicsData] = await Promise.all([categoryPromise, topicsPromise]);

    const categories = categoriesData.data.categories;
    const topics = topicsData.data.topics;

    return (
        <div className="max-w-[96rem] w-full mx-auto">
            <nav aria-label="Breadcrumb">
                <ol className="hidden lg:flex items-center gap-2 p-[var(--spacing-07)] pb-[var(--spacing-09)]">
                    <li><Link href="/" className="text-[var(--link-primary)]">Home</Link></li>
                    <li>/</li>
                    <li><Link href="/blogs" aria-current="page">News & Blogs</Link></li>
                </ol>
            </nav>
            <h1 className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pt-[var(--spacing-08)] pb-[var(--spacing-10)] fluid-display-01 text-[var(--text-primary)] text-balance">Explore the insightful news and blogs from our community</h1>
            <FilterDropdown
                topics={topics ?? []}
                categories={categories ?? []} />
            <div className="grid grid-cols-1 lg:grid-cols-[208px_1fr] sm:px-[var(--spacing-07)] pb-[var(--spacing-11)] lg:pb-[var(--spacing-13)] gap-[var(--spacing-11)]">
                <div className="hidden lg:block">
                    <CategoryFilter data={categories ?? []} />
                    <TopicFilter data={topics ?? []} />
                </div>
                <Blogs />
            </div>
        </div>
    )
}