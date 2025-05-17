import ArrowOutward from "@/components/icons/ArrowOutward";
import { Link } from "@/i18n/navigation";

export default function Page() {
    return (
        <div>
            <div className="bg-[var(--layer-01)]">
                <div className="hidden lg:flex items-center gap-2 p-[var(--spacing-07)] pb-[var(--spacing-09)]">
                    <Link href="/" className="text-[var(--link-primary)]">Home</Link>
                    <span>/</span>
                    <Link href="/news">About</Link>
                </div>
                <h1 className="fluid-display-01 text-[var(--text-primary)] px-[var(--spacing-07)] pb-[var(--spacing-10)] pt-[var(--spacing-11)] lg:pt-[var(--spacing-08)]">About MEEC</h1>
            </div>
            <div className="w-full px-[var(--spacing-05)] sm:px-[var(--spacing-07)] lg:px-[var(--spacing-11)] py-[var(--spacing-13)] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),url('/about-bg.webp')] bg-cover bg-no-repeat bg-center">
                <div className="relative flex flex-col lg:flex-row gap-[var(--spacing-07)] lg:justify-between bg-[var(--layer-01)] px-[var(--spacing-05)] sm:px-[var(--spacing-06)] pt-[var(--spacing-06)] pb-[var(--spacing-13)]">
                    <h1 className="flex-1 fluid-heading-03-sm-04 text-[var(--text-primary)]">Collaborate with us</h1>
                    <p className="flex-1 text-[var(--text-primary)] body-01-sm-02">
                        MEEC is a professional network dedicated to advancing earthquake resilience across Myanmar.
                        <br />
                        <br />
                        Through collaboration, research, and public outreach, we aim to strengthen local capacity and promote a culture of preparedness.
                    </p>
                    <Link className="absolute bottom-0 end-0 w-full sm:w-fit h-fit font-sans text-base tracking-[0] leading-[22px] flex items-center gap-8 px-4 pb-[15px] pt-[29px] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] hover:text-[--text-inverse] text-[var(--text-on-color)]" href="https://www.facebook.com" target="_blank">
                        Join MEEC facebook group
                        <ArrowOutward className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    )
}