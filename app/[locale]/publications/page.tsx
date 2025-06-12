import { AuthorFilter, FilterDropdown } from "@/components/Publication/Filter";
import { Publications } from "@/components/Publication/Publications";
import { createApolloClient } from "@/graphql";
import { GET_AUTHORS } from "@/graphql/queries/authors";
import { Link } from "@/i18n/navigation";
import { Author } from "@/types/article";

export default async function Page() {

    const client = createApolloClient();

    const getAuthorsPromise = client.query<{
        authors: Author[];
    }>({
        query: GET_AUTHORS
    });

    const [authorsResponse] = await Promise.all([getAuthorsPromise]);

    const authors = authorsResponse.data.authors;

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