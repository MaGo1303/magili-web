'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-black/5 backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium tracking-wide uppercase text-green-400">Disponible para nuevos proyectos</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent"
                >
                    Diseño Web Premium<br />
                    <span className="text-black">Que Impulsa tu Crecimiento.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
                >
                    Ayudamos a marcas ambiciosas a escalar con sitios web de alto rendimiento centrados en la conversión.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#projects" className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 group">
                        Ver Trabajos
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="/contact" className="px-8 py-3 bg-black/5 border border-black/10 text-black font-semibold rounded-full hover:bg-black/10 transition-colors">
                        Contáctanos
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
