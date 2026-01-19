"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-b border-border/50">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-12 w-48 md:h-20 md:w-80 transition-all duration-300">
                        <Image
                            src="/images/logo.png"
                            alt="Magili Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
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

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/contacto">
                        <Button variant="default" className="rounded-full px-6 bg-primary hover:bg-primary/90">
                            Contacto
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <MobileMenu />
            </div>
        </header >
    )
}

function MobileMenu() {
    const [isOpen, setIsOpen] = React.useState(false)

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <div className="md:hidden">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 hover:bg-transparent"
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-0 z-40 bg-background pt-24 px-6 h-screen w-screen flex flex-col gap-8"
                    >
                        <nav className="flex flex-col gap-6 text-lg font-medium">
                            <Link
                                href="/automatizaciones"
                                className="border-b pb-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Automatizaciones
                            </Link>
                            <Link
                                href="/webs"
                                className="border-b pb-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Desarrollo Web
                            </Link>
                            <Link
                                href="/packs"
                                className="border-b pb-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Packs
                            </Link>
                        </nav>

                        <div className="flex flex-col gap-4 mt-auto mb-12">
                            <Link href="/contacto" onClick={() => setIsOpen(false)} className="w-full">
                                <Button size="lg" className="w-full rounded-full bg-primary text-primary-foreground">
                                    Empezar Proyecto
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
