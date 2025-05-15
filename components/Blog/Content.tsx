import { strapi_client } from "@/lib/strapi";
import { use } from "react";
import { CategoryFilter, FilterDropdown, TopicFilter } from "./Filter";
import { Blogs } from "./Blogs";
import { Category } from "@/types/article";

const categoryPromise = strapi_client.collection("categories").find({
    fields: ["name", "slug"],
    populate: {
        "articles": {
            fields: ["documentId"]
        }
    }
});

const topicPromise = strapi_client.collection("topics").find({
    fields: ["name", "slug"],
    populate: {
        "articles": {
            fields: ["documentId"]
        }
    }
});
export const Content = ()=>{
     const [categoryReponse, topicResponse] = use(Promise.all([categoryPromise, topicPromise]));

     return (
        <>
                    <FilterDropdown
                        topics={topicResponse.data as unknown as Category[]}
                        categories={categoryReponse.data as unknown as Category[]} />
                    <div className="grid grid-cols-1 lg:grid-cols-[208px_1fr] px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pb-[var(--spacing-11)] lg:pb-[var(--spacing-13)] gap-[var(--spacing-11)]">
                        <div className="hidden lg:block">
                            <CategoryFilter data={categoryReponse.data as unknown as Category[]} />
                            <TopicFilter data={topicResponse.data as unknown as Category[]} />
                        </div>
                        <Blogs />
                    </div>
                </>
     )
}