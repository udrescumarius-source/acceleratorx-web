"use client";
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('hero');
  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
      <p className="text-gray-600">{t('subtitle')}</p>
    </section>
  );
}