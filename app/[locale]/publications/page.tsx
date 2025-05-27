'use client';

import { AuthorFilter, FilterDropdown } from "@/components/Publication/Filter";
import { Publications } from "@/components/Publication/Publications";
import { Link } from "@/i18n/navigation";
import { strapi_client } from "@/lib/strapi";
import { Author } from "@/types/article";
import { useQuery } from "@tanstack/react-query";

async function fetchAuthors() {
    return strapi_client.collection("authors").find({
        fields: ["name", "slug"],
        populate: {
            "publications": {
                fields: ["documentId"]
            }
        }
    }).then(res => res.data as unknown as Author[]);
}

export default function Page() {

    const { data: authors } = useQuery<Author[]>({
        queryKey: ['authors'],
        queryFn: fetchAuthors,
    });
    return (
        <div className="">
            <div className="hidden lg:flex items-center gap-2 p-[var(--spacing-07)] pb-[var(--spacing-09)]">
                <Link href="/" className="text-[var(--link-primary)]">Home</Link>
                <span>/</span>
                <Link href="/news">Publications</Link>
            </div>
            <h1 className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pt-[var(--spacing-08)] pb-[var(--spacing-10)] fluid-display-01 text-[var(--text-primary)] text-balance">Explore the insightful news and blogs from our community</h1>
            <FilterDropdown
                authors={authors ?? []} />
            <div className="grid grid-cols-1 lg:grid-cols-[208px_1fr] sm:px-[var(--spacing-07)] pb-[var(--spacing-11)] lg:pb-[var(--spacing-13)] gap-[var(--spacing-11)]">
                <div className="hidden lg:block">
                    <AuthorFilter data={authors ?? []} />
                </div>
                <Publications />
            </div>
        </div>
    )
}