export const metadata = {
    title: 'Política de Privacidad | Magili',
    description: 'Política de Privacidad de Magili Agency. Aprende cómo manejamos tus datos.',
};

export default function PrivacyPage() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Privacidad</h1>
            <p className="text-gray-600 mb-8">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-semibold text-black mb-4">1. Introducción</h2>
                    <p>
                        Magili ("nosotros", "nuestro" o "nos") se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y compartimos tu información personal cuando visitas nuestro sitio web.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-black mb-4">2. Cookies</h2>
                    <p>
                        Utilizamos cookies para analizar el tráfico del sitio web y optimizar tu experiencia. Al aceptar nuestro uso de cookies, tus datos se agregarán a los de todos los demás usuarios.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-black mb-4">3. Recopilación de Datos</h2>
                    <p>
                        Podemos recopilar información de identificación personal de los Usuarios de varias maneras, incluyendo, pero no limitado a, cuando los Usuarios visitan nuestro sitio, completan un formulario y en relación con otras actividades, servicios, funciones o recursos que ponemos a disposición en nuestro Sitio.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-black mb-4">4. Contáctanos</h2>
                    <p>Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos.</p>
                </section>
            </div>
        </div>
    );
}
