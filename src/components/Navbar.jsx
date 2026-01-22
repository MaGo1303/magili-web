'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Servicios', href: '/#services' },
        { name: 'Proyectos', href: '/#projects' },
        { name: 'Proceso', href: '/#process' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${scrolled
                ? 'bg-white/70 backdrop-blur-md border-black/5 py-3'
                : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="hidden md:block relative h-auto w-32">
                        <Image
                            src="/assets/logo.png"
                            alt="Magili"
                            width={150}
                            height={50}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="md:hidden relative h-10 w-10">
                        <Image
                            src="/assets/icon.png"
                            alt="Magili"
                            width={40}
                            height={40}
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-700 hover:text-black transition-colors hover:text-glow"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2 rounded-full bg-black text-white font-bold text-sm hover:scale-105 transition-transform"
                    >
                        Empezar Proyecto
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-black"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 border-b border-black/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg text-gray-700 hover:text-black"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-3 bg-black text-white font-bold rounded-lg"
                            >
                                Empezar Proyecto
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
