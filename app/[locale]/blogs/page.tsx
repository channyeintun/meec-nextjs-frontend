'use client';

import { Blogs } from "@/components/Blog/Blogs";
import { CategoryFilter, FilterDropdown, TopicFilter } from "@/components/Blog/Filter";
import { Link } from "@/i18n/navigation";
import { strapi_client } from "@/lib/strapi";
import { Category } from "@/types/article";
import { useEffect, useState } from "react";

async function fetchCategories() {
    return strapi_client.collection("categories").find({
        fields: ["name", "slug"],
        populate: {
            "articles": {
                fields: ["documentId"]
            }
        }
    });
}

async function fetchTopics() {
    return strapi_client.collection("topics").find({
        fields: ["name", "slug"],
        populate: {
            "articles": {
                fields: ["documentId"]
            }
        }
    });
}

export default function Page() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [topics, setTopics] = useState<Category[]>([]);

    useEffect(() => {
        fetchCategories().then(res => setCategories(res.data as unknown as Category[]));
        fetchTopics().then(res => setTopics(res.data as unknown as Category[]));
    }, [])

    return (
        <div className="">
            <div className="hidden lg:flex items-center gap-2 p-[var(--spacing-07)] pb-[var(--spacing-09)]">
                <Link href="/" className="text-[var(--link-primary)]">Home</Link>
                <span>/</span>
                <Link href="/news">News & Blogs</Link>
            </div>
            <h1 className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pt-[var(--spacing-08)] pb-[var(--spacing-10)] fluid-display-01 text-[var(--text-primary)] text-balance">Explore the insightful news and blogs from our community</h1>
            <FilterDropdown
                topics={topics}
                categories={categories} />
            <div className="grid grid-cols-1 lg:grid-cols-[208px_1fr] sm:px-[var(--spacing-07)] pb-[var(--spacing-11)] lg:pb-[var(--spacing-13)] gap-[var(--spacing-11)]">
                <div className="hidden lg:block">
                    <CategoryFilter data={topics} />
                    <TopicFilter data={categories} />
                </div>
                <Blogs />
            </div>
        </div>
    )
}