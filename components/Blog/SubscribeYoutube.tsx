import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import ArrowRight from "../icons/ArrowRight";

export const SubscribeYoutube = () => {
    const t = useTranslations("BlogDetailPage");
    return (
        <Link target="_blank" className="flex flex-col !max-w-[616px] my-[var(--spacing-10)] gap-[var(--spacing-08)] fluid-heading-04 transition-all duration-200 ease-[cubic-bezier(0.47,0,0.23,1.38)] text-[var(--link-primary)] hover:text-[var(--link-primary-hover)] hover:underline py-[var(--spacing-05)] group border-t-2 hover:border-[var(--link-primary-hover)] border-[var(--link-primary)]" href="https://www.youtube.com/@myanmarearthquakeengineeringco">
            <span>{t("Subscribe to our Youtube")}</span>
            <div className="w-6 h-6 mt-auto">
                <ArrowRight className="w-8 h-8 group-hover:translate-x-full transition-all duration-200 ease-[cubic-bezier(0.47,0,0.23,1.38)]" />
            </div>
        </Link>
    )
}