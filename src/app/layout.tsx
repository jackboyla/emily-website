// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

// (Optional) If you want a Google Font
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emily Boylan | Music Producer',
  description: 'Emily Boylan music portfolio showcasing audio tracks and videos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* If you imported a custom font above, you can do:
          <body className={inter.className}>
         Otherwise just do:
      */}
      <body>
        <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer
          style={{
            marginTop: '2rem',
            padding: '1rem',
            borderTop: '1px solid #ddd',
            textAlign: 'center',
          }}
        >
          <p>&copy; 2025 Emily Boylan</p>
        </footer>
      </body>
    </html>
  )
}
