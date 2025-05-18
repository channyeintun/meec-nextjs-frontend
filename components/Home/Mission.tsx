import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import ArrowRight from "../icons/ArrowRight";
import Shield from "../icons/Shield";
import Target from "../icons/Target";
import TriangleWitCircles from "../icons/TriangleWithCircles";

export const Mission = () => {
    const t = useTranslations("HomePage");
    return (
        <section className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] py-[var(--spacing-10)]">
            <div className="lg:max-w-[608px] w-full mx-auto py-[var(--spacing-10)] flex flex-col gap-[var(--spacing-11)]">
                <h1 className="fluid-heading-03-sm-04 text-[var(--text-primary)]">{t("who_we_are")}</h1>
                <ul className="flex flex-col gap-[var(--spacing-09)] sm:gap-[var(--spacing-08)]">
                    <li className="flex flex-col sm:flex-row gap-[var(--spacing-05)] sm:gap-[var(--spacing-08)]">
                        <Target className="shrink-0" />
                        <div className="space-y-[var(--spacing-02)] sm:space-y-[var(--spacing-03)]">
                            <h2 className="heading-01 text-[var(--text-primary)]">{t("Building a Safer Future")}</h2>
                            <p className="body-02 text-[var(--text-primary)]">{t("Building a Safer Future description")}</p>
                        </div>
                    </li>
                    <li className="flex flex-col sm:flex-row gap-[var(--spacing-05)] sm:gap-[var(--spacing-08)]">
                        <Shield className="shrink-0" />
                        <div className="space-y-[var(--spacing-02)] sm:space-y-[var(--spacing-03)]">
                            <h2 className="heading-01 text-[var(--text-primary)]">{t("Advancing Earthquake Resilience")}</h2>
                            <p className="body-02 text-[var(--text-primary)]">{t("Advancing Earthquake Resilience description")}</p>
                        </div>
                    </li>
                    <li className="flex flex-col sm:flex-row gap-[var(--spacing-05)] sm:gap-[var(--spacing-08)]">
                        <TriangleWitCircles className="shrink-0" />
                        <div className="space-y-[var(--spacing-02)] sm:space-y-[var(--spacing-03)]">
                            <h2 className="heading-01 text-[var(--text-primary)]">{t("Empowering Communities")}</h2>
                            <p className="body-02 text-[var(--text-primary)]">{t("Empowering Communities description")}</p>
                        </div>
                    </li>
                    <li className="flex flex-col sm:flex-row gap-[var(--spacing-05)] sm:gap-[var(--spacing-08)]">
                        <div className="w-16 hidden sm:block"></div>
                        <Link href="/about" className="body-01 text-[var(--link-primary)] flex items-center gap-[var(--spacing-03)] hover:text-[var(--link-primary-hover)]">Learn more about us <ArrowRight className="w-5 h-5"/></Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}