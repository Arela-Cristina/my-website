import { AnimatedSection } from "./component/animatedSections"


export default function Servicios() {

    function ServiceCard({ title, desc }) {
        return (
            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p>{desc}</p>
            </div>
        );
    }


    return (

        <>
            {/* Servicios */}
            <AnimatedSection className="bg-orange-50 py-16 px-6" id="servicios">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-8">Servicios</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <ServiceCard title="Sitios para restaurantes" desc="Con menú, fotos, y formulario de contacto" />
                        <ServiceCard title="Páginas de presentación" desc="Para cafés, peluquerías, tiendas y más" />
                        <ServiceCard title="Conexión a redes" desc="Instagram, WhatsApp, Google Maps" />
                        <ServiceCard title="Soporte personalizado" desc="Acompañamiento directo y en español" />
                    </div>
                </div>
            </AnimatedSection>


        </>

    )

}