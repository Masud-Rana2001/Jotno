import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});


export const metadata = {
  metadataBase: new URL("https://jotno.vercel.app"),

  title: {
    default: "Jotno | Trusted Baby Sitting & Elderly Care Services",
    template: "%s | Jotno",
  },

 description:
    "Care.IO is a trusted caregiving platform to book baby sitting, elderly care, and home care services easily, safely, and securely.",


  applicationName: "Jotno",

  keywords: [
    "baby sitting service",
    "elderly care service",
    "home care service",
    "trusted caregivers",
    "child care platform",
    "senior citizen care",
    "home nursing service",
    "family care services",
    "care services booking app",
  ],

  authors: [{ name: "Jotno Team" }],
  creator: "Jotno",
  publisher: "Jotno",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "https://i.ibb.co.com/bRRJr6kM/Screenshot-2025-12-22-233346.png",
    apple: "https://i.ibb.co.com/bRRJr6kM/Screenshot-2025-12-22-233346.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jotno.vercel.app",
    siteName: "Jotno",
    title: "Jotno | Trusted Baby Sitting & Elderly Care Service",
    description:
      "Book reliable baby sitters, elderly caregivers, and home care services with Care.IO. Safe, verified, and easy booking.",
    images: [
      {
        url: "https://i.ibb.co.com/ynbBbXFd/Screenshot-2025-12-22-232653.png",
        width: 1200,
        height: 630,
        alt: "Care.IO Caregiving Platform Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jotno | Trusted Care Services",
    description:
      "Reliable baby sitting and elderly care services at your home.",
    images: ["https://i.ibb.co.com/ynbBbXFd/Screenshot-2025-12-22-232653.png"],
  },

  category: "healthcare",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar></Navbar>
          </header>
          <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
            {children}
          </main>

          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
