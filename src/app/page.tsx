"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Globe, Check } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Strict Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
                Digitalización corporativa <span className="text-primary">sin fricción.</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Eliminamos la complejidad tecnológica para que tu empresa opere con eficiencia absoluta. Automatizaciones inteligentes y webs de alto rendimiento.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contacto">
                  <Button size="lg" className="rounded-full px-8 text-base h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                    Empezar Proyecto
                  </Button>
                </Link>
                <Link href="/packs">
                  <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14 border-input hover:bg-secondary">
                    Ver Packs
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-muted/50"
            >
              <Image
                src="/images/hero.jpg"
                alt="Digitalización y escalabilidad"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios Split Introduction */}
      <section className="border-t border-border">
        <div className="grid md:grid-cols-2">
          {/* Web - With Image */}
          <div className="relative overflow-hidden group min-h-[500px]">
            <div className="absolute inset-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <Image
                src="/images/web.png"
                alt="Diseño Web Profesional"
                fill
                className="object-cover"
              />
              {/* Default Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full p-12 md:p-24 flex flex-col justify-end text-white">
              <Globe className="h-12 w-12 mb-6 text-white" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Presencia Web</h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-md">
                Interfaces que venden. Diseño corporativo de alto impacto y tecnología Next.js.
              </p>
              <Link href="/webs" className="inline-flex items-center text-white font-medium hover:underline underline-offset-4 text-lg">
                Explorar Desarrollo Web <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Automatizaciones - With Image */}
          <div className="relative overflow-hidden group min-h-[500px]">
            <div className="absolute inset-0 z-10 bg-primary/90 opacity-0 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <Image
                src="/images/automations.jpg"
                alt="Automatización de procesos"
                fill
                className="object-cover"
              />
              {/* Default Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full p-12 md:p-24 flex flex-col justify-end text-white">
              <Bot className="h-12 w-12 mb-6 text-white" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Automatización</h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-md">
                Sistemas invisibles que gestionan tus procesos. Ahorra tiempo y recursos.
              </p>
              <Link href="/automatizaciones" className="inline-flex items-center text-white font-medium hover:underline underline-offset-4 text-lg">
                Descubrir Automatizaciones <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Valores / Why Us */}
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Menos ruido.<br />Más resultados.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En un mundo digital saturado, apostamos por la claridad. Nuestras soluciones no buscan impresionar con fuegos artificiales, sino con funcionalidad robusta y diseño atemporal.
              </p>
            </div>
            <ul className="space-y-6">
              {[
                "Código limpio y mantenible (Next.js)",
                "Diseño orientado a la conversión",
                "Optimización SEO nativa",
                "Escalabilidad garantizada"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg">
                  <div className="h-8 w-8 rounded-full border border-primary/20 flex items-center justify-center bg-background shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
