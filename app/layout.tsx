import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lexend_Deca } from 'next/font/google'
import Nav from './components/Nav'

const lexendDeca = Lexend_Deca({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TudoEmUm',
  description: 'Aqui você encontra sobre quase tudo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexendDeca.className}>
        <div className='bg-zinc-950 h-full min-h-screen w-screen'>
        <Nav />
        {children}
        </div>
      </body>
    </html>
  )
}
