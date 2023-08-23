import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'fr','zh'],

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'fr'
});

export const config = {
    // Skip all paths that should not be internationalized. This example skips the
    // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
    matcher: ['/((?!api|admin|_next|.*\\..*).*)']
};