import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const themeScript = `(function(){try{var t=localStorage.getItem("mobilityforge-theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark")}catch(e){}})();`;

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Reusable mobile engineering playbook: secure cross-platform workflow, architecture, security, testing, CI/CD, and release for any team or company.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "MobilityForge | Mobile Engineering Playbook",
    template: "%s | MobilityForge",
  },
  description: siteDescription,
  keywords: [
    "mobile engineering",
    "React Native",
    "playbook",
    "apprenticeship",
    "secure development",
    "cross-platform",
    "documentation",
  ],
  authors: [{ name: "MobilityForge" }],
  openGraph: {
    title: "MobilityForge",
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: "MobilityForge",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
