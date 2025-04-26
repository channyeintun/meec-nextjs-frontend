import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import ArrowOutward from "../icons/ArrowOutward";

export const YoutubeSection = () => {
    const t = useTranslations("HomePage");

    return (
        <section className="px-[var(--spacing-07)] py-[var(--spacing-10)] flex justify-center bg-[var(--layer-01)]">
            <div className="space-y-[var(--spacing-09)] lg:max-w-[640px]">
                <p className="fluid-paragraph-01">{t("Youtube description")}</p>
                <Link className="w-fit font-sans text-base tracking-[0] leading-[22px] flex items-center gap-8 px-4 py-[13px] sm:pt-[29px] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] hover:text-[--text-inverse] text-[var(--text-on-color)]" href="https://www.youtube.com" target="_blank">
                    {t("Subscribe")}
                    <ArrowOutward className="w-5 h-5" />
                </Link>
            </div>
        </section>
    )
}