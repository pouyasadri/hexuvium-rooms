import '../globals.css'
import {Inter} from 'next/font/google'
import {notFound} from "next/navigation";
import {NextIntlClientProvider} from "next-intl";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Hexuvium',
    description: 'Hexuvium',
}

export default async function RootLayout({children, params: {locale}}) {
    let language;
    try {
        language = (await import(`../../languages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
    return (
        <html lang={locale}>
        <NextIntlClientProvider locale={locale} messages={language}>
        <body className={inter.className}>{children}</body>
        </NextIntlClientProvider>
        </html>
    )
}
