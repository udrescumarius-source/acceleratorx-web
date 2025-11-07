"use client";
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function DefensePage() {
  const t = useTranslations('defense');
  const bullets = t.raw('bullets') as string[];
  return (
    <div className="space-y-6">
      <div className="relative aspect-[16/6] w-full overflow-hidden rounded-xl bg-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?q=80&w=1600&auto=format&fit=crop"
          alt="Defense and CBRN readiness"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-2xl font-semibold">{t('title')}</h1>
        <p className="text-gray-700">{t('intro')}</p>
        <p className="text-gray-700">{t('body')}</p>
        <ul className="list-disc pl-6 space-y-1">
          {bullets.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>
      </section>
    </div>
  );
}