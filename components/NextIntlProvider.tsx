import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const dynamic = 'force-dynamic';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  console.log('Server: Rendering Layout with lang:', params.lang); // Debug log
  const messages = await getMessages({ locale: params.lang });

  return (
    <html lang={params.lang}>
      <body>
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}