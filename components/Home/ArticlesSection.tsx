
import { createApolloClient } from "@/graphql";
import { GET_ARTICLES } from "@/graphql/queries/articles";
import { cn } from "@/lib/utils";
import { ArticlesData } from "@/types/article";
import { getLocale } from "next-intl/server";
import { Article } from "../common/Article";
import { ReadMoreLink } from "./ReadMoreLink";

export const ArticlesSection = async () => {

    const client = createApolloClient();

    const locale = await getLocale();

    const { data } = await client.query<ArticlesData>({
        query: GET_ARTICLES,
        variables: {
            locale: locale === "mm" ? "my" : "en",
            pagination: {
                limit: 6
            }
        },
        fetchPolicy: "no-cache"
    });

    let arr = data?.articles ?? [];

    const articles = [...arr.slice(0, 2), null, ...arr.slice(2, 5), null, ...arr.slice(5)];

    return (
        <section role="region" aria-label="Latest articles" className="max-w-[1312px] mx-auto sm:px-8 grid lg:grid-cols-[160px_1fr] gap-6 sm:gap-[var(--spacing-08)] lg:gap-[var(--spacing-11)] py-[var(--spacing-11)]">
            <div className="pt-[var(--spacing-03)] px-[var(--spacing-05)] sm:px-0 lg:border-t border-[var(--border-strong-01)]">
                <h2 className="body-01 text-[var(--text-primary)]">Lastest updates</h2>
            </div>
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:pe-12">
                {articles.map((article, idx) => (
                    article ? (
                        <Article
                            className={cn("border-[var(--border-strong-01)] border-b sm:border-r", {
                                "max-sm:border-t": idx === 0,
                                "sm:border-t": [0, 1].includes(idx),
                                "sm:border-l": [0, 3].includes(idx),
                                "sm:max-lg:border-l": idx === 5
                            })}
                            key={article.slug}
                            article={article}
                            locale={locale} />
                    ) : <div key={idx} className={cn("border-[var(--border-strong-01)] hidden lg:block", {
                        "sm:border-b": idx === 2,
                        "sm:border-r": idx === 6
                    })}></div>
                ))}
                <div className="hidden sm:max-lg:block"></div>
                <ReadMoreLink />
            </div>
        </section>
    )
}