import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'de', 'fr', 'es'],
    defaultLocale: 'de'
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};