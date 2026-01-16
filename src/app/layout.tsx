import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./premium.css";

export const metadata: Metadata = {
  title: "Sanjay Jaiswal | UI/UX Designer",
  description: "Premium UI/UX & Visual Designer Portfolio - Creating stunning digital experiences",
  keywords: ["UI/UX Designer", "Visual Designer", "Portfolio", "Product Designer", "India"],
  authors: [{ name: "Sanjay Jaiswal" }],
  openGraph: {
    title: "Sanjay Jaiswal | UI/UX Designer",
    description: "Premium UI/UX & Visual Designer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Template CSS Files */}
        <link rel="stylesheet" href="/css/devicon.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        {/* Live Style Switcher */}
        <link rel="stylesheet" type="text/css" href="/css/styleswitcher.css" />
        {/* Default Color Skin */}
        <link id="color-skin-link" rel="stylesheet" href="/css/skins/yellow.css" />
      </head>
      <body suppressHydrationWarning>
        {children}
        {/* jQuery and Plugins - loaded in order */}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js" 
          strategy="afterInteractive"
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
