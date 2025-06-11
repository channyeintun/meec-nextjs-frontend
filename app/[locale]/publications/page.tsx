import { AuthorFilter, FilterDropdown } from "@/components/Publication/Filter";
import { Publications } from "@/components/Publication/Publications";
import { Link } from "@/i18n/navigation";
import { strapi_client } from "@/lib/strapi";
import { Author } from "@/types/article";
import { QueryClient } from "@tanstack/react-query";

async function fetchAuthors() {
    return strapi_client.collection("authors").find({
        fields: ["name", "slug"],
        populate: {
            "publications": {
                fields: ["documentId"]
            }
        }
    }).then(res => res.data as unknown as Author[]);
}

export default async function Page() {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });

    const getAuthorsPromise = queryClient.fetchQuery({
        queryKey: ['authors'],
        queryFn: fetchAuthors,
    })

    const [authors] = await Promise.all([getAuthorsPromise])

    return (
        <div className="max-w-[96rem] w-full mx-auto">
            <nav aria-label="Breadcrumb">
                <ol className="hidden lg:flex items-center gap-2 p-[var(--spacing-07)] pb-[var(--spacing-09)]">
                    <li><Link href="/" className="text-[var(--link-primary)]">Home</Link></li>
                    <li>/</li>
                    <li><Link href="/publications" aria-current="page">Publications</Link></li>
                </ol>
            </nav>
            <h1 id="content" className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pt-[var(--spacing-08)] pb-[var(--spacing-10)] fluid-display-01 text-[var(--text-primary)] text-balance">Publications</h1>
            <FilterDropdown
                authors={authors ?? []} />
            <div className="grid grid-cols-1 lg:grid-cols-[208px_1fr] sm:px-[var(--spacing-07)] pb-[var(--spacing-11)] lg:pb-[var(--spacing-13)] gap-[var(--spacing-11)]">
                <div className="hidden lg:block">
                    <AuthorFilter data={authors ?? []} />
                </div>
                <Publications />
            </div>
        </div>
    )
}