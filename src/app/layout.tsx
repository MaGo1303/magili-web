import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magili | Soluciones Digitales para PYMES",
  description: "Automatización de procesos y desarrollo web profesional para PYMES. Genera confianza y aumenta tus ventas con Magili.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Magili",
              "url": "https://magili.com",
              "description": "Soluciones digitales para PYMES: Automatización y Desarrollo Web.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34 600 000 000",
                "contactType": "customer service"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
