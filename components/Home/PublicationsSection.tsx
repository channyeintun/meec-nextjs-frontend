import { createApolloClient } from "@/graphql";
import { GET_PUBLICATIONS } from "@/graphql/queries/publications";
import { Link } from "@/i18n/navigation";
import { PublicationsData } from "@/types/publication";
import { Publication } from "../common/Publication";
import ArrowRight from "../icons/ArrowRight";

export const PublicationsSection = async () => {
    const client = createApolloClient();

    const { data } = await client.query<PublicationsData>({
        query: GET_PUBLICATIONS,
        variables: {
            pagination: {
                limit: 8
            }
        }
    });

    return (
        <section className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pt-[var(--spacing-10)] pb-[var(--spacing-12)] sm:pb-[var(--spacing-13)] space-y-[var(--spacing-10)]">
            <div className="grid lg:grid-cols-[290px_1fr] gap-[var(--spacing-07)]">
                <h1 className="heading-01 text-[var(--text-primary)]">Publications</h1>
                <div className="space-y-[var(--spacing-06)]">
                    <p className="text-[var(--text-primary)] fluid-heading-03">This core collection covers all technical areas of civil engineering. MEEC’s publications include publications, peer-reviewed journals, conference proceedings, and magazines.</p>
                    <Link href="/about" className="body-01 text-[var(--link-primary)] flex items-center gap-[var(--spacing-03)] hover:text-[var(--link-primary-hover)]">Learn more about us <ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:border-x border-y border-[var(--border-subtle-01)]">
                {data?.publications?.map((publication) => (
                    <Publication
                        key={publication.documentId}
                        className="border-[var(--border-subtle-01)] sm:not-first:border-s border-b last:border-b-0 sm:nth-last-[-n+2]:border-b-0 lg:nth-last-[-n+4]:border-b-0 sm:max-lg:nth-of-type-[2n+1]:border-s-0 lg:nth-of-type-[4n+1]:border-s-0"
                        publication={publication} />
                ))}
            </div>
        </section>
    )
}