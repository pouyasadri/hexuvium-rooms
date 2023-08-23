import '../../../globals.css'
import {Inter} from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from "next/navigation";
import {client} from "../../../../../sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'
import urlFor from "@/app/urlFor";
//import config from "../../../../../sanity.config";

const inter = Inter({subsets: ['latin']})

//const builder = imageUrlBuilder(config)
export function generateStaticParams() {
    return [{locale: 'en'}, {locale: 'fr'}, {locale: 'zh'}];
}

export const metadata = {
    title: 'hexuvium',
    description: 'hexuvium',
}

export default async function RootLayout({children, params: {locale, reservationNumber}}) {
    let language;
    try {
        language = (await import(`../../../../languages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
    const backgroundImageUrl = await fetchBackgroundImageUrl(reservationNumber);
    return (
        <html lang={locale}>
        <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={language}>
            <main className="bg-cover h-screen " style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
                {children}
            </main>
        </NextIntlClientProvider>
        </body>
        </html>
    )
}

async function fetchBackgroundImageUrl(reservationNumber) {
    // Perform the API call and return the background image URL
    // For example:
    console.log(reservationNumber);
    const apartmentData = await client.fetch(
        `*[_type == "apartment" && reservationNumber == $reservationNumber][0]{
          city->
        }`,
        {
            reservationNumber: reservationNumber,
        }
    );
    return urlFor(apartmentData.city.cityImage).url();
}
