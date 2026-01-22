'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        id: '01',
        title: 'Descubrimiento y Estrategia',
        desc: 'Comenzamos entendiendo tus objetivos comerciales, audiencia y competidores para construir una hoja de ruta sólida.'
    },
    {
        id: '02',
        title: 'Wireframing y UX',
        desc: 'Estructurando el viaje del usuario para asegurar una navegación fluida y optimización de la conversión.'
    },
    {
        id: '03',
        title: 'Diseño de Alta Fidelidad',
        desc: 'Creando visuales perfectos que se alinean con tu identidad de marca y estética premium.'
    },
    {
        id: '04',
        title: 'Desarrollo y Lanzamiento',
        desc: 'Escribiendo código limpio usando Next.js, optimizando para velocidad/SEO y desplegando al mundo.'
    },
];

const StepCard = ({ step, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center mb-24 ${index % 2 === 0 ? 'justify-end md:pr-16 text-right' : 'justify-start md:pl-16 text-left'} w-full`}
        >
            {/* Desktop Layout Alternating */}
            <div className={`hidden md:block w-1/2 ${index % 2 !== 0 ? 'order-last' : ''}`} />

            <div className={`w-full md:w-1/2 z-10 p-6 rounded-2xl bg-gray-50 border border-black/10 hover:border-green-500/50 transition-colors shadow-xl ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                <span className="text-4xl font-bold text-green-500/20 absolute -top-4 -left-4 md:static md:block md:mb-2">{step.id}</span>
                <h3 className="text-2xl font-bold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>

            {/* Center Dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white z-20 shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
        </motion.div>
    );
};

export default function Process() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} id="process" className="py-24 bg-white relative overflow-hidden">
            {/* Animated Background Blobs - Hidden on mobile for performance */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-400/30 rounded-full blur-[80px] mix-blend-multiply"
                />
                <motion.div
                    animate={{
                        x: [0, -70, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-400/30 rounded-full blur-[80px] mix-blend-multiply"
                />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-green-500 text-sm font-bold uppercase tracking-widest">El Proceso</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3">Cómo Trabajamos</h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* The Center Line Background (Gray) */}
                    <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-black/10" />

                    {/* The Animated Line (Green) */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-green-500 to-green-300 shadow-[0_0_8px_rgba(34,197,94,0.8)] z-0"
                    />

                    {/* Steps */}
                    <div className="relative z-10 pl-8 md:pl-0">
                        {steps.map((step, index) => (
                            <StepCard key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
