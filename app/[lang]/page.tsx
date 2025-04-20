import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function Page({
    params,
}: {
    params: Promise<{
        lang: string;
    }>;
}) {
    const { lang } = await params;
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello world! {lang}</h1>
            <LanguageSwitcher />
        </div>
    );
}