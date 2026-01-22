'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "¿Diseñáis a medida o usáis plantillas?",
        answer: "Diseñamos todo desde cero usando Figma antes de pasar al desarrollo. Cada sitio web se adapta al 100% a tu identidad de marca."
    },
    {
        question: "¿Cuánto tarda un proyecto?",
        answer: "Típicamente, una landing page tarda 2-3 semanas, mientras que un sitio web corporativo completo tarda 4-6 semanas, siempre que tengamos todo el contenido."
    },
    {
        question: "¿Ofrecéis servicios de SEO?",
        answer: "Sí, todos nuestros sitios web se construyen con las mejores prácticas de SEO técnico (velocidad, optimización móvil, meta etiquetas, marcado de esquema) desde el primer día."
    },
    {
        question: "¿Qué plataformas utilizáis?",
        answer: "Nos especializamos en Next.js/React para sitios de alto rendimiento, pero también podemos construir en Shopify para necesidades de comercio electrónico o WordPress si se solicita específicamente."
    }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-black/10">
            <button
                onClick={onClick}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
            >
                <span className={`text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-green-500' : 'text-black group-hover:text-green-600'}`}>
                    {question}
                </span>
                <div className={`p-2 rounded-full border border-black/10 transition-colors ${isOpen ? 'bg-green-500 text-white border-green-500' : 'text-black'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600 pb-6 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-green-500 text-sm font-bold uppercase tracking-widest">Preguntas Frecuentes</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-3">Preguntas Frecuentes</h2>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
