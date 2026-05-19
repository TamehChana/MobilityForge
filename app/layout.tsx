import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const themeScript = `(function(){try{var t=localStorage.getItem("mobilityforge-theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark")}catch(e){}})();`;

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
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
      <body
        className={`${roboto.variable} ${robotoMono.variable} font-sans antialiased text-ink`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
