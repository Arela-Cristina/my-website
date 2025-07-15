import { AnimatedSection } from "./animatedSections"
import myExperienceImg from '../assets/Servicios-img.png'

export default function MiExperiencia() {
    return (
        <AnimatedSection className="w-full flex flex-col justify-center items-center pb-5 sm:h-screen lg:flex lg:flex-row lg:gap-5 " style={{ backgroundColor: '#851851' }}
        >
          
                <div className='w-5/6 pt-5  lg:w-2/5 xl:w-2/5 bg-amber-50'>
                    <h1 className='text-4xl' >A lo largo de este tiempo, </h1><br />
                    <p className="text-lg">He creado productos para empresas y negocios de todo el mundo, desde sitios web de marketing hasta soluciones complejas y aplicaciones empresariales, centradas en experiencias de usuario rápidas, elegantes y accesibles. <br />

                        <p className="text-lg">Actualmente, trabajo en Shopify como ingeniero senior de frontend, creando experiencias reflexivas e inclusivas que cumplen con los estándares web para más de 3 millones de comerciantes en todo el mundo.</p><br />

                        <p className="text-lg">También dirigí el equipo frontend de Conectar, una startup de aprendizaje electrónico, a través de la creación de múltiples aplicaciones React en una única plataforma de aprendizaje sólida.</p></p>
                </div>

                <div className='w-5/6 mt-5 sm:w-2/5 lg:w-2/5 xl:w-2/5 xl:max-w-[500px]  bg-amber-50'>
                    <img src={myExperienceImg} alt="Valores de trabajo" />
                </div>
           

        </AnimatedSection >
    )
}