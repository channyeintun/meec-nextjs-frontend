import { Link } from "@/i18n/navigation"
import ArrowRight from "../icons/ArrowRight"

export const PublicationsSection = () => {
    return (
        <section className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] py-[var(--spacing-10)]">
            <div className="grid lg:grid-cols-[290px_1fr] gap-[var(--spacing-07)]">
                <h1 className="heading-01 text-[var(--text-primary)]">Publications</h1>
                <div className="space-y-[var(--spacing-06)]">
                    <p className="text-[var(--text-primary)] fluid-heading-03">This core collection covers all technical areas of civil engineering. MEEC’s publications include books, peer-reviewed journals, conference proceedings, and magazines.</p>
                    <Link href="/about" className="body-01 text-[var(--link-primary)] flex items-center gap-[var(--spacing-03)] hover:text-[var(--link-primary-hover)]">Learn more about us <ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}