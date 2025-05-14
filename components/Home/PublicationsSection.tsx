import { createApolloClient } from "@/graphql";
import { GET_BOOKS } from "@/graphql/queries/books";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";
import ArrowRight from "../icons/ArrowRight";
import Image from "next/image";

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
            locale: locale === "mm" ? "my" : "en",
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 sm:border-x border-y border-[var(--border-subtle-01)]">
                {data?.books?.map((book, idx) => (
                    <article key={idx} className="group text-[var(--text-primary)] flex flex-col border-[var(--border-subtle-01)] bg-[var(--layer-01)] hover:bg-[var(--layer-02)] sm:not-first:border-s border-b last:border-b-0 sm:nth-last-[-n+2]:border-b-0 lg:nth-last-[-n+4]:border-b-0 sm:max-lg:nth-of-type-[2n+1]:border-s-0 lg:nth-of-type-[4n+1]:border-s-0">
                        <Image width={312} height={240} alt="book cover photo" className="w-full aspect-3/2" src={book.cover?.url} />
                        <div className="p-[var(--spacing-05)] min-h-[288px] flex flex-col">
                            <h1 className="fluid-heading-03 text-[var(--text-primary)] line-clamp-3 group-hover:text-[var(--link-primary)]">{book.title}</h1>
                            <p className="body-02 text-[var(--text-primary)] line-clamp-3 mb-6 mt-auto">{book.description}</p>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-full transition-all duration-200 ease-[cubic-bezier(0.47,0,0.23,1.38)] group-hover:text-[var(--icon-interactive)]" />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}