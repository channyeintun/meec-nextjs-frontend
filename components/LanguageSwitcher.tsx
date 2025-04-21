'use client';

import { useRouter, usePathname, useParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import ChevronUp from './icons/ChevronUp';
import ChevronDown from './icons/ChevronDown';

export const LanguageSwitcher = () => {
  const { lang } = useParams<{ lang: string }>();

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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(lang);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'mm', name: 'Myanmar (Burmese)' },
  ];

  const handleSelect = (code: string) => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block font-sans">
      {/* Button to toggle dropdown */}
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="border-b border-[var(--border-subtle-00)] flex gap-2 items-center justify-between w-[70px] px-4 py-[15px] bg-[var(--layer-01)] hover:bg-[var(--layer-hover-01)] shadow-[0_2px_6px_0px_rgba(0, 0, 0, 0.30)] focus:outline-none"
      >
        <span className="body-01 text-text-primary uppercase">{selectedLanguage}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute end-0 top-full bg-[var(--layer-01)] hover:bg-[var(--layer-hover-01)] border-none shadow-[0_2px_6px_0px_rgba(0, 0, 0, 0.30)] z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              disabled={isPending}
              onClick={() => {
                handleSelect(lang.code);
                changeLocale(lang.code);
              }}
              className="w-full text-left px-4 py-3 text-[14px] text-[var(--text-primary)] bg-[var(--layer-01)] focus:outline-none whitespace-nowrap"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};