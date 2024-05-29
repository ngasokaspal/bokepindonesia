import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `Bokep Indonesia - Video Bokep Indo Viral Terbaru`,
    description: `Bokep Indonesia Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pelajar.`,
    metadataBase: new URL("https://bokepindonesia.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `Bokep Indonesia - Video Bokep Indo Jepang Barat Viral Terbaru`,
        description: `Bokep Indonesia Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pelajar.`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'rcg8L-Wz76mBxzQ37nn0-QkCyguScNJkj2ClkYArUZI',
        yandex: '99339691c3dd2990',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `Bokep Indonesia`,
        "description": `Bokep Indonesia Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pelajar.`,
        "logo": "https://bokepindonesia.pages.dev/favicon.ico",
        "url": "https://bokepindonesia.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bokepindonesia.pages.dev"
            },
            "foundingDate":"2024-05-29"
        }
        const jsonLd1 = {
            "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Bokep Indonesia`,
        "url": "https://bokepindonesia.pages.dev",
        "description": `Bokep Indonesia Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pelajar.`,
        "image": "https://bokepindonesia.pages.dev/favicon.ico",
        "potentialAction":{
            "@type":"ReadAction",
            "target":"https://bokepindonesia.pages.dev"}
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `Bokep Indonesia`,
        "url": "https://bokepindonesia.pages.dev",
        "description": `Bokep Indonesia Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pelajar.`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://bokepindonesia.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
<Script src="https://js.juicyads.com/jp.php?c=947403z2v256s2x2w2e4z2e4&u=http%3A%2F%2Fwww.juicyads.rocks"/>
        </html>
    );
}
