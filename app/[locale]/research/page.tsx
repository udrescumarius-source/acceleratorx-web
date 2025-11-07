"use client";
import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations();
  return (
    <section className="space-y-4 max-w-3xl">
      <h1 className="text-2xl font-semibold">{t('')}</h1>
      <p className="text-gray-700">{t('')}</p>
    </section>
  );
}