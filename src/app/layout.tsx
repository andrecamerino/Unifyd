import "./globals.css";
import { Poppins } from 'next/font/google'
import BottomBar from "@/Components/BottomBar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Your App',
  description: 'Your app description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div>Header Div</div>
        {children}
        <BottomBar/>
        </body>
    </html>
  )
}