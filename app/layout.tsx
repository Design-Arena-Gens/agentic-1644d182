import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'برنامه تعاملی',
  description: 'یک برنامه زیبا و تعاملی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
