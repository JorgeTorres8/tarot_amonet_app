// RootLayout.js
import TarotProvider from "@/context/provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Button from "@/components/Button";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El Tarot de Amonet",
  description: "El Tarot de Amonet app",
  metadataBase: 'https://eltarotdeamonet.com',
  openGraph: {
    siteName: 'El Tarot de Amonet',
    title: 'Bienvenidos a la aplicación web del Tarot de Amonet',
    description: 'Conoce mis lecturas, dinámica de trabajo y mis objetivos hablando de tu futuro y prosperidad.',
    url: 'https://eltarotdeamonet.com',
    type: 'website',
    images: [
      {
        url: '/img/readme/preview.png',
        width: 1200,
        height: 630,
        alt: 'Previsualización de El Tarot de Amonet'
      }
    ],
    icons: {
      icon: [
        { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
        { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' }
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180' }
      ],
      other: [
        { rel: 'manifest', url: '/site.webmanifest' }
      ]
    }
  }
};

export const viewport = {
  themeColor: '#ffffff',
};

export default async function RootLayout({ children, params: { locale }  }) {
  
  const messages = await getMessages()
  
    return (
    <>
      <html lang={locale}>
        <head>
          <title>El Tarot de Amonet</title>
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <TarotProvider>
            {children}
          </TarotProvider>
        </NextIntlClientProvider>
        <Button/>
        <ToastContainer/>
        </body>
      </html>
    </>
  );
}