import '../../../../globals.css'
import {Inter} from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl';

const inter = Inter({subsets: ['latin']})

export function generateStaticParams() {
    return [{locale: 'en'}, {locale: 'fr'}, {locale: 'zh'}];
}

export const metadata = {
    title: 'hexuvium',
    description: 'hexuvium',
}

export default async function RootLayout({children, params: {locale}}) {
    let language;
    try {
        language = (await import(`../../../../../languages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
    return (
        <html lang={locale}>
        <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={language}>
            <main className="bg-[url('/paris-bg.jpg')] bg-cover h-screen ">
                {children}
            </main>
        </NextIntlClientProvider>
        </body>
        </html>
    )
}
