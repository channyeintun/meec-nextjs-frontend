'use client';

import { cn } from "@/lib/utils";
import { Category } from "@/types/article";
import { useDisclosure } from "@mantine/hooks";
import { FC } from "react";
import { Checkbox } from "../common/Checkbox";
import ChevronDown from "../icons/ChevronDown";

export const FilterDropdown: FC<{
    topics: Category[];
    categories: Category[];
}> = ({
    categories,
    topics
}) => {
        const [opened, handlers] = useDisclosure();
        return (
            <aside className="relative lg:hidden mx-[var(--spacing-05)] sm:mx-[var(--spacing-07)] my-[var(--spacing-05)] lg:mx-0">
                <button
                    className="flex items-center cursor-pointer p-[var(--spacing-05)]  border border-[var(--border-subtle-01)] lg:hover:bg-[var(--layer-01)] w-full text-start"
                    onClick={handlers.toggle}
                    aria-expanded={opened}
                    aria-controls="news-blogs-submenu"
                    aria-haspopup="listbox"
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
                <ul
                    id="news-blogs-submenu"
                    role="listbox"
                    className={cn(
                        "w-full px-[var(--spacing-05)] bg-[var(--layer-01)] absolute left-0 z-20 shadow-[0px_4px_8px_0_rgba(0,0,0,0.2)]",
                        { "block": opened, "hidden": !opened }
                    )}
                >
                    <li role="option">
                        <CategoryFilter data={categories} />
                    </li>
                    <li role="option">
                        <TopicFilter data={topics} />
                    </li>
                </ul>
            </aside>
        )
    }

export const CategoryFilter: FC<{
    data: Category[]
}> = ({
    data
}) => {

        return (
            <div className="lg:border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                <h2 className="text-[var(--text-primary)] label-01">Explore by category</h2>
                {
                    data.map(category => <Checkbox
                        key={category.slug}
                        filterKey="category"
                        value={category} />)
                }
            </div>
        )
    }

export const TopicFilter: FC<{
    data: Category[]
}> = ({
    data
}) => {
        return (
            <div className="lg:border-t boder-[var(--border-strong-01)] flex flex-col gap-[var(--spacing-05)] pt-[var(--spacing-05)] pb-[var(--spacing-08)]">
                <h2 className="text-[var(--text-primary)] label-01">Explore by topic</h2>
                {
                    data.map(topic => <Checkbox
                        key={topic.slug}
                        filterKey="topic"
                        value={topic} />)
                }
            </div>
        )
    }