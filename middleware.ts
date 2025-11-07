import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ro', 'en', 'fr'],
  defaultLocale: 'ro'
});

export const config = {
  matcher: ['/', '/(ro|en|fr)/:path*']
};