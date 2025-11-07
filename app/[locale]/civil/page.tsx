"use client";
import {useTranslations} from 'next-intl';

export default function CivilPage() {
  const t = useTranslations('civil');
  const nav = useTranslations('nav');
  const bullets = t.raw('bullets') as string[];
  return (
    <section className="space-y-4 max-w-3xl">
      <h1 className="text-2xl font-semibold">{t('title')}</h1>
      <p className="text-gray-700">{t('intro')}</p>
      <ul className="list-disc pl-6 space-y-1">
        {bullets.map((b, i) => (<li key={i}>{b}</li>))}
      </ul>
    </section>
  );
}