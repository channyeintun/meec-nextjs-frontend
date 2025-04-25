import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl"
import ArrowRight from "../icons/ArrowRight";

export const ReadMoreLink = () => {
    const t = useTranslations("HomePage");
    return <Link style={{
        ["--background" as string]: "light-dark(#161616,#ffffff)",
        ["--text-primary" as string]: "light-dark(hsla(0, 0%, 96%, 1),hsla(0, 0%, 9%, 1))"
    }} className="fluid-heading-05 bg-[var(--background)] text-[var(--text-primary)] w-full sm:min-h-[560px] flex flex-col justify-between p-[var(--spacing-05)] pb-[var(--spacing-06)] max-sm:gap-[100px]" href="/">{t("Read more news on our blog")} <ArrowRight className="min-w-8 min-h-8"/></Link>
}