import ArrowOutward from "@/components/icons/ArrowOutward";
import Shield from "@/components/icons/Shield";
import Strength from "@/components/icons/Strength";
import Target from "@/components/icons/Target";
import TriangleWitCircles from "@/components/icons/TriangleWithCircles";
import { Link } from "@/i18n/navigation";

export default function Page() {
    return (
        <div>
            <div className="bg-[var(--layer-01)]">
                <nav aria-label="Breadcrumb">
                    <ol className="hidden lg:flex items-center gap-2 p-[var(--spacing-07)] pb-[var(--spacing-09)]">
                        <li><Link href="/" className="text-[var(--link-primary)]">Home</Link></li>
                        <li>/</li>
                        <li><Link href="/about" aria-current="page">About</Link></li>
                    </ol>
                </nav>
                <h1 className="fluid-display-01 text-[var(--text-primary)] px-[var(--spacing-07)] pb-[var(--spacing-10)] pt-[var(--spacing-11)] lg:pt-[var(--spacing-08)]">About MEEC</h1>
            </div>
            <div className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pt-[var(--spacing-10)] pb-[var(--spacing-11)] md:py-[var(--spacing-11)] lg:py-[var(--spacing-12)] space-y-[var(--spacing-09)] md:space-y-[var(--spacing-10)] lg:space-y-[var(--spacing-11)]">
                <h2 id="content" className="text-[var(--text-primary)] our-history text-balance lg:max-w-[65vw]">We are a professional network dedicated to advancing earthquake resilience across Myanmar. </h2>
                <div className="flex justify-between group">
                    <div className="lg:flex-1 hidden lg:block relative">
                        <img src="/sharing-knowledge.webp" style={{
                            width: 368,
                            height: 207
                        }} className="aspect-video absolute bottom-0 start-0 scale-50 opacity-0 group-has-[.show-sharing-knowledge:hover]:opacity-100 group-has-[.show-sharing-knowledge:hover]:scale-100 transition-all duration-200 ease-[cubic-bezier(0.47,0,0.23,1.38)" />
                        <img src="/construction-practice.webp" style={{
                            width: 368,
                            height: 207
                        }} className="aspect-video absolute bottom-0 start-0 scale-50 opacity-0 group-has-[.show-construction-practice:hover]:opacity-100 group-has-[.show-construction-practice:hover]:scale-100 transition-all duration-200 ease-[cubic-bezier(0.47,0,0.23,1.38)" />
                    </div>
                    <p className="lg:flex-1 text-[var(--text-primary)] body-02-sm-fluid-heading-03">
                        Established by civil engineers and seismic experts, MEEC serves as a hub for <Link target="_blank" href="https://google.com" className="text-[var(--link-primary)] cursor-pointer show-sharing-knowledge">sharing knowledge</Link>, promoting safe <Link target="_blank" href="https://youtube.com" className="text-[var(--link-primary)] cursor-pointer show-construction-practice">construction practices</Link>, and supporting disaster risk reduction efforts.
                        <br />
                        <br />
                        We work to make technical information on seismic safety accessible and actionable for professionals, communities, and decision-makers. Through collaboration, research, and public outreach, we aim to strengthen local capacity and promote a culture of preparedness.
                        <br />
                        <br />
                        By transforming earthquake engineering knowledge into practical solutions, MEEC strives to protect lives, safeguard infrastructure, and contribute to a safer, more resilient future for Myanmar.
                    </p>
                </div>
            </div>
            <div className="px-[var(--spacing-05)] sm:px-[var(--spacing-07)] pb-[var(--spacing-11)] pt-[var(--spacing-08)] lg:pt-[var(--spacing-11)] space-y-[var(--spacing-10)]">
                <h2 className="fluid-heading-04-sm-fluid-display-01">
                    Our commitment to the society
                </h2>
                <ul className="flex flex-col lg:flex-row gap-[var(--spacing-10)] sm:gap-[var(--spacing-08)] lg:gap-[var(--spacing-07)]">
                    <li className="flex flex-col sm:max-lg:flex-row gap-[var(--spacing-06)]">
                        <Shield className="min-w-16 min-h-16" />
                        <div className="space-y-[var(--spacing-03)]">
                            <h3 className="text-[var(--text-primary)] heading-01-sm-02">Advancing Earthquake Resilience</h3>
                            <p className="text-[var(--text-primary)] body-01-sm-02">MEEC is dedicated to enhancing Myanmar’s resilience by promoting seismic safety and supporting disaster risk reduction initiatives.</p>
                        </div>
                    </li>
                    <li className="flex flex-col sm:max-lg:flex-row gap-[var(--spacing-06)]">
                        <TriangleWitCircles className="min-w-16 min-h-16" />
                        <div className="space-y-[var(--spacing-03)]">
                            <h3 className="text-[var(--text-primary)] heading-01-sm-02">Empowering Communities</h3>
                            <p className="text-[var(--text-primary)] body-01-sm-02">We provide accessible technical knowledge and training to professionals and local communities, fostering a culture of preparedness.</p>
                        </div>
                    </li>
                    <li className="flex flex-col sm:max-lg:flex-row gap-[var(--spacing-06)]">
                        <Target className="min-w-16 min-h-16" />
                        <div className="space-y-[var(--spacing-03)]">
                            <h3 className="text-[var(--text-primary)] heading-01-sm-02">Building a Safer Future</h3>
                            <p className="text-[var(--text-primary)] body-01-sm-02">Through innovative engineering solutions, MEEC strives to protect lives and create a more resilient Myanmar for generations to come.</p>
                        </div>
                    </li>
                    <li className="flex flex-col sm:max-lg:flex-row gap-[var(--spacing-06)]">
                        <Strength className="min-w-16 min-h-16" />
                        <div className="space-y-[var(--spacing-03)]">
                            <h3 className="text-[var(--text-primary)] heading-01-sm-02">Strengthening Local Infrastructure</h3>
                            <p className="text-[var(--text-primary)] body-01-sm-02">MEEC works to improve the durability of local infrastructure, ensuring buildings and facilities can withstand seismic events effectively.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="px-[var(--spacing-05)] border-t lg:border-t-0 sm:px-[var(--spacing-07)] pt-[var(--spacing-10)] pb-[var(--spacing-11)] lg:pt-[var(--spacing-08)] lg:pb-[var(--spacing-13)]">
                <div className="relative lg:border-t lg:pt-[var(--spacing-09)] gap-[var(--spacing-08)] flex flex-col lg:flex-row">
                    <h2 className="lg:flex-1 our-history text-[var(--text-primary)]">Our history</h2>
                    <img className="lg:absolute bottom-[-24px] start-0 w-full aspect-video sm:max-w-[367px] lg:max-w-[427px]" src="/our-history.webp" alt="an image in which people are gathering on a hill with the backgound of a sunset." />
                    <p className="lg:flex-1 text-[var(--text-primary)] our-history-description">
                        Myanmar Earthquake Engineering Community (MEEC) began in 2025 with a simple but powerful idea: to bring together engineers, experts, and changemakers who care deeply about building a safer Myanmar.
                        <br />
                        <br />
                        Sparked by the urgent need for better earthquake awareness and safer structures, MEEC was formed by professionals who saw the importance of turning knowledge into action.
                        <br />
                        <br />
                        What started as a small initiative has grown into a trusted platform for seismic education, collaboration, and practical solutions. Today, MEEC continues to inspire action, connect communities, and lead efforts to reduce earthquake risks across the country.
                    </p>
                </div>
            </div>
            <div className="w-full px-[var(--spacing-05)] sm:px-[var(--spacing-07)] lg:px-[var(--spacing-11)] py-[var(--spacing-13)] bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),url('/about-bg.webp')] bg-cover bg-no-repeat bg-center">
                <div className="relative flex flex-col lg:flex-row gap-[var(--spacing-07)] lg:justify-between bg-[var(--layer-01)] px-[var(--spacing-05)] sm:px-[var(--spacing-06)] pt-[var(--spacing-06)] pb-[var(--spacing-13)]">
                    <h2 className="flex-1 fluid-heading-03-sm-04 text-[var(--text-primary)]">Collaborate with us</h2>
                    <p className="flex-1 text-[var(--text-primary)] body-01-sm-02">
                        MEEC is a professional network dedicated to advancing earthquake resilience across Myanmar.
                        <br />
                        <br />
                        Through collaboration, research, and public outreach, we aim to strengthen local capacity and promote a culture of preparedness.
                    </p>
                    <Link className="absolute bottom-0 end-0 w-full sm:w-fit h-fit font-sans text-base tracking-[0] leading-[22px] flex items-center gap-8 px-4 pb-[15px] pt-[29px] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] hover:text-[--text-inverse] text-[var(--text-on-color)]" href="https://www.facebook.com/share/g/1DhF1ikWaC/?mibextid=wwXIfr" target="_blank">
                        Join MEEC facebook group
                        <ArrowOutward className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    )
}