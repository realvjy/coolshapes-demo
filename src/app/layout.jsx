import { Inter } from "next/font/google";
import "../styles/globals.scss";
import StyledComponentsRegistry from "@/styles/styled-registry";
import AnalyticsProvider from "@/components/analytics";
import seoData from "@/components/next-seo.config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(seoData.openGraph.url),
  title: {
    default: seoData.openGraph.title,
    template: " %s",
  },
  description: seoData.openGraph.description,
  keywords: seoData.openGraph.keywords,
  openGraph: {
    type: "website",
    description: seoData.openGraph.description,
    url: seoData.openGraph.url,
    title: seoData.openGraph.title,
    locale: "en_EN",
    siteName: "coolshap.es",
    images: [
      {
        width: 1200,
        height: 630,
        url: seoData.openGraph.images[0].url,
        alt: seoData.openGraph.title,
      },
    ],
  },
  twitter: {
    card: seoData.twitter.cardType,
    title: seoData.openGraph.title,
    description: seoData.openGraph.description,
    creator: seoData.twitter.handle,
    creatorId: seoData.twitter.id,
    site: "vjy.me",
    images: [seoData.openGraph.images[0].url],
  },
  robots: {
    nosnippet: false,
    notranslate: true,
    noimageindex: false,
    noarchive: false,
    notranslate: false,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <StyledComponentsRegistry>
          <AnalyticsProvider />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
