import { Playfair_Display, Orbitron, Inter_Tight } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});
