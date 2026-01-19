import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t bg-muted/40 py-12 md:py-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">MAGILI</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Soluciones digitales para PYMES. Automatizamos tu negocio y potenciamos tu presencia online.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-primary">Servicios</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/automatizaciones" className="hover:text-secondary">Automatizaciones</Link></li>
                        <li><Link href="/webs" className="hover:text-secondary">Desarrollo Web</Link></li>
                        <li><Link href="/packs" className="hover:text-secondary">Packs Ahorro</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-primary">Empresa</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/contacto" className="hover:text-secondary">Contacto</Link></li>
                        <li><Link href="/privacidad" className="hover:text-secondary">Privacidad</Link></li>
                        <li><Link href="/terminos" className="hover:text-secondary">Términos</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 text-primary">Contacto</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>info@magili.com</li>
                        <li>Madrid, España</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Magili. Todos los derechos reservados.
            </div>
        </footer>
    )
}
