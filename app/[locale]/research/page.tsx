"use client";
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function Page() {
  const t = useTranslations('research');
  return (
    <div className="space-y-6">
      <div className="relative aspect-[16/6] w-full overflow-hidden rounded-xl bg-gray-100">
        <Image
          src="https://images.unsplash.com/photo-1559757175-08c8f1a2f69a?q=80&w=1600&auto=format&fit=crop"
          alt="Research and experimentation"
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
      </section>
    </div>
  );
}