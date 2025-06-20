import { AnimatedSection } from "./animatedSections";
import { motion } from "framer-motion";

export default function Proyectos() {
    function ProjectCard({ title, description, link, image }) {
        return (
            <motion.a
                whileHover={{ scale: 1.02 }}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
                {image && (
                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="mb-2 text-sm text-gray-600">{description}</p>
                    <span className="text-orange-600 font-medium">Ver proyecto →</span>
                </div>
            </motion.a>
        );
    }

    return (
        <AnimatedSection
            id="proyectos"
            className="w-full min-h-screen  py-16  mx-auto"
            style={{ backgroundColor: '#851851' }}
        >

            <section className="mr-70 ml-70">
                <h2 className="text-3xl font-semibold mb-12 text-left">Proyectos</h2>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ProjectCard
                        title="Eurolatino Caf"
                        description="Página tipo vitrina para restaurante, con menú, fotos y contacto."
                        link="#"
                        image="https://source.unsplash.com/400x300/?restaurant"
                    />
                    <ProjectCard
                        title="Brawler Draft"
                        description="Sitio simple y elegante para una cafetería."
                        link="#"
                        image="https://source.unsplash.com/400x300/?coffee-shop"
                    />
                    <ProjectCard
                        title="Booflix"
                        description="Portafolio moderno para estudio de diseño o freelancer."
                        link="#"
                        image="https://source.unsplash.com/400x300/?design"
                    />
                    <ProjectCard
                        title="Bool Bnb"
                        description="Portafolio moderno para estudio de diseño o freelancer."
                        link="#"
                        image="https://source.unsplash.com/400x300/?design"
                    />
                    <ProjectCard
                        title="Estudio Creativo"
                        description="Portafolio moderno para estudio de diseño o freelancer."
                        link="#"
                        image="https://source.unsplash.com/400x300/?design"
                    />
                    <ProjectCard
                        title="Estudio Creativo"
                        description="Portafolio moderno para estudio de diseño o freelancer."
                        link="#"
                        image="https://source.unsplash.com/400x300/?design"
                    />
                </div>
            </section>

        </AnimatedSection>
    );
}