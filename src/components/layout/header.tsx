import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-b border-border/50">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-20 w-80">
                        <Image
                            src="/images/logo.png"
                            alt="Magili Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="/automatizaciones" className="hover:text-primary transition-colors">
                        Automatizaciones
                    </Link>
                    <Link href="/webs" className="hover:text-primary transition-colors">
                        Desarrollo Web
                    </Link>
                    <Link href="/packs" className="hover:text-primary transition-colors">
                        Packs
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/contacto">
                        <Button variant="default" className="rounded-full px-6 bg-primary hover:bg-primary/90">
                            Contacto
                        </Button>
                    </Link>
                </div>
            </div>
        </header >
    )
}
