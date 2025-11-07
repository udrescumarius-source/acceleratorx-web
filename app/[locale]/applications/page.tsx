"use client";
import {useTranslations} from 'next-intl';

export default function ApplicationsPage() {
  const t = useTranslations();
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">
        {t('nav.applications')}
      </h1>
      <p className="text-gray-700">Continut placeholder pentru applications. Editabil ulterior in 3 limbi.</p>
    </section>
  );
}