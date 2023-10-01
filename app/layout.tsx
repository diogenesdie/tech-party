import './globals.css'
import type { Metadata } from 'next'
import { Author } from 'next/dist/lib/metadata/types/metadata-types'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Party - TI Faccat',
  description: 'A Tech Party é um evento de tecnologia que acontece anualmente no Centro de Eventos da Faccat, em Taquara/RS.',
  authors: [{
    name: 'Diógenes Dietrich',
  }] as Author[],
  keywords: ['Tech Party', 'TI Faccat', 'Tecnologia', 'Faccat', 'Evento', 'Palestras', 'Workshops', 'Cursos', 'Informática'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
