export default async function Page({
    params,
}: {
    params: Promise<{
        lang: string;
    }>;
}) {
    const { lang } = await params;
    return (
        <div className="min-h-dvh w-full">
        </div>
    );
}