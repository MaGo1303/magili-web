import { Button } from "@/components/ui/button";
import { Laptop, ShoppingBag, Layout, Code2, Rocket, Search, Smartphone } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Diseño Web Profesional | Magili",
    description: "Desarrollo de páginas web corporativas, tiendas online y aplicaciones web con Next.js.",
};

const webTypes = [
    {
        icon: <Layout className="h-8 w-8 text-blue-500" />,
        title: "Web Corporativa",
        price: "Desde 800€",
        description: "Ideal para empresas que quieren presencia digital sólida. Diseño a medida, catálogo de servicios y contacto.",
    },
    {
        icon: <Rocket className="h-8 w-8 text-orange-500" />,
        title: "Landing Page",
        price: "Desde 450€",
        description: "Página de venta optimizada para conversión. Perfecta para campañas de publicidad (Google/Meta Ads).",
    },
    {
        icon: <ShoppingBag className="h-8 w-8 text-green-500" />,
        title: "E-Commerce",
        price: "Consultar",
        description: "Tienda online completa. Gestión de productos, pasarela de pagos y panel de control autogestionable.",
    },
    {
        icon: <Code2 className="h-8 w-8 text-purple-500" />,
        title: "Web App a Medida",
        price: "Consultar",
        description: "Aplicaciones complejas, SaaS, portales de cliente o intranets. Desarrollo 100% personalizado.",
    }
];

const process = [
    { step: "01", title: "Diseño UX/UI", desc: "Prototipado visual enfocado en tu marca." },
    { step: "02", title: "Desarrollo", desc: "Programación limpia con Next.js y React." },
    { step: "03", title: "Contenido", desc: "Optimización de textos e imágenes para SEO." },
    { step: "04", title: "Lanzamiento", desc: "Puesta en producción y formación básica." },
];

export default function WebsPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4">

                {/* Hero */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Desarrollo Web de Alto Rendimiento</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        No solo hacemos webs bonitas. Creamos herramientas de venta rápidas, seguras y optimizadas para Google.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contacto">
                            <Button size="lg">Pedir Presupuesto</Button>
                        </Link>
                    </div>
                </div>

                {/* Tipos de Web */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {webTypes.map((type, idx) => (
                        <div key={idx} className="border rounded-xl p-6 hover:shadow-lg transition-all bg-card flex flex-col">
                            <div className="mb-4 bg-muted w-fit p-3 rounded-lg">{type.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                            <p className="text-muted-foreground text-sm flex-1 mb-4">{type.description}</p>
                            <div className="font-semibold text-primary">{type.price}</div>
                        </div>
                    ))}
                </div>

                {/* Proceso */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Nuestro Proceso de Trabajo</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {process.map((p, i) => (
                            <div key={i} className="relative text-center">
                                <div className="text-6xl font-black text-slate-100 dark:text-slate-800 absolute -top-4 left-1/2 -translate-x-1/2 -z-10">
                                    {p.step}
                                </div>
                                <h3 className="text-xl font-bold mb-2 relative z-10">{p.title}</h3>
                                <p className="text-sm text-muted-foreground relative z-10">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack Banner */}
                <div className="bg-muted/30 rounded-2xl p-8 text-center border">
                    <h3 className="text-lg font-semibold mb-6">Tecnología de Vanguardia</h3>
                    <div className="flex flex-wrap justify-center gap-8 text-muted-foreground grayscale opacity-70">
                        <div className="flex items-center gap-2"><Smartphone className="h-5 w-5" /> Responsive Design</div>
                        <div className="flex items-center gap-2"><Search className="h-5 w-5" /> SEO Friendly</div>
                        <div className="flex items-center gap-2"><Laptop className="h-5 w-5" /> Next.js 14</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
