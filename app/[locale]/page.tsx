import { ArticlesSection } from "@/components/Home/ArticlesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { Mission } from "@/components/Home/Mission";
import { PublicationsSection } from "@/components/Home/PublicationsSection";
import { WorkshopSection } from "@/components/Home/WorkshopSection";

export default function Page() {

    return (
        <main className="min-h-dvh w-full">
            <HeroSection />
            <Mission />
            <ArticlesSection />
            <WorkshopSection />
            <PublicationsSection />
        </main>
    );
}