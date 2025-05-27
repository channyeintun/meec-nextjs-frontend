import ArrowOutward from "@/components/icons/ArrowOutward";
import Audio from "@/components/icons/Audio";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const HeroSection = () => {
    const locale = useLocale();
    const t = useTranslations("HomePage");
    return (
        <section className="px-4 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-[448px_1fr] gap-[var(--spacing-08)] sm:gap-8 lg:pb-[var(--spacing-08)] bg-[var(--background)] sm:min-h-[560px] lg:min-h-[672px]" style={{
            ["--background" as string]: "light-dark(#161616,#ffffff)",
            ["--text-primary" as string]: "light-dark(hsla(0, 0%, 96%, 1),hsla(0, 0%, 9%, 1))"
        }}>
            <div className="flex flex-col pt-[var(--spacing-07)] pb-[var(--spacing-07)] sm:pb-[var(--spacing-08)]">
                <p className={cn("whitespace-pre-wrap fluid-display-01 text-[var(--text-primary)]",{
                    "mm-display-01": locale === "mm",
                })}>
                    {t("Myanmar")} {t("Earthquake")} {t("Engineering")} {t("Community")}
                </p>
                <p className={cn("fluid-paragraph-01 text-[var(--text-primary)] mt-[var(--spacing-08)] sm:mt-auto", {
                    "mm-paragraph": locale === "mm"
                })}>{t("description")}</p>
                <Link style={{ ["--button-tertiary" as string]: "light-dark(hsla(0, 0%, 100%, 1),hsla(219, 99%, 53%, 1))" }} className="mt-[var(--spacing-07)] w-fit font-sans text-base tracking-[0] leading-[22px] flex items-center gap-8 px-4 py-[13px] border hover:border-[var(--button-tertiary-hover)] border-[var(--button-tertiary)] text-[var(--button-tertiary)] hover:bg-[var(--button-tertiary-hover)] hover:text-[--text-inverse]" href="https://www.facebook.com/share/g/1DhF1ikWaC/?mibextid=wwXIfr" target="_blank">
                    {t("Join our facebook group")}
                    <ArrowOutward fill="var(--button-tertiary)" />
                </Link>
            </div>
            <div className="grid place-items-center mb-[var(--spacing-08)] sm:mb-0">
                <Audio className="w-[256px] sm:w-[288px] lg:w-[512px] aspect-square" />
            </div>
        </section>
    )
}