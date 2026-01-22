'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-green-500 font-bold uppercase tracking-widest text-sm mb-4 block">Contáctanos</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Construyamos Algo <br /><span className="text-gray-500">Extraordinario.</span></h1>
                        <p className="text-gray-400 text-lg mb-12">
                            ¿Listo para llevar tu presencia digital al siguiente nivel? Rellena el formulario o contáctanos directamente.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-gray-100 rounded-lg border border-black/10">
                                    <Mail className="text-green-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Envíanos un Email</h3>
                                    <p className="text-gray-600">hello@magili.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-gray-100 rounded-lg border border-black/10">
                                    <Phone className="text-green-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Llámanos</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-gray-100 rounded-lg border border-black/10">
                                    <MapPin className="text-green-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Visítanos</h3>
                                    <p className="text-gray-600">Madrid, España</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-50 border border-black/10 p-8 md:p-10 rounded-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                                    <input type="text" id="name" className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-green-500 transition-colors" placeholder="Juan Pérez" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-green-500 transition-colors" placeholder="juan@ejemplo.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                                <select id="service" className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-green-500 transition-colors">
                                    <option>Diseño Web</option>
                                    <option>Desarrollo Web</option>
                                    <option>Optimización SEO</option>
                                    <option>Otro</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea id="message" rows={4} className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-green-500 transition-colors" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group">
                                Enviar Mensaje
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
