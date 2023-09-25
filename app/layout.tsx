"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })

/*export const metadata: Metadata = {
  title: 'Kinnaj Films',
  description: 'Smart Films for Smart People',
}*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <React.StrictMode>
          <NextUIProvider>
              {children}
          </NextUIProvider>
      </React.StrictMode>
      </body>
    </html>
  )
}
