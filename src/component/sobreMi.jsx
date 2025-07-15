import { AnimatedSection } from "./animatedSections";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';


export default function SobreMi() {
    return (
        <AnimatedSection className="w-full flex flex-col justify-center gap-8 pt-5 pb-5 md:h-screen     bg-orange-200">

            {/* seccion 1 */}
            <div className="flex flex-col mx-8 md:flex-row  lg:max-w-[1200px] lg:mx-auto bg-sky-100 ">
                <div className="md:w-3/5">
                    <h1 className="text-4xl">Diseño</h1>
                    <p className="text-lg mt-5">Probablemente no soy el típico diseñador sentado detrás de una mesa de trabajo de Illustrator ajustando píxeles, pero diseño. Me encontrarás inmerso en hojas de estilo, ajustando tamaños de fuente y pensando en diseños. Me comprometo a crear experiencias de usuario fluidas y a la moda.</p>
                </div>
                <div className="flex justify-center py-8  md:items-center md:w-2/5 bg-violet-300">
                    <FontAwesomeIcon icon={faUserAstronaut} size="2x" />
                </div>
            </div>


            {/* seccion 2 */}
            <div className="flex flex-col mx-8 md:flex-row  lg:max-w-[1200px] lg:mx-auto  bg-sky-950">
                <div className="flex justify-center  py-8  md:items-center md:w-2/5 bg-violet-300">
                    <FontAwesomeIcon icon={faUserAstronaut} size="2x" />
                </div>
                <div className="md:w-3/5">
                    <h1 className="text-4xl">Ingeniería</h1>
                    <p className="text-lg mt-5">Al crear aplicaciones en JavaScript, cuento con las herramientas adecuadas y puedo funcionar de manera absolutamente independiente de ellas para brindar soluciones rápidas, resistentes y optimizadas para la escala: el rendimiento y la escalabilidad son prioridades en mi radar.</p>
                </div>
            </div>


        </AnimatedSection>
    );
}
