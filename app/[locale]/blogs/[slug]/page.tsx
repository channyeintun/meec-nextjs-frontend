import { LatestArticles } from "@/components/Blog/LatestArticles";
import { Share } from "@/components/Blog/Share";
import { SubscribeYoutube } from "@/components/Blog/SubscribeYoutube";
import { Topic } from "@/components/common/Topic";
import Calendar from "@/components/icons/Calendar";
import Clock from "@/components/icons/Clock";
import News from "@/components/icons/News";
import { createApolloClient } from "@/graphql";
import { GET_ARTICLES_BY_SLUG } from "@/graphql/queries/articles";
import { Link } from "@/i18n/navigation";
import { cn, dateFormatter } from "@/lib/utils";
import { Article, ArticlesData } from "@/types/article";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";
import readingTime from "reading-time";

export async function generateMetadata(
    { params }: {
        params: Promise<{
            locale: string;
            slug: string;
        }>
    }
): Promise<Metadata> {

    const client = createApolloClient();

    const { slug, locale } = await params

    const { data } = await client.query<{
        articles: Partial<Article>[]
    }>({
        query: GET_ARTICLES_BY_SLUG,
        variables: {
            locale: locale === "mm" ? "my" : "en",
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

    const article = data.articles && data.articles.length > 0 ? data.articles[0] : null;

    return {
        title: article?.title,
        description: article?.description,
    }
}

export default async function NewsPage({ params }: {
    params: Promise<{
        slug: string;
    }>
}) {

    const client = createApolloClient();
    
    const headersList = await headers();
    const domain = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto');

    const locale = await getLocale();
    const { slug } = await params;

    const { data } = await client.query<ArticlesData>({
        query: GET_ARTICLES_BY_SLUG,
        variables: {
            locale: locale === "mm" ? "my" : "en",
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

    const link_to_article = encodeURI(protocol + '://' + domain! + '/blogs/' + slug);

    if (!article) {
        notFound();
    }

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
                            <span className="text-[var(--text-primary)] label-01">Date</span>
                            <span className="text-[var(--text-primary)] body-01">{dateFormatter.format(Date.parse(article.publishedAt))}</span>
                        </div>
                        {article.author && (<div className="border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                            <span className="text-[var(--text-primary)] label-01">Authors</span>
                            <span className="text-[var(--link-primary)] body-01">{article.author.name}</span>
                        </div>)}
                        <div className="border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                            <span className="text-[var(--text-primary)] label-01">Topics</span>
                            <div className="flex gap-2 flex-wrap items-center">{article.topics.map(it => <Topic key={it.slug}>{it.name}</Topic>)}</div>
                        </div>
                        <Share url={link_to_article} />
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
                        <h1 className={cn("pt-[var(--spacing-05)] text-[var(--text-primary)]", {
                            "mm-display-03": locale === 'mm',
                            "fluid-display-01": locale === 'en'
                        })}>
                            {article.title}
                        </h1>
                        <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-[var(--spacing-03)] sm:gap-[var(--spacing-08)] my-[var(--spacing-08)]">
                            {article.author && (<div className="border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                                <span className="text-[var(--text-primary)] label-01">Authors</span>
                                <span className="text-[var(--link-primary)] body-01">{article.author.name}</span>
                            </div>)}
                            <div className="border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                                <span className="text-[var(--text-primary)] label-01">Topics</span>
                                <div className="flex gap-2 flex-wrap items-center">{article.topics.map(it => <Topic key={it.slug}>{it.name}</Topic>)}</div>
                            </div>
                        </div>
                        <figure className="my-[var(--spacing-09)] sm:my-[var(--spacing-10)] space-y-[var(--spacing-03)]">
                            <Image
                                className="w-full aspect-video"
                                alt={article.cover.alternativeText ?? "Cover photo"}
                                width={article.cover.width}
                                height={article.cover.height}
                                src={article.cover.url}
                            />
                            <figcaption className="text-[var(--text-secondary)] body-01">{article.cover.caption}</figcaption>
                        </figure>
                        <div className={cn("[&_a]:text-[var(--link-primary)] [&_a]:underline text-[var(--text-primary)] lg:max-w-[616px]", {
                            "mm-body-01-sm-03": locale === 'mm',
                            "body-02-sm-fluid-heading-03": locale === 'en'
                        })}>
                            <BlocksRenderer
                                content={article.body as any} />
                        </div>
                        <SubscribeYoutube />
                        <Share url={link_to_article} className="lg:hidden flex-row justify-between" />
                    </article>
                </div>) : null}
            <LatestArticles />
        </div>
    );
}