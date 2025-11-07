"use client";
import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const tHero = useTranslations('hero');
  const tNav = useTranslations('nav');
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_30%),radial-gradient(circle_at_80%_30%,white,transparent_25%),radial-gradient(circle_at_50%_80%,white,transparent_25%)]" />
        <div className="relative px-6 py-14 md:px-10 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{tHero('title')}</h1>
          <p className="text-white/90 max-w-2xl text-base md:text-lg mb-8">{tHero('subtitle')}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="./civil" className="inline-flex items-center rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow hover:bg-white/90">
              {tNav('civil')}
            </Link>
            <Link href="./defense" className="inline-flex items-center rounded-md bg-transparent ring-1 ring-white/60 px-4 py-2 text-sm font-semibold hover:bg-white/10">
              {tNav('defense')}
            </Link>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="./civil" className="group block rounded-xl border p-6 hover:shadow-md transition">
            <div className="mb-2 text-sm font-medium text-indigo-600">{tNav('civil')}</div>
            <div className="text-lg font-semibold mb-1">{tNav('civil')}</div>
            <p className="text-gray-600">{tHero('subtitle')}</p>
          </Link>
          <Link href="./defense" className="group block rounded-xl border p-6 hover:shadow-md transition">
            <div className="mb-2 text-sm font-medium text-blue-600">{tNav('defense')}</div>
            <div className="text-lg font-semibold mb-1">{tNav('defense')}</div>
            <p className="text-gray-600">{tHero('subtitle')}</p>
          </Link>
          <Link href="./applications" className="group block rounded-xl border p-6 hover:shadow-md transition">
            <div className="mb-2 text-sm font-medium text-emerald-600">{tNav('applications')}</div>
            <div className="text-lg font-semibold mb-1">{tNav('applications')}</div>
            <p className="text-gray-600">{tHero('subtitle')}</p>
          </Link>
          <Link href="./research" className="group block rounded-xl border p-6 hover:shadow-md transition">
            <div className="mb-2 text-sm font-medium text-rose-600">{tNav('research')}</div>
            <div className="text-lg font-semibold mb-1">{tNav('research')}</div>
            <p className="text-gray-600">{tHero('subtitle')}</p>
          </Link>
        </div>
      </section>
    </div>
  );
}