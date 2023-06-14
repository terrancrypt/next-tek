import './globals.css'
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ToastBox from '@/components/Toast/Toast';
import { Providers } from '@/toolkit/Providers';

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: 'Next Tek',
  description: 'Best place to choose best tech products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <div className='h-screen flex flex-col relative'>
            <ToastBox />
            <Header />
            <div className='flex-grow'>
            {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
