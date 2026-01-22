import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-black/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold tracking-tighter block mb-4">Magili<span className="text-green-500">.</span></span>
                        <p className="text-gray-600 max-w-sm">
                            Construyendo experiencias digitales premium para marcas con visión de futuro.
                            Código limpio, diseño moderno y estrategias centradas en la conversión.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Servicios</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/#services" className="hover:text-black transition-colors">Diseño Web</Link></li>
                            <li><Link href="/#services" className="hover:text-black transition-colors">Desarrollo</Link></li>
                            <li><Link href="/#services" className="hover:text-black transition-colors">Optimización SEO</Link></li>
                            <li><Link href="/contact" className="hover:text-black transition-colors">Mantenimiento</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/privacy" className="hover:text-black transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Términos de Servicio</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Política de Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Magili Agency. Todos los derechos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social placeholders */}
                        <span>Instagram</span>
                        <span>Twitter</span>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
