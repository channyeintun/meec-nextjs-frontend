import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl"
import ArrowRight from "../icons/ArrowRight";

export const RegisterNowLink = () => {
    const t = useTranslations("HomePage");
    return (
        <Link className="sm:absolute sm:bottom-0 sm:end-0 grid heading-01 transition-all duration-50 ease-in bg-[var(--layer-01)] hover:bg-[var(--layer-hover-01)] text-[var(--text-primary)] h-[160px] sm:w-[320px] p-[var(--spacing-05)] group border border-[var(--border-subtle-00)]" href="/">
            <span>{t("Register now")}</span>
            <div className="w-8 h-8 mt-auto">
                <ArrowRight className="w-8 h-8 group-hover:translate-x-full transition-all duration-50 ease-in" />
            </div>
        </Link>);
}