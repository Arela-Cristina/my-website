import { AnimatedSection } from "./component/animatedSections"
import heroFotoCristina from "./assets/hero-foto-cristina.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Hero() {
    return (
        <>
            {/* menu */}
            <section>
                <div className="flex justify-between mt-8 mr-20 ml-20">
                    <h1>My website</h1>
                    <button className="cursor-pointer">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

            </section>

            {/* Hero Section */}
            <AnimatedSection className="flex flex-col justify-center items-center text-center px-4">
                <div className="flex">

                    <div className="w-full md:w-1/2 bg-pink-500 text-left pt-20">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Frontend<br></br>Developer</h1>
                        <p className="text-lg md:text-xl max-w-xl mb-6">
                            Hola, soy Cristina!. Desarrollo sitios web bonitos y útiles para pequeños negocios en Milán, especialmente para la comunidad latina.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center bg-cyan-400">
                        <img
                            src={heroFotoCristina}
                            alt="Cristina"
                            className="w-[100%] md:w-[60%] h-auto"
                        />
                    </div>

                </div>

                <a
                    href="#proyectos"
                    className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-600 transition"
                >
                    Mi trabajo
                </a>
            </AnimatedSection>

        </>

    )
}