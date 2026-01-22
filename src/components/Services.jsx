'use client';

import { motion } from 'framer-motion';
import { Layout, Smartphone, Search, Database, Code, BarChart } from 'lucide-react';

const services = [
    { icon: Layout, title: 'Diseño Web', desc: 'Creando interfaces visualmente impactantes y centradas en el usuario.' },
    { icon: Smartphone, title: 'Desarrollo', desc: 'Ingeniería robusta backend y frontend.' },
    { icon: Search, title: 'SEO', desc: 'Optimizando la visibilidad para generar tráfico orgánico.' },
    { icon: Database, title: 'Integración CMS', desc: 'Gestión de contenido fácil para tu equipo.' },
    { icon: Code, title: 'Desarrollo a Medida', desc: 'Funcionalidad compleja usando React y Node.js.' },
    { icon: BarChart, title: 'Analítica', desc: 'Sigue tu crecimiento con paneles integrados.' },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-green-500 text-sm font-bold uppercase tracking-widest">Experiencia</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3">Nuestros Servicios Principales</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border border-black/5 hover:border-black/10 transition-colors group shadow-sm"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 border border-black/5 mb-6 group-hover:border-green-500/50 transition-colors">
                                <s.icon className="text-green-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                            <p className="text-gray-600">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
