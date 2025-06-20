import { AnimatedSection } from "./component/animatedSections"
export default function Contacto() {
    return (
        <>
            {/* Contacto */}
            <AnimatedSection className="bg-gray-100 py-16 px-6" id="contacto">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">¿Hablamos?</h2>
                    <p className="mb-6">
                        Si tenés un negocio y querés tener presencia online, escribime. Podemos hacerlo simple y rápido.
                    </p>
                    <a
                        href="mailto:tuemail@example.com"
                        className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-600 transition"
                    >
                        Escribime por correo
                    </a>
                </div>
            </AnimatedSection>
        </>
    )

}