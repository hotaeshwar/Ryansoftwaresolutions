import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rayaan Global Software Solutions Pvt Ltd. | RGSS IT Consulting",
  description: "RGSS is an enterprise IT consulting and digital transformation services partner. We turn operating friction into digital business momentum with custom SAP S/4 HANA, Cloud, and Infrastructure Solutions.",
  keywords: ["RGSS", "Rayaan Global Software Solutions", "IT Strategy", "SAP S/4 HANA", "System Integration", "Infrastructure Management", "Digital Transformation"],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Rayaan Global Software Solutions Pvt Ltd. | RGSS",
    description: "Enterprise IT Consulting & Digital Operating Transformation Partner.",
    url: "https://www.r-gss.com",
    siteName: "RGSS Profile",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans scroll-smooth h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-white text-rgss-dark font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
