import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Varsha Chaubey",
  description: "Senior Frontend Engineer Portfolio",
  icons: {
    icon: "/assets/Img/logo.jpg",
    shortcut: "/assets/Img/logo.jpg",
    apple: "/assets/Img/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}