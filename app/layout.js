import { Jost, Cormorant_Garamond } from 'next/font/google';
import Script from "next/script";
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
         <Script id="gtm" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WL7TSQVD');
  `}
</Script>

<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-WL7TSQVD"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  />
</noscript>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
