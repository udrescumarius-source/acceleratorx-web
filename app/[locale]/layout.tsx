import '../globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale, getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {ReactNode} from 'react';
import {locales} from '../../i18n';

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations('nav');

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-gray-900">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <header className="border-b">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <nav className="flex gap-4 text-sm font-medium">
                <Link href={`/${locale}`}>{t('home')}</Link>
                <Link href={`/${locale}/civil`}>{t('civil')}</Link>
                <Link href={`/${locale}/defense`}>{t('defense')}</Link>
                <Link href={`/${locale}/applications`}>{t('applications')}</Link>
                <Link href={`/${locale}/research`}>{t('research')}</Link>
                <Link href={`/${locale}/contact`}>{t('contact')}</Link>
              </nav>
              <div className="flex items-center gap-2 text-sm">
                <Link href="/ro">RO</Link>
                <span>/</span>
                <Link href="/en">EN</Link>
                <span>/</span>
                <Link href="/fr">FR</Link>
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
