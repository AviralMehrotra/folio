import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Aviral Mehrotra | Full Stack Developer",
    template: "%s | Aviral Mehrotra",
  },
  description:
    "Passionate Full Stack Developer crafting innovative solutions with modern technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Aviral Mehrotra",
    "Web Development",
  ],
  authors: [{ name: "Aviral Mehrotra" }],
  openGraph: {
    title: "Aviral Mehrotra | Full Stack Developer",
    description:
      "Passionate Full Stack Developer crafting innovative solutions with modern technologies.",
    url: "https://aviralmehrotra.pages.dev",
    siteName: "Aviral Mehrotra Portfolio",
    images: [
      {
        url: "/assets/photo.png",
        width: 1200,
        height: 630,
        alt: "Aviral Mehrotra",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviral Mehrotra | Full Stack Developer",
    description:
      "Passionate Full Stack Developer crafting innovative solutions with modern technologies.",
    images: ["/assets/photo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable}`}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
