import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import Checked from "../icons/Checked";
import Unchecked from "../icons/Unchecked";

interface Value {
    name: string;
    slug: string;
    articles?: any[];
    publications?: any[];
}

export const Checkbox: FC<{
    value: Value;
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
                {value.name} ({getArrayLength(value)})
            </span>
        </label>
    );
};

function getArrayLength(value: Value) {
    if (Array.isArray(value.publications)) {
        return value.publications.length;
    } else if (Array.isArray(value.articles)) {
        return value.articles.length;
    } else {
        return 0;
    }
}
