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
            <AnimatedSection className='w-screen h-screen flex justify-center items-center'>
                <div className="">


                    <div className="flex rounded-sm"  style={{ backgroundColor: '#851851' }}>

                        <div className="flex flex-col border-r-2 border-[#fe3f87] px-32 py-32 gap-[2rem]">
                            <h2 className="text-3xl font-semibold mb-8">Web Design</h2>
                            <ServiceCard title="Sitios para restaurantes" desc="Con menú, fotos, y formulario de contacto" />
                            <ServiceCard title="Páginas de presentación" desc="Para cafés, peluquerías, tiendas y más" />
                        </div>

                        <div className="flex flex-col border-l-2 border-[#fe3f87] px-32 py-32 gap-[2rem]">
                            <h2 className="text-3xl font-semibold mb-8">Servicios</h2>
                            <ServiceCard title="Conexión a redes" desc="Instagram, WhatsApp, Google Maps" />
                            <ServiceCard title="Soporte personalizado" desc="Acompañamiento directo y en español" />
                        </div>

                    </div>
                </div>
            </AnimatedSection>


        </>

    )

}