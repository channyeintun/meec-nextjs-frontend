'use client';

import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import Checked from "../icons/Checked";
import Unchecked from "../icons/Unchecked";
import { useDisclosure } from "@mantine/hooks";
import ChevronDown from "../icons/ChevronDown";
import { cn } from "@/lib/utils";
import { Author } from "@/types/article";

export const FilterDropdown: FC<{
    authors: Author[];
}> = ({
    authors,
}) => {
        const [opened, handlers] = useDisclosure();
        return (
            <div className="relative lg:hidden mx-[var(--spacing-05)] sm:mx-[var(--spacing-07)] my-[var(--spacing-05)] lg:mx-0">
                <button
                    className="flex items-center cursor-pointer p-[var(--spacing-05)]  border border-[var(--border-subtle-01)] lg:hover:bg-[var(--layer-01)] w-full text-start"
                    onClick={handlers.toggle}
                    aria-expanded={opened}
                    aria-controls="news-blogs-submenu"
                >
                    Filter
                    <span
                        className={cn(
                            "w-4 h-4 ms-auto lg:ml-1 transition-transform duration-300",
                            { "rotate-180": opened }
                        )}
                    >
                        <ChevronDown />
                    </span>
                </button>
                <ul className={cn(
                    "w-full px-[var(--spacing-05)] bg-[var(--layer-01)] absolute left-0 z-20 shadow-[0px_4px_8px_0_rgba(0,0,0,0.2)]",
                    { "block": opened, "hidden": !opened }
                )}>
                    <li>
                        <AuthorFilter data={authors} />
                    </li>
                </ul>
            </div>
        )
    }

export const AuthorFilter: FC<{
    data: Author[]
}> = ({
    data
}) => {

        return (
            <div className="lg:border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                <span className="text-[var(--text-primary)] label-01">Explore by author</span>
                {
                    data.map(author => <Checkbox
                        key={author.documentId}
                        filterKey="author"
                        value={author} />)
                }
            </div>
        )
    }

const Checkbox: FC<{
    value: Author;
    filterKey: string;
}> = ({ value, filterKey }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentFilters = searchParams.getAll(filterKey);
    const isChecked = currentFilters.includes(value.slug);

    const toggleFilter = () => {
        const params = new URLSearchParams(searchParams.toString());
        const newFilters = isChecked
            ? currentFilters.filter((filter) => filter !== value.slug)
            : [...currentFilters, value.slug];

        params.delete(filterKey);

        newFilters.forEach((filter) => {
            params.append(filterKey, filter);
        });

        router.push(`?${params.toString()}`, {
            scroll: false
        });
    };

    return (
        <label
            htmlFor={value.slug}
            className="flex items-center gap-1 text-[var(--text-primary)] cursor-pointer transition-colors  [&:has(input[type=checkbox]:focus-visible)]:ring-2 [&:has(input[type=checkbox]:focus-visible)]:ring-blue-600 [&:has(input[type=checkbox]:focus-visible)]:ring-offset-2"
        >
            <input
                type="checkbox"
                id={value.slug}
                checked={isChecked}
                onChange={toggleFilter}
                className="absolute sr-only"
            />
            {isChecked ? (
                <Checked aria-hidden="true" className="min-w-5 min-h-5" />
            ) : (
                <Unchecked aria-hidden="true" className="min-w-5 min-h-5" />
            )}
            <span className="label-01">
                {value.name} ({value.articles?.length ?? 0})
            </span>
        </label>
    );
};