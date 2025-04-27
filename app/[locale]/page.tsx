import { ArticlesSection } from "@/components/Home/ArticlesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { Mission } from "@/components/Home/Mission";
import { PublicationsSection } from "@/components/Home/PublicationsSection";
import { WorkshopSection } from "@/components/Home/WorkshopSection";
import { YoutubeSection } from "@/components/Home/YoutubeSection";

export async function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'mm' },
    ];
}

export default function Page() {

    return (
        <>
            <HeroSection />
            <Mission />
            <ArticlesSection />
            <WorkshopSection />
            <PublicationsSection />
            <YoutubeSection />
        </>
    );
}