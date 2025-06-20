import { AnimatedSection } from "./animatedSections";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Contacto() {
    return (
        <AnimatedSection className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
                    ¡Envíame un mensaje!
                </h1>
                <p className="text-gray-700 text-lg">
                    ¿Tienes alguna pregunta o propuesta, o simplemente quieres <br />
                    saludar? ¡Adelante!
                </p>
            </div>

            <form className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 text-purple-700">
                {/* Nombre */}
                <div>
                    <label htmlFor="nombre" className="block text-sm mb-1">
                        Su nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Introduce tu nombre"
                        className="w-full border-b-2 border-purple-300 bg-transparent focus:outline-none py-2"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm mb-1">
                        Dirección de correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Introduzca su dirección de correo electrónico"
                        className="w-full border-b-2 border-purple-300 bg-transparent focus:outline-none py-2"
                    />
                </div>

                {/* Mensaje (ocupa las 2 columnas) */}
                <div className="md:col-span-2">
                    <label htmlFor="mensaje" className="block text-sm mb-1">
                        Tu mensaje
                    </label>
                    <textarea
                        id="mensaje"
                        rows="4"
                        placeholder="Hola, creo que necesitamos un sistema de diseño..."
                        className="w-full border-b-2 border-purple-300 bg-transparent focus:outline-none py-2"
                    ></textarea>
                </div>

                {/* Botón */}
                <div className="md:col-span-2 flex justify-center">
                    <button className="mt-8 px-8 py-3 text-purple-600 font-semibold rounded-md border border-purple-600 relative overflow-hidden group">
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                            Disparar
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                    </button>
                </div>
            </form>
        </AnimatedSection>
    );
}
