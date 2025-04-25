import { ArticlesSection } from "@/components/Home/ArticlesSection";
import { HeroSection } from "@/components/Home/HeroSection";
import { Mission } from "@/components/Home/Mission";

export default function Page() {

    return (
        <main className="min-h-dvh w-full">
            <HeroSection />
            <Mission />
            <ArticlesSection />
        </main>
    );
}