import { Jost, Cormorant_Garamond } from 'next/font/google';
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-serif',
});

export const metadata = {
  title: "Laughter Love Live Retreats",
  description: "Meditation & Tantra Retreats",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
