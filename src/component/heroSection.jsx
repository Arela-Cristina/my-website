import { AnimatedSection } from "./animatedSections";
import heroFotoCristina from "../assets/hero-foto-cristina.png";
import wallpaperHero from '../assets/wallpaper-hero.png';
console.log(wallpaperHero)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Hero() {
    return (
        <>


            {/* Hero Section */}
            <AnimatedSection className="w-full h-auto bg-cover bg-center bg-no-repeat pt-5 pb-5 flex flex-col  md:h-screen" style={{ backgroundImage: `url(${wallpaperHero})` }} >

                {/* menu */}
                <div className="flex justify-between text-2xl pt-8 mx-8 bg-amber-50 sm: ">

                    <h1>My website</h1>

                    <button className="cursor-pointer">
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                </div>


                {/* Hero */}
                <div className="flex flex-col md:flex-row  gap-5 mt-6 mx-8 ">

                    {/* Bloque 1 */}
                    <div className="w-full flex justify-center items-center pt-8 sm:pt-8  md:w-1/2 md:pt-8 lg:pt-8 xl:justify-end  bg-sky-50">
                        <div className="w-3/5">
                            {/* section 1 */}
                            <div>
                                <h1 className="text-4xl">Frontend Developer</h1>
                                <p className="text-lg mt-5">Hola, soy Cristina y ayudo a los negocios a tener una bonita presencia en la web, sobretodo negocios de la comunidad Latina.</p>
                            </div>


                            {/* section 2 */}
                            <div className="flex flex-col gap-5 md:flex-row md:justify-between  text-lg mt-3">
                                <p>Soy una profesional altamente competente en mejora constante</p>
                                <p>Poseo experiencia comprobada en la creacion de productos web para emprendedores.</p>
                            </div>
                        </div>
                    </div>


                    {/* Bloque 2 */}
                    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 xl:max-w-[600px] bg-sky-950">
                        <img className="w-full" src={heroFotoCristina} alt="Foto de Cristina" />
                    </div>

                </div>
            </AnimatedSection >

        </>

    )
}