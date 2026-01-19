import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | Magili",
    description: "Contacta con Magili para digitalizar tu empresa.",
};

export default function ContactoPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Info */}
                    <div className="space-y-8">
                        <h1 className="text-4xl font-bold text-primary">Hablemos de tu proyecto</h1>
                        <p className="text-lg text-muted-foreground">
                            Estamos listos para ayudarte a escalar. Cuéntanos qué necesitas y te responderemos en menos de 24 horas.
                        </p>

                        <div className="space-y-6 pt-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-muted-foreground">contacto@magili.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Teléfono</h3>
                                    <p className="text-muted-foreground">+34 600 000 000</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Oficina</h3>
                                    <p className="text-muted-foreground">Madrid, España</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-card border rounded-2xl p-8 shadow-sm">
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                                    <input id="name" type="text" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Tu nombre" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium">Empresa</label>
                                    <input id="company" type="text" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Tu empresa" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input id="email" type="email" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="ejemplo@correo.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                                <textarea id="message" className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Describe brevemente tu proyecto..." required />
                            </div>

                            <Button type="submit" className="w-full h-12 text-base">Enviar Mensaje</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
