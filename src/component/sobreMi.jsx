import { AnimatedSection } from "./component/animatedSections"
export default function SobreMi() {
    return (

        <>
            {/* Sobre Mí */}
            < AnimatedSection className="flex flex-col md:flex-row justify-center items-start text-left px-4 md:px-16 gap-8 py-12" id="sobre-mi" >
                <article className="w-full md:w-1/2">
                    <h2 className="text-3xl text-left font-semibold mb-4">Sobre mí</h2>
                    <p className="text-lg">
                        Soy desarrolladora web independiente viviendo en Milán. Me encanta ayudar a pequeños negocios a tener presencia en línea con páginas modernas, claras y pensadas para su público. Trabajo de manera cercana, en español, y me enfoco en que todo sea simple y útil para vos.
                    </p>
                </article>
                <article className="w-full md:w-1/2 text-right">
                    <h2 className="text-3xl text-right font-semibold mb-4">Sobre mí</h2>
                    <p className="text-lg">
                        Soy desarrolladora web independiente viviendo en Milán. Me encanta ayudar a pequeños negocios a tener presencia en línea con páginas modernas, claras y pensadas para su público. Trabajo de manera cercana, en español, y me enfoco en que todo sea simple y útil para vos.
                    </p>
                </article>
            </AnimatedSection >
        </>
    )
}