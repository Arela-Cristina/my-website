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
            <AnimatedSection
                className="bg-cover bg-center bg-no-repeat h-screen"
                style={{ backgroundImage: `url(${wallpaperHero})` }} >

                {/* menu */}
                <div className="flex justify-between mr-20 ml-20 pt-8">
                    <h1>My website</h1>
                    <button className="cursor-pointer">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>


                {/* Hero */}
                <div className="flex justify-between mr-70 ml-70 gap-[8rem]">


                    <div className="flex flex-col  w-1/2 pt-32">
                        <h1 className="text-4xl font-bold">
                            Frontend<br />Developer.
                        </h1>
                        <p>Hola, soy Cristina y ayudo a pequenos negocios a tener una bonita prescencia en la web, sobretodo negocios de la comunidad latina</p>

                        <div className="flex gap-[4rem] mt-8">
                            <div>
                                <p>Soy una profesional altamente competente, en mejora constante</p>
                            </div>
                            <div>
                                <p>Poseo experiencia comprobada en la creacion de productos web para emprendedores</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-1/2">
                        <img src={heroFotoCristina} alt="Cristina" />
                    </div>

                </div>

            </AnimatedSection >

        </>

    )
}