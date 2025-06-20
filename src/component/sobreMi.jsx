import { AnimatedSection } from "./animatedSections";

export default function SobreMi() {
    return (
        <AnimatedSection
            className="w-full min-h-screen flex flex-col justify-center items-center gap-[5rem] px-20 py-16"
        >
            <div className="flex justify-between w-full gap-[5rem]">
                <div className="w-2/5 bg-pink-500">
                    <h1 className="text-4xl text-left font-bold">Diseño</h1>
                    <p>
                        Probablemente no soy el típico diseñador sentado detrás de una mesa de trabajo de Illustrator ajustando píxeles, pero diseño. Me encontrarás inmerso en hojas de estilo, ajustando tamaños de fuente y pensando en diseños (~_^). Me comprometo a crear experiencias de usuario fluidas y a la moda.
                    </p>
                </div>
                <div className="w-2/5">algo</div>
            </div>

            <div className="flex justify-between w-full gap-[5rem] text-right">
                <div className="w-2/5">Algo</div>
                <div className="w-2/5 bg-cyan-500">
                    <h1 className="text-4xl font-bold">Ingeniería</h1>
                    <p>
                        Al crear aplicaciones en JavaScript, cuento con las herramientas adecuadas y puedo funcionar de manera absolutamente independiente de ellas para brindar soluciones rápidas, resistentes y optimizadas para la escala: el rendimiento y la escalabilidad son prioridades en mi radar.
                    </p>
                </div>
            </div>
        </AnimatedSection>
    );
}
