import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Transition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable}`}>
        <Header />
        <Transition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
