import { createApolloClient } from "@/graphql";
import { GET_ARTICLES } from "@/graphql/queries/articles";
import { ArticlesData } from "@/types/article";
import { getLocale } from "next-intl/server";
import { Article } from "../common/Article";

const client = createApolloClient();

export const LatestArticles = async () => {
    const locale = await getLocale();
    const { data } = await client.query<ArticlesData>({
        query: GET_ARTICLES,
        variables: {
            locale: locale === "mm" ? "my" : "en",
            pagination: {
                limit: 4
            }
        },
        fetchPolicy: "no-cache"
    });
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-y border-[var(--border-subtle-01)]">
            {data?.articles?.map(article => <Article
                className="border-[var(--border-subtle-01)] sm:not-first:border-s border-b last:border-b-0 sm:nth-last-[-n+2]:border-b-0 lg:nth-last-[-n+4]:border-b-0 sm:max-lg:nth-of-type-[2n+1]:border-s-0 lg:nth-of-type-[4n+1]:border-s-0"
                key={article.slug}
                article={article}
                locale={locale} />)}
        </div>
    )
}