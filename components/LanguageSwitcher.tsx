'use client';

import { useState, useTransition } from 'react';
import ChevronUp from './icons/ChevronUp';
import ChevronDown from './icons/ChevronDown';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useDisclosure } from '@mantine/hooks';

export const LanguageSwitcher = () => {

  const lang = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    });
  };
  const [isOpen, handlers] = useDisclosure();
  const [selectedLanguage, setSelectedLanguage] = useState(lang);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'mm', name: 'Myanmar (Burmese)' },
  ];

  const handleSelect = (code: string) => {
    setSelectedLanguage(code);
    handlers.close();
  };

  return (
    <div className="self-stretch relative font-sans">
      {/* Button to toggle dropdown */}
      <button
        onClick={handlers.toggle}
        className={cn(
          "relative z-10 h-full flex gap-2 items-center justify-between w-[70px] p-4 hover:bg-[var(--layer-hover-01)] focus:outline-none",
          {
            "bg-[var(--layer-01)] shadow-[0px_4px_8px_0_rgba(0,0,0,0.2)]": isOpen,
          }
        )}
      >
        <span className="body-01 text-[var(--text-primary)] uppercase">{selectedLanguage}</span>
        <span className={cn(
          "w-4 h-4 duration-300",
          { "rotate-180": isOpen }
        )}>
          <ChevronDown />
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="border-t border-[var(--border-subtle-00)] absolute end-0 top-full min-w-[168px] bg-[var(--layer-01)] hover:bg-[var(--layer-hover-01)] shadow-[0px_4px_8px_0_rgba(0,0,0,0.2)] z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              disabled={isPending}
              onClick={() => {
                handleSelect(lang.code);
                changeLocale(lang.code);
              }}
              className="w-full text-left px-4 py-3 text-[14px] text-[var(--text-primary)] bg-[var(--layer-01)] hover:bg-[var(--layer-hover-01)] focus:outline-none whitespace-nowrap"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};