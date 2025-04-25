
import { createApolloClient } from "@/graphql";
import { GET_ARTICLES } from "@/graphql/queries/articles";
import { getLocale } from "next-intl/server";
import { ReadMoreLink } from "./ReadMoreLink";

interface Article {
    createdAt: string;
    title: string;
    description: string;
    body: string;
    category: {
        name: string;
    };
    topics: {
        createdAt: string;
        name: string;
    }[];
    cover: {
        url: string;
    };
}

interface ArticlesData {
    articles: Article[];
}

const client = createApolloClient();

export const ArticlesSection = async () => {

    const locale = await getLocale();

    const { data } = await client.query<ArticlesData>({
        query: GET_ARTICLES,
    });

    let arr = data?.articles ?? [];

    const articles = [...arr.slice(0, 2), null, ...arr.slice(2, 5), null, ...arr.slice(5)];

    const formatImageUrl = (url: string) => `${process.env.NEXT_PUBLIC_API_URL}${url}`;
    return (
        <section className="px-4 sm:px-8 grid lg:grid-cols-[160px_1fr] gap-6 sm:gap-[var(--spacing-08)] lg:gap-[var(--spacing-11)] py-[var(--spacing-11)]">
            <div className="pt-[var(--spacing-03)] lg:border-t border-[var(--border-strong-01)]">
                <h1 className="body-01 text-[var(--text-primary)]">Lastest updates</h1>
            </div>
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, idx) => (
                    article ? (
                        <article key={article.createdAt} className="flex flex-col py-[var(--spacing-06)] sm:px-[var(--spacing-06)] min-h-[560px] border border-[var(--border-strong-01)]">
                            <p>{article.category.name}</p>
                            <img src={formatImageUrl(article.cover.url)} alt={article.title} className="w-full h-48 object-cover my-[var(--spacing-06)]" />
                            <div className="space-y-[var(--spacing-02)]">
                                <p className="text-sm text-[var(--text-secondary)] label-02">{new Date(article.createdAt).toLocaleDateString(locale, {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric'
                                }).replace(/ /g, ' ')}</p>
                                <h2 className="text-[var(--primary)] text-xl font-bold line-clamp-3 fluid-heading-03">{article.title}</h2>
                            </div>
                            <div className="space-y-4 mt-auto">
                                <p className="mt-auto text-[var(--primary)] line-clamp-3">{article.description}</p>
                                <p>{article.topics.map(it => <span className="px-[var(--spacing-03)] py-[var(--spacing-02)] text-[var(--tag-color-gray)] bg-[var(--tag-background-gray)] rounded-[40px]" key={it.createdAt}>{it.name}</span>)}</p>
                            </div>
                        </article>
                    ) : <div key={idx} className="hidden lg:block"></div>
                ))}
                <div className="hidden sm:max-lg:block"></div>
                <ReadMoreLink />
            </div>
        </section>
    )
}