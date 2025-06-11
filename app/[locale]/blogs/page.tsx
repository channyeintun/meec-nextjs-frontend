import { Blogs } from "@/components/Blog/Blogs";
import { CategoryFilter, FilterDropdown, TopicFilter } from "@/components/Blog/Filter";
import { Link } from "@/i18n/navigation";
import { strapi_client } from "@/lib/strapi";
import { Category } from "@/types/article";
import { QueryClient } from "@tanstack/react-query";

async function fetchCategories() {
    return strapi_client.collection("categories").find({
        fields: ["name", "slug"],
        populate: {
            "articles": {
                fields: ["documentId"]
            }
        }
    }).then(res => res.data as unknown as Category[]);
}

async function fetchTopics() {
    return strapi_client.collection("topics").find({
        fields: ["name", "slug"],
        populate: {
            "articles": {
                fields: ["documentId"]
            }
        }
    }).then(res => res.data as unknown as Category[]);
}

export default async function Page() {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });

    const getCategoryPromise = queryClient.fetchQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    })

    const getTopicPromise = queryClient.fetchQuery({
        queryKey: ['topics'],
        queryFn: fetchTopics,
    });

    const [categories, topics] = await Promise.all([getCategoryPromise, getTopicPromise])

    return (
        <div className="max-w-[1312px] w-full mx-auto">
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