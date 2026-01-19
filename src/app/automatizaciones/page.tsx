import { Button } from "@/components/ui/button";
import { Bot, Mail, MessageSquare, FileText, Users, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Automatizaciones para PYMES | Magili",
    description: "Ahorra tiempo y dinero automatizando procesos repetitivos en tu empresa. CRM, Facturación, Chatbots y más.",
};

const services = [
    {
        icon: <FileText className="h-10 w-10 text-blue-500" />,
        title: "Facturación Automática",
        description: "Generación y envío automático de facturas recurrentes. Conexión con tu banco para conciliación.",
    },
    {
        icon: <Users className="h-10 w-10 text-cyan-500" />,
        title: "Gestión de Clientes (CRM)",
        description: "Centraliza tus clientes. Seguimiento automático de oportunidades y recordatorios de contacto.",
    },
    {
        icon: <MessageSquare className="h-10 w-10 text-indigo-500" />,
        title: "Chatbots de Atención 24/7",
        description: "Responde dudas frecuentes al instante en WhatsApp o Web. Filtra clientes cualificados automáticamente.",
    },
    {
        icon: <Mail className="h-10 w-10 text-purple-500" />,
        title: "Email Marketing Automatizado",
        description: "Secuencias de bienvenida, recuperación de carrito y newsletters personalizadas sin esfuerzo manual.",
    },
];

export default function AutomatizacionesPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">Automatizaciones Inteligentes</h1>
                    <p className="text-xl text-muted-foreground">
                        Deja que la tecnología trabaje por ti. Implementamos sistemas que funcionan mientras duermes.
                    </p>
                </div>

                {/* Grid de Servicios */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div key={index} className="bg-card border p-8 rounded-2xl hover:shadow-lg transition-all hover:border-primary/50 group">
                            <div className="mb-6 p-4 bg-muted w-fit rounded-xl group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action especifico */}
                <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">¿No sabes por dónde empezar?</h2>
                        <p className="text-slate-300 text-lg mb-8">
                            Analizamos tu negocio gratuitamente y te decimos qué procesos te están costando más dinero y cómo automatizarlos.
                        </p>
                        <Link href="/contacto">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 h-12">
                                Solicitar Auditoría Gratuita
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
