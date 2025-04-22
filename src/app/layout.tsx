import "./globals.css";
import { Poppins } from 'next/font/google';
import TopBar from "@/Components/TopBar";
import BottomBar from "@/Components/BottomBar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Your App',
  description: 'Your app description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div className="fixed top-0 w-full z-50">
          <TopBar />
        </div>

        <main className="pt-16 pb-16">
          {children}
        </main>

        <div className="fixed bottom-0 w-full z-50">
          <BottomBar />
        </div>
      </body>
    </html>
  );
}