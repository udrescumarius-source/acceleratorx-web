"use client";
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">{t('hero.title')}</h1>
      <p className="text-gray-600">{t('hero.subtitle')}</p>
    </section>
  );
}