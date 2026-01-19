import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Packs y Precios | Magili",
    description: "Ahorra contratando nuestros packs combinados de web y automatización.",
};

const packs = [
    {
        name: "Pack Inicio",
        price: "990€",
        description: "Ideal para empresas que empiezan su digitalización.",
        features: [
            "Web Landing Page Profesional",
            "Dominio y Hosting (1 año)",
            "Formulario de Contacto",
            "Configuración Google My Business",
            "Soporte 1 mes"
        ],
        highlight: false
    },
    {
        name: "Pack Crecimiento",
        price: "1.850€",
        description: "La opción más popular para PYMES consolidadas.",
        features: [
            "Web Corporativa Completa (5 secciones)",
            "SEO Básico Inicial",
            "Chatbot de Respuesta Automática",
            "Automatización de Facturas (Básico)",
            "Soporte 3 meses"
        ],
        highlight: true
    },
    {
        name: "Pack Total",
        price: "Consultar",
        description: "Transformación digital completa a medida.",
        features: [
            "Web E-Commerce o App a Medida",
            "SEO Avanzado + Blog",
            "CRM Integrado y Automatizado",
            "Email Marketing Automático",
            "Soporte Prioritario"
        ],
        highlight: false
    }
];

export default function PacksPage() {
    return (
        <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Packs Ahorro</h1>
                    <p className="text-xl text-muted-foreground">
                        Combina nuestros servicios y obtén un mejor precio. Soluciones llave en mano.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packs.map((pack, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl flex flex-col p-8 bg-card border ${pack.highlight ? 'border-blue-500 ring-2 ring-blue-500 shadow-xl scale-105 z-10' : 'hover:border-primary/50 shadow-sm'}`}
                        >
                            {pack.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Más Vendido
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
                                <div className="text-4xl font-black text-primary mb-2">{pack.price}</div>
                                <p className="text-muted-foreground text-sm">{pack.description}</p>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                {pack.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm">
                                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contacto" className="w-full">
                                <Button className="w-full" variant={pack.highlight ? "default" : "outline"}>
                                    Solicitar Información
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
