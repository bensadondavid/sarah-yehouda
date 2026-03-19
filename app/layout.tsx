import type { Metadata } from "next";
import { Alice, Lora, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Musique from "@/components/ui/Musique";

const alice = Alice({
  variable: "--font-alice",
  subsets: ["latin"],
  weight: "400"
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const franck = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-franck",
  display: "swap",
});

const slight = localFont({
      src: "./fonts/Slight.woff",
      weight: "400",
      style: "normal",
      variable: "--font-slight",
      display: "swap",
})

export const metadata: Metadata = {
  title: "Sarah & Yehouda",
  description: "Sarah & Yehouda's wedding",
  icons : {
    icon : '/logo-sarah-wts.png',
    },
  openGraph: {
    title: "Sarah & Yehouda",
    description: "Sarah & Yehouda's wedding",
    images: ["/fond-sarah-wts.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${lora.variable} ${alice.variable} ${slight.variable} ${franck.variable} antialiased`} >
      <body className="relative">
        <main>
          {children}
        </main>
        <Musique />
      </body>
    </html>
  );
}
