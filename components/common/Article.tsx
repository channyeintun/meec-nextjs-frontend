import { Link } from "@/i18n/navigation"
import { Article as ArticleInterface } from "@/types/article"
import { FC } from "react"
import { Category } from "../Home/Category";
import { cn, formatImageUrl } from "@/lib/utils";
import Image from "next/image";
import { Topic } from "./Topic";

export const Article: FC<{
    article: ArticleInterface;
    className?: string;
    locale: string;
}> = ({
    article,
    className,
    locale,
}) => {
        return (
            <Link href={`/blogs/${article.slug}`} className={cn("inline-block", className)}>
                <article className={cn("flex flex-col py-[var(--spacing-06)] px-[var(--spacing-05)] sm:px-[var(--spacing-06)] min-h-[560px] hover:bg-[var(--background-hover)]")}>
                    <Category name={article.category?.name} />
                    <Image width={272} height={136} src={formatImageUrl(article.cover?.url)} alt={article.title} className="w-full aspect-3/2 object-cover my-[var(--spacing-06)]" />
                    <div className="space-y-[var(--spacing-02)]">
                        <p className="text-sm text-[var(--text-secondary)] label-02">{new Date(article.createdAt).toLocaleDateString(locale, {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                        }).replace(/ /g, ' ')}</p>
                        <h3 className="text-[var(--primary)] text-xl font-bold line-clamp-3 fluid-heading-03">{article.title}</h3>
                    </div>
                    <div className="space-y-4 mt-auto">
                        <p className="body-01 mt-auto text-[var(--primary)] line-clamp-3">{article.description}</p>
                        <p>{article.topics?.map(it => <Topic key={it.slug}>{it.name}</Topic>)}</p>
                    </div>
                </article>
            </Link>

        )
    }