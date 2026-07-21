import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://r-gss.com"),
  title: "Rayaan Global Software Solutions Pvt Ltd. | RGSS IT Consulting",
  description: "RGSS is an enterprise IT consulting and digital transformation services partner. We turn operating friction into digital business momentum with custom SAP S/4 HANA, Cloud, and Infrastructure Solutions.",
  keywords: ["RGSS", "Rayaan Global Software Solutions", "IT Strategy", "SAP S/4 HANA", "System Integration", "Infrastructure Management", "Digital Transformation"],
  alternates: {
    canonical: "https://r-gss.com",
  },
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Rayaan Global Software Solutions Pvt Ltd. | RGSS",
    description: "Enterprise IT Consulting & Digital Operating Transformation Partner.",
    url: "https://r-gss.com",
    siteName: "RGSS Profile",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rayaan Global Software Solutions (RGSS) Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayaan Global Software Solutions Pvt Ltd. | RGSS",
    description: "Enterprise IT Consulting & Digital Operating Transformation Partner.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://r-gss.com/#organization",
      "name": "Rayaan Global Software Solutions Pvt Ltd.",
      "alternateName": "RGSS",
      "url": "https://r-gss.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://r-gss.com/#logo",
        "url": "https://r-gss.com/logo.png",
        "contentUrl": "https://r-gss.com/logo.png",
        "caption": "RGSS Logo"
      },
      "image": {
        "@id": "https://r-gss.com/#logo"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9818695636",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2502, T-14, Lotus Panache, Sector-110",
        "addressLocality": "Noida",
        "addressRegion": "UP",
        "postalCode": "201304",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/rayaan-global-software-solutions/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://r-gss.com/#website",
      "url": "https://r-gss.com",
      "name": "Rayaan Global Software Solutions Pvt Ltd.",
      "description": "Enterprise IT Consulting & Digital Operating Transformation Partner",
      "publisher": {
        "@id": "https://r-gss.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans scroll-smooth h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-white text-rgss-dark font-sans flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
