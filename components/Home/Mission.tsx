import { useTranslations } from "next-intl"
import CommunityCentered from "../icons/CommunityCentered";
import KnowledgeSharing from "../icons/KnowledgeSharing";
import SocialResponsibility from "../icons/SocialResponsibility";
import { Link } from "@/i18n/navigation";
import ArrowRight from "../icons/ArrowRight";

export const Mission = () => {
    const t = useTranslations("HomePage");
    return (
        <section className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] py-[var(--spacing-10)]">
            <div className="lg:max-w-[608px] w-full mx-auto py-[var(--spacing-10)] flex flex-col gap-[var(--spacing-11)]">
                <h1 className="who_we_are_heading text-[var(--text-primary)]">{t("who_we_are")}</h1>
                <ul className="flex flex-col gap-[var(--spacing-09)] sm:gap-[var(--spacing-08)]">
                    <li className="flex flex-col sm:flex-row gap-[var(--spacing-05)] sm:gap-[var(--spacing-08)]">
                        <CommunityCentered className="shrink-0" />
                        <div className="space-y-[var(--spacing-02)] sm:space-y-[var(--spacing-03)]">
                            <h2 className="heading-01 text-[var(--text-primary)]">{t("Community Centered")}</h2>
                            <p className="body-02 text-[var(--text-primary)]">{t("Community Centered description")}</p>
                        </div>
                    </li>
                    <li className="flex flex-col sm:flex-row gap-[var(--spacing-05)] sm:gap-[var(--spacing-08)]">
                        <KnowledgeSharing className="shrink-0" />
                        <div className="space-y-[var(--spacing-02)] sm:space-y-[var(--spacing-03)]">
                            <h2 className="heading-01 text-[var(--text-primary)]">{t("Knowledge Sharing")}</h2>
                            <p className="body-02 text-[var(--text-primary)]">{t("Knowledge Sharing description")}</p>
                        </div>
                    </li>
                    <li className="flex flex-col sm:flex-row gap-[var(--spacing-05)] sm:gap-[var(--spacing-08)]">
                        <SocialResponsibility className="shrink-0" />
                        <div className="space-y-[var(--spacing-02)] sm:space-y-[var(--spacing-03)]">
                            <h2 className="heading-01 text-[var(--text-primary)]">{t("Social Responsibility")}</h2>
                            <p className="body-02 text-[var(--text-primary)]">{t("Social Responsibility description")}</p>
                        </div>
                    </li>
                    <li className="flex flex-col sm:flex-row gap-[var(--spacing-05)] sm:gap-[var(--spacing-08)]">
                        <div className="w-16 hidden sm:block"></div>
                        <Link href="/about" className="body-01 text-[var(--link-primary)] flex items-center gap-[var(--spacing-03)] hover:text-[var(--link-primary-hover)]">Learn more about us <ArrowRight /></Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}