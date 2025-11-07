export const locales = ['ro', 'en', 'fr'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'ro';