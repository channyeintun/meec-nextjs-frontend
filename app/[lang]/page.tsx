import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default async function Page({
    params,
}: {
    params: Promise<{
        lang: string;
    }>;
}) {
    const { lang } = await params;
    return (
        <div className="min-h-dvh">
            <h1 className="text-3xl font-bold underline">Hello world! {lang}</h1>
            <div className="flex items-center justify-end">
            <LanguageSwitcher />
            </div>
        </div>
    );
}