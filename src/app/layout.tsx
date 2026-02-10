import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import FirstVisitPopup from "./FirstVisitPopup";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Zuzulua — Restaurant • Bar • Tapas • Pizzas | Pays Basque",
  description:
    "Restaurant typique à Saint-Pée-sur-Nivelle au Pays Basque. Grillades au feu de bois, pizzas artisanales, cuisine régionale et terrasse d'été sur la Nivelle.",
  keywords: [
    "restaurant",
    "Pays Basque",
    "Saint-Pée-sur-Nivelle",
    "grillades",
    "pizzas",
    "tapas",
    "côte de bœuf",
    "Zuzulua",
  ],
  openGraph: {
    title: "Zuzulua — Restaurant • Bar • Tapas • Pizzas",
    description:
      "Grillades au feu de bois, pizzas artisanales et cuisine régionale au cœur du Pays Basque.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <FirstVisitPopup />
      </body>
    </html>
  );
}
