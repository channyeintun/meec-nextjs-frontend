import { Topic } from "@/components/common/Topic";
import Calendar from "@/components/icons/Calendar";
import Clock from "@/components/icons/Clock";
import Facebook from "@/components/icons/Facebook";
import LinkedIn from "@/components/icons/LinkedIn";
import News from "@/components/icons/News";
import X from "@/components/icons/X";
import { createApolloClient } from "@/graphql";
import { GET_ARTICLES_BY_SLUG, GET_ARTICLES_SLUGS } from "@/graphql/queries/articles";
import { Link } from "@/i18n/navigation";
import { dateFormatter } from "@/lib/utils";
import { Article, ArticlesData } from "@/types/article";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getLocale } from "next-intl/server";
import Image from "next/image";
import readingTime from "reading-time";

const client = createApolloClient();

export async function generateStaticParams() {
    const locales = ['en', 'mm']
    const slugs: { slug: string }[] = [];

    locales.forEach(async locale => {
        const { data } = await client.query<{
            articles: Partial<Article>[]
        }>({
            query: GET_ARTICLES_SLUGS,
            variables: {
                locale
            }
        });
        if (data) {
            data.articles.forEach(article => {
                slugs.push({
                    slug: article.slug!
                });
            })
        }
    })

    return slugs;
}

export default async function NewsPage({ params }: {
    params: Promise<{
        slug: string;
    }>
}) {
    const locale = await getLocale();
    const { slug } = await params;

    const { data } = await client.query<ArticlesData>({
        query: GET_ARTICLES_BY_SLUG,
        variables: {
            locale,
            filters: {
                slug: {
                    eq: slug
                },
            },
            pagination: {
                limit: 1
            },
        }
    });

    const article = data && data.articles.length > 0 ? data.articles[0] : null;

    const duration = article ? readingTime(article.body.map(it => it.children).join(" ")).minutes : 0;

    return (
        <div className="flex flex-col pt-[var(--spacing-08)] lg:pt-0">
            <div className="hidden lg:flex items-center gap-2 p-[var(--spacing-07)] pb-[var(--spacing-09)]">
                <Link href="/" className="text-[var(--link-primary)]">Home</Link>
                <span>/</span>
                <Link href="/news">News & Blogs</Link>
            </div>
            {article ? (
                <div className="grid grid-cols-1 lg:grid-cols-[208px_1fr] px-[var(--spacing-05)] sm:px-[var(--spacing-07)] lg:pt-[var(--spacing-08)] pb-[var(--spacing-10)] gap-[var(--spacing-11)]">
                    <div className="hidden lg:flex flex-col">
                        <div className="border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                            <span>Date</span>
                            <span>{dateFormatter.format(Date.parse(article.publishedAt))}</span>
                        </div>
                        <div className="border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                            <span>Authors</span>
                            <span className="text-[var(--link-primary)]">Author Name</span>
                        </div>
                        <div className="border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                            <span>Topics</span>
                            <div className="flex gap-2 flex-wrap items-center">{article.topics.map(it => <Topic key={it.slug}>{it.name}</Topic>)}</div>
                        </div>
                        <div className="border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                            <span>Share</span>
                            <div className="flex gap-[var(--spacing-05)]">
                                <Facebook />
                                <LinkedIn />
                                <X />
                            </div>
                        </div>
                    </div>
                    <article>
                        <div className="pt-[var(--spacing-05)] pb-[var(--spacing-08)] sm:max-lg:flex grid grid-cols-2 lg:grid-cols-4 gap-y-[var(--spacing-05)] gap-x-[var(--spacing-09)] sm:gap-x-[var(--spacing-11)] lg:gap-x-[var(--spacing-08)] border-t border-[var(--border-strong-01)]">
                            <div className="flex items-center gap-[var(--spacing-03)] lg:hidden">
                                <Calendar className="w-5 h-5" />
                                <span>{dateFormatter.format(Date.parse(article.publishedAt))}</span>
                            </div>
                            <div className="flex items-center gap-[var(--spacing-03)]">
                                <News className="w-5 h-5" />
                                <span>News</span>
                            </div>
                            <div className="flex items-center gap-[var(--spacing-03)]">
                                <Clock className="w-5 h-5" />
                                <span>{Number.isInteger(duration) ? duration : Math.ceil(duration) + 1} min read</span>
                            </div>
                        </div>
                        <h1 className="pt-[var(--spacing-05)] text-[var(--text-primary)] fluid-display-01">
                            {article.title}
                        </h1>
                        <figure className="my-[var(--spacing-09)] sm:my-[var(--spacing-10)] space-y-[var(--spacing-03)]">
                            <Image
                                className="w-full aspect-video"
                                alt={article.cover.alternativeText ?? "Cover photo"}
                                width={article.cover.width}
                                height={article.cover.height}
                                src={'http://localhost:1337' + article.cover.url} />
                            <figcaption className="text-[var(--text-secondary)] body-01">{article.cover.caption}</figcaption>
                        </figure>
                        <div>
                            <BlocksRenderer
                                content={article.body as any} />
                        </div>
                    </article>
                </div>) : <h1>404 Not Found</h1>}
        </div>
    );
}