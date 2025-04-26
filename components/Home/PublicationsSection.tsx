import { createApolloClient } from "@/graphql";
import { GET_BOOKS } from "@/graphql/queries/books";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";
import ArrowRight from "../icons/ArrowRight";

interface Book {
    slug: string;
    title: string;
    description: string;
    cover: {
        url: string;
    };
}

interface BooksData {
    books: Book[]
}

const client = createApolloClient();

export const PublicationsSection = async () => {
    const locale = await getLocale();

    const { data } = await client.query<BooksData>({
        query: GET_BOOKS,
        variables: {
            locale,
            pagination: {
                limit: 8
            }
        }
    });

    return (
        <section className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] py-[var(--spacing-10)] space-y-[var(--spacing-10)]">
            <div className="grid lg:grid-cols-[290px_1fr] gap-[var(--spacing-07)]">
                <h1 className="heading-01 text-[var(--text-primary)]">Publications</h1>
                <div className="space-y-[var(--spacing-06)]">
                    <p className="text-[var(--text-primary)] fluid-heading-03">This core collection covers all technical areas of civil engineering. MEEC’s publications include books, peer-reviewed journals, conference proceedings, and magazines.</p>
                    <Link href="/about" className="body-01 text-[var(--link-primary)] flex items-center gap-[var(--spacing-03)] hover:text-[var(--link-primary-hover)]">Learn more about us <ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {data?.books?.map((book, idx) => (
                    <article key={idx} className="group text-[var(--text-primary)] flex flex-col border-[var(--border-subtle-01)] bg-[var(--layer-01)] hover:bg-[var(--layer-hover-01)] first:border-t first:border-s border-e border-b lg:nth-5:border-s sm:max-lg:nth-3:border-s max-sm:border-s">
                        <img className="w-full aspect-3/2" src={book.cover.url} />
                        <div className="p-[var(--spacing-05)] min-h-[288px] flex flex-col">
                            <h1 className="fluid-heading-03 text-[var(--text-primary)] line-clamp-3">{book.title}</h1>
                            <p className="body-02 text-[var(--text-primary)] line-clamp-3 mb-6 mt-auto">{book.description}</p>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-full transition-all duration-50 ease-in" />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}