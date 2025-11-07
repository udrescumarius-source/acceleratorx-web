"use client";
import {useTranslations} from 'next-intl';

export default function ResearchPage() {
  const t = useTranslations();
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-semibold">
        {t('nav.research')}
      </h1>
      <p className="text-gray-700">Continut placeholder pentru research. Editabil ulterior in 3 limbi.</p>
    </section>
  );
}