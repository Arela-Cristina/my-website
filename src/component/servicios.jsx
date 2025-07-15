import { AnimatedSection } from "./animatedSections"


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
            <AnimatedSection className='w-full min-h-screen flex justify-center items-center'>
                <div className="">


                    <div className="flex flex-col gap-4 rounded-sm" style={{ backgroundColor: 'rgb(250, 250, 250)' }}>

                        <div className="flex flex-col">
                            <h2 className="text-3xl font-semibold border-r-3 border-[#fe3f87] mb-4">Web Design</h2>
                            <div className="flex flex-col gap-4">
                                <ServiceCard title="Sitios para restaurantes" desc="Con menú, fotos, y formulario de contacto" />
                                <ServiceCard title="Páginas de presentación" desc="Para cafés, peluquerías, tiendas y más" />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-3xl font-semibold border-l-3 border-[#fe3f87] mb-4">Servicios</h2>
                            <div className="flex flex-col gap-4">
                                <ServiceCard title="Conexión a redes" desc="Instagram, WhatsApp, Google Maps" />
                                <ServiceCard title="Soporte personalizado" desc="Acompañamiento directo y en español" />
                            </div>
                        </div>

                    </div>
                </div>
            </AnimatedSection>


        </>

    )

}