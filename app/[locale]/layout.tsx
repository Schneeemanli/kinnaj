import './globals.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React, {ReactNode} from "react";
import {NextIntlClientProvider, useLocale, useMessages} from 'next-intl';
import {notFound} from 'next/navigation';

import Footer from "@/app/[locale]/components/footer";
import {Providers} from "@/app/[locale]/components/provider";

const inter = Inter({subsets: ['latin']})
const locales = ['en', 'de', 'fr', 'es'];
export const metadata: Metadata = {
    title: 'Kinnaj Films',
    description: 'Smart Films for Smart People',
}

export default function RootLayout({children, params}: { children: ReactNode, params: any }) {
    const locale = useLocale();
    const messages = useMessages();
    const isValidLocale = locales.some((cur) => cur === locale);
    if (!isValidLocale) notFound();
    return (
        <html lang={locale} suppressHydrationWarning={true}>
        <body className={inter.className}>
        <main className="flex flex-col min-h-screen">
            <NextIntlClientProvider locale={locale} messages={messages}>
                <Providers>
                    {children}
                </Providers>
            </NextIntlClientProvider>
            <Footer/>
        </main>
        </body>
        </html>
    )
}
