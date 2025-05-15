'use client';

import { GET_ARTICLES } from "@/graphql/queries/articles";
import { ArticlesData } from "@/types/article";
import { useQuery } from "@apollo/client"
import { useLocale } from "next-intl";
import { Article } from "../common/Article";

export const Blogs = () => {
    const locale = useLocale();
    const { data, loading } = useQuery<ArticlesData>(GET_ARTICLES, {
        variables: {
            locale: locale === "mm" ? "my" : "en",
            pagination: {
                limit: 10
            },
            filters: {
                category: null,
                topics: null
            }
        },
    });
    return (
        loading ? <h1>Loading...</h1> : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                    data?.articles?.map(article => (
                        <Article
                            key={article.slug}
                            article={article}
                            locale={locale}
                            className="max-sm:border-b sm:border-b sm:border-e first:border-t sm:nth-[2]:border-t lg:nth-[3]:border-t sm:first:border-s sm:max-lg:nth-of-type-[2n+1]:border-s lg:nth-of-type-[3n+1]:border-s border-[var(--border-strong-01)] box-border" />
                    ))
                }
            </div>
        )
    )
}