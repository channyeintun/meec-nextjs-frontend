'use client';

import { GET_ARTICLES_RELAY_STYLE } from "@/graphql/queries/articles";
import { ArticleConnectionData } from "@/types/article";
import { useQuery } from "@apollo/client";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Article } from "../common/Article";

const LIMIT = 6;

export const Blogs = () => {
    const locale = useLocale();

    const searchParams = useSearchParams();
    const categorySlugs = searchParams.getAll("category").filter(Boolean);
    const topicSlugs = searchParams.getAll("topic").filter(Boolean);

    const { data, loading, fetchMore } = useQuery<ArticleConnectionData>(GET_ARTICLES_RELAY_STYLE, {
        variables: {
            locale: locale === "mm" ? "my" : "en",
            pagination: {
                start: 0,
                limit: LIMIT,
            },
            filters: {
                category: categorySlugs?.length > 0 ? { slug: { in: categorySlugs } } : null,
                topics: topicSlugs?.length > 0 ? { slug: { in: topicSlugs } } : null
            }
        },
    });

    const page = data?.articles_connection?.pageInfo?.page ?? 0;
    const pageCount = data?.articles_connection?.pageInfo?.pageCount ?? 0;

    const loadMore = () => {
        const currentLength = data?.articles_connection?.nodes?.length;
        fetchMore({
            variables: {
                pagination: {
                    start: currentLength,
                    limit: LIMIT
                }
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return previousResult;

                return {
                    articles_connection: {
                        nodes: [
                            ...previousResult.articles_connection.nodes,
                            ...fetchMoreResult.articles_connection.nodes
                        ],
                        pageInfo: fetchMoreResult.articles_connection.pageInfo
                    }
                };
            }
        });
    }

    return (
        loading ? <p>Loading...</p> : (
            <div className="flex flex-col gap-[var(--spacing-08)] items-center">
                <section
                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    role="list"
                    aria-label="Blog articles"
                >
                    {
                        data?.articles_connection?.nodes?.map(article => (
                            <Article
                                aria-role="listitem"
                                key={article.slug}
                                article={article}
                                locale={locale}
                                className="max-sm:border-b sm:border-b sm:border-e first:border-t sm:nth-[2]:border-t lg:nth-[3]:border-t sm:first:border-s sm:max-lg:nth-of-type-[2n+1]:border-s lg:nth-of-type-[3n+1]:border-s border-[var(--border-strong-01)] box-border"
                            />
                        ))
                    }
                </section>
                {page && page < pageCount && <button onClick={loadMore} className="body-02 text-[var(--text-on-color)] bg-[var(--button-secondary)] hover:bg-[var(--button-secondary-hover)] py-[13px] ps-[16px] pe-[64px]">Load more</button>}
            </div>
        )
    )
}