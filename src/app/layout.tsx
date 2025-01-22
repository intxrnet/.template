import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "the intxrnet",
  description: "Free, Open-Source, Client-Side Web Tools",
  keywords:
    "web tools, open source, client-side, development tools, browser tools",
  authors: [{ name: "intxrnet" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.intxr.net",
    siteName: "the intxrnet",
    title: "the intxrnet",
    description: "Free, Open-Source, Client-Side Web Tools",
    images: [
      {
        url: "/image.png",
        width: 800,
        height: 800,
        alt: "the intxrnet - Free, Open-Source, Client-Side Web Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "the intxrnet",
    description: "Free, Open-Source, Client-Side Web Tools",
    images: ["/icon.png"],
    creator: "@intxrnet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: "https://www.intxr.net",
  },
  metadataBase: new URL("https://www.intxr.net"),
};

function Header() {
  return (
    <header className="fixed w-full text-center py-4">
      <h1 className="text-xl">
        <Link href="https://template.intxr.net" className="hover:underline">
          template
        </Link>
        .
        <Link href="https://www.intxr.net" className="hover:underline">
          intxr
        </Link>
        .
        <Link href="https://net.intxr.net" className="hover:underline">
          net
        </Link>
      </h1>
    </header>
  );
}

function Footer() {
  return (
    <footer className="fixed bottom-2 left-0 right-0 h-4 px-4 flex justify-between items-center text-gray-500 bg-background mb-2">
      <Link
        href="https://github.com/intxrnet"
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        contribute:github/intxrnet
      </Link>
      <Link
        href="https://its-ours.org"
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        its-ours pledge
      </Link>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlex.variable}>
      <body className="min-h-screen">
        <Header />
        <main className="pb-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
