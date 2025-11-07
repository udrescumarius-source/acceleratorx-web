import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const locales = ['ro','en','fr'];
  const paths = ['', '/civil', '/defense', '/applications', '/research', '/contact'];
  const entries = [] as MetadataRoute.Sitemap;
  for (const loc of locales) {
    for (const p of paths) {
      entries.push({url: `${base}/${loc}${p}`});
    }
  }
  return entries;
}