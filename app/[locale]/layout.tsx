import '../globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import Link from 'next/link';
import {ReactNode} from 'react';

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-gray-900">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <header className="border-b">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <nav className="flex gap-4 text-sm font-medium">
                <Link href={`/${locale}`}>Acasă</Link>
                <Link href={`/${locale}/civil`}>Civil</Link>
                <Link href={`/${locale}/defense`}>Apărare</Link>
                <Link href={`/${locale}/applications`}>Aplicații</Link>
                <Link href={`/${locale}/research`}>Cercetare</Link>
                <Link href={`/${locale}/contact`}>Contact</Link>
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