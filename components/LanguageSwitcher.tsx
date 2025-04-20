'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLocale = (newLocale: string) => {
    // Replace the current locale in the pathname (e.g., /en/about -> /fr/about)
    const newPath = pathname.replace(/^\/[^\/]+/, `/${newLocale}`);
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div>
      <button onClick={() => changeLocale('en')} disabled={isPending}>
        English
      </button>
      <button onClick={() => changeLocale('mm')} disabled={isPending}>
        Myanmar
      </button>
    </div>
  );
}