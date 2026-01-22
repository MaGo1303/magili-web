'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    { id: 1, title: 'Luxury E-Commerce', category: 'Shopify Plus', img: '/assets/luxury.png' },
    { id: 2, title: 'Tech Startup', category: 'Marketing Site', img: '/assets/startup.png' },
    { id: 3, title: 'Finance Dashboard', category: 'SaaS Platform', img: '/assets/dashboard.png' },
];

export default function Showcase() {
    return (
        <section id="projects" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Trabajos Seleccionados</h2>
                        <p className="text-gray-600">Una selección de nuestros productos digitales recientes.</p>
                    </div>
                    <a href="#" className="hidden md:block text-green-500 hover:text-green-400 font-medium">Ver Todos -&gt;</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 bg-gray-50 mb-4 transition-all duration-500 group-hover:border-green-500/50">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    quality={75}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold group-hover:text-green-500 transition-colors">{project.title}</h3>
                                <span className="text-sm text-gray-600 border border-black/10 px-3 py-1 rounded-full">{project.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="text-green-500 hover:text-green-400 font-medium">Ver Todos -&gt;</a>
                </div>
            </div>
        </section>
    );
}
