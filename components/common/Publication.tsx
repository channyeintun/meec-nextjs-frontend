import { Link } from "@/i18n/navigation";
import { Publication as PublicationType } from "@/types/publication";
import Image from "next/image";
import { FC } from "react";
import Pdf from "../icons/Pdf";
import { formatImageUrl } from "@/lib/utils";

export const Publication: FC<{
    publication: PublicationType;
    className?: string;
}> = ({
    publication,
    className,
}) => {
        return (
            <Link target="_blank" href={publication.url} className={className}>
                <article className="group text-[var(--text-primary)] flex flex-col border-[var(--border-subtle-01)] bg-[var(--layer-01)] hover:bg-[var(--layer-02)] sm:not-first:border-s border-b last:border-b-0 sm:nth-last-[-n+2]:border-b-0 lg:nth-last-[-n+4]:border-b-0 sm:max-lg:nth-of-type-[2n+1]:border-s-0 lg:nth-of-type-[4n+1]:border-s-0">
                    <Image width={312} height={240} alt="publication cover photo" className="w-full aspect-3/2 object-cover" src={formatImageUrl(publication.cover?.url)} />
                    <div className="p-[var(--spacing-05)] min-h-[288px] flex flex-col">
                        <p className="text-[var(--text-secondary)] body-01 mb-[var(--spacing-03)]">{publication.authors?.map(it => it.name)?.join(", ")} | {publication.publishedDate.split("-")[0]}</p>
                        <h1 className="fluid-heading-03 text-[var(--text-primary)] line-clamp-3 group-hover:text-[var(--link-primary)]">{publication.title}</h1>
                        <p className="body-02 text-[var(--text-primary)] line-clamp-3 mb-6 mt-auto">{publication.description}</p>
                        <Pdf className="w-6 h-6 transition-colors duration-200 ease-in group-hover:text-[var(--icon-interactive)]" />
                    </div>
                </article>
            </Link>

        )
    }