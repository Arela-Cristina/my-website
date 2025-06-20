import { AnimatedSection } from "./component/animatedSections"
import { motion } from "framer-motion"  

export default function Proyectos() {

    function ProjectCard({ title, description, link }) {
        return (
            <motion.a
                whileHover={{ scale: 1.02 }}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="mb-2">{description}</p>
                <span className="text-orange-600 font-medium">Ver proyecto →</span>
            </motion.a>
        );
    }

    return (
        <>
            {/* Proyectos */}
            <AnimatedSection className="py-16 px-6 max-w-5xl mx-auto" id="proyectos">
                <h2 className="text-3xl font-semibold mb-8">Proyectos</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <ProjectCard
                        title="Demo Restaurante La Esquina"
                        description="Página tipo vitrina para restaurante, con menú, fotos y contacto."
                        link="#"
                    />
                    <ProjectCard
                        title="Cafetería Aroma"
                        description="Sitio simple y elegante para una cafetería."
                        link="#"
                    />
                </div>
            </AnimatedSection>
        </>
    )
}
