import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'King Trafikskola - Körkort och Handledarutbildning i Stockholm',
  description: 'Professionell trafikskola i Stockholm. Vi erbjuder körkortsteori, körkortstester och handledarutbildning. Kontakta oss för att komma igång med ditt körkort!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className="antialiased">{children}</body>
    </html>
  )
}