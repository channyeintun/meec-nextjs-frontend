import Image from "next/image"
import { RegisterNowLink } from "./RegisterNow"

export const WorkshopSection = () => {
    return (
        <section role="region" aria-labelledby="workshop-ID" className="max-w-[96rem] mx-auto grid lg:grid-cols-2 sm:px-[var(--spacing-07)] py-[var(--spacing-10)]">
            <Image width={624} height={800} className="w-full sm:h-full object-cover max-lg:aspect-video" src="/workshop.webp" alt="A photo of Post-Earthquake Data Collection Workshop" />
            <div style={{
                ["--background" as string]: "light-dark(#161616,#ffffff)"
            }} className="flex flex-col">
                <div style={{
                    ["--text-primary" as string]: "light-dark(hsla(0, 0%, 96%, 1),hsla(0, 0%, 9%, 1))",
                }} className="flex-grow bg-[var(--background)] p-[var(--spacing-07)] max-sm:px-[var(--spacing-05)]">
                    <p className="body-01 text-[var(--text-primary)] mb-[var(--spacing-04)]">A workshop to discuss recent experiences and future needs</p>
                    <h2 id="workshop-ID" className="fluid-display-01 text-[var(--text-primary)] mb-[var(--spacing-08)]">Post-Earthquake Data Collection Workshop</h2>
                    <p className="body-02 text-[var(--text-primary)]">Due to recent earthquakes in many of the represented cities, the workshop provided a unique opportunity to review data collected locally, critically evaluate current data collection approaches, initiate collaborative international research efforts to maximize the knowledge gained from recent devastating events, and begin to develop international consensus on data collection protocols for future events.The workshop was designed to improve coordination among the many reconnaissance groups who would respond to a Sagaing, Myanmar(Burma) earthquake.</p>
                </div>
                <div className="relative w-full h-[160px] bg-[var(--background)]">
                    <RegisterNowLink />
                </div>
            </div>
        </section>
    )
}