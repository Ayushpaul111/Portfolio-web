import Navbar from "@/components/navbar";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LinksProvider } from "./context/LinksContext";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = generateSEOMetadata({
  title: `${DATA.name} - Full Stack Developer`,
  description: DATA.description,
  keywords: [
    'Ayush Paul',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Web Developer',
    'Portfolio',
    'JavaScript',
    'TailwindCSS',
    'Framer Motion',
    'Node.js',
    'MongoDB',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'Freelancer',
    'West Bengal',
    'India'
  ],
  type: 'profile',
  url: DATA.url,
  image: `${DATA.url}${DATA.avatarUrl}`,
});

// Add Google Search Console verification
if (metadata.verification) {
  metadata.verification.google = "cKdhBphu0GLeOH0kpFGSU0ZSj7xgiN_H6xspXKcQmL0";
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/Ayush.webp" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <StructuredData data={{
          type: 'profile',
          title: `${DATA.name} - Full Stack Developer`,
          description: DATA.description,
          url: DATA.url,
          image: `${DATA.url}${DATA.avatarUrl}`,
        }} />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8RWB3X1665"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8RWB3X1665');
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto pt-12 sm:pt-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <Navbar />
            <LinksProvider>
              <main className="mt-16 md:mt-8">{children}</main>
            </LinksProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
