'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { useState, useTransition } from 'react';

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
        className="border-b border-border-subtle-00 flex items-center justify-between w-[70px] px-4 py-2 bg-layer-01 hover:bg-layer-hover-01 border-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] focus:outline-none"
      >
        <span className="body-01 text-text-primary uppercase">{selectedLanguage}</span>
        {isOpen ? <ChevronUp size={16} className='text-icon-primary' /> : <ChevronDown size={16} className='text-icon-primary' />}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute end-0 top-full w-[180px] bg-layer-01 hover:bg-layer-hover-01 border-none shadow-[0_4px_16px_rgba(0,0,0,0.1)] z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              disabled={isPending}
              onClick={() => {
                handleSelect(lang.code);
                changeLocale(lang.code);
              }}
              className="w-full text-left px-4 py-2 text-[14px] text-text-primary bg-layer-01 focus:outline-none"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};