import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

export const formatImageUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith("http")) {
    return url;
  }
  return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
}