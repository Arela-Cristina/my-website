import { AnimatedSection } from "./animatedSections"
import myExperienceImg from '../assets/Servicios-img.png'

export default function MiExperiencia() {
    return (
        <AnimatedSection
            className="w-full min-h-screen flex"
            style={{ backgroundColor: '#851851' }}
        >
            <section className='flex  justify-between items-center'>
                <div className="w-2/5">
                    <h1 className='text-4xl text-left font-bold'>A lo largo de este tiempo, </h1><br />
                    <p>He creado productos para empresas y negocios de todo el mundo, desde sitios web de marketing hasta soluciones complejas y aplicaciones empresariales, centradas en experiencias de usuario rápidas, elegantes y accesibles. <br />

                        <p>Actualmente, trabajo en Shopify como ingeniero senior de frontend, creando experiencias reflexivas e inclusivas que cumplen con los estándares web para más de 3 millones de comerciantes en todo el mundo.</p><br />

                        <p>Hasta ahora, fui ingeniero principal de frontend en hellotax, donde trabajé en un conjunto de herramientas y servicios diseñados para el cumplimiento automatizado del IVA para vendedores multicanal en Europa.</p><br />

                        <p>Antes de hellotax, fui consultor senior de ingeniería de interfaz de usuario en Pixel2HTML, desarrollando aplicaciones e interfaces de JavaScript para organizaciones e individuos.</p><br />

                        <p>También dirigí el equipo frontend de Conectar, una startup de aprendizaje electrónico, a través de la creación de múltiples aplicaciones React en una única plataforma de aprendizaje sólida.</p></p>
                </div>
                <div className="w-2/5">
                    <img src='' alt="Valores de trabajo" />
                </div>

            </section>
        </AnimatedSection >
    )
}