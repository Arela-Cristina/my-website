import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./component/animatedSections"
import fotoCristina from "./assets/foto-cristina.jpeg"
import './App.css'

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <AnimatedSection className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="flex">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hola, soy Cristina</h1>
            <p className="text-lg md:text-xl max-w-xl mb-6">
              Desarrollo sitios web bonitos y útiles para pequeños negocios en Milán, especialmente para la comunidad latina.
            </p>
          </div>
          <div>
            <img
              src={fotoCristina}
              alt="Cristina"
              className="rounded-full mb-6 w-32 h-32 md:w-48 md:h-48 shadow-lg"
            />
          </div>
        </div>
        <a
          href="#proyectos"
          className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-600 transition"
        >
          Ver mis trabajos
        </a>
      </AnimatedSection>

      {/* Sobre Mí */}
      <AnimatedSection className="py-16 px-6 max-w-4xl mx-auto" id="sobre-mi">
        <h2 className="text-3xl font-semibold mb-4">Sobre mí</h2>
        <p className="text-lg">
          Soy desarrolladora web independiente viviendo en Milán. Me encanta ayudar a pequeños negocios a tener presencia en línea con páginas modernas, claras y pensadas para su público. Trabajo de manera cercana, en español, y me enfoco en que todo sea simple y útil para vos.
        </p>
      </AnimatedSection>

      {/* Servicios */}
      <AnimatedSection className="bg-orange-50 py-16 px-6" id="servicios">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Servicios</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ServiceCard title="Sitios para restaurantes" desc="Con menú, fotos, y formulario de contacto" />
            <ServiceCard title="Páginas de presentación" desc="Para cafés, peluquerías, tiendas y más" />
            <ServiceCard title="Conexión a redes" desc="Instagram, WhatsApp, Google Maps" />
            <ServiceCard title="Soporte personalizado" desc="Acompañamiento directo y en español" />
          </div>
        </div>
      </AnimatedSection>

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

      {/* Contacto */}
      <AnimatedSection className="bg-gray-100 py-16 px-6" id="contacto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Hablamos?</h2>
          <p className="mb-6">
            Si tenés un negocio y querés tener presencia online, escribime. Podemos hacerlo simple y rápido.
          </p>
          <a
            href="mailto:tuemail@example.com"
            className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-600 transition"
          >
            Escribime por correo
          </a>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8">
        Hecho con ♥ desde Milán — [Tu Nombre] © 2025
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      href={link}
      target="_blank"
      className="block bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <span className="text-orange-600 font-medium">Ver proyecto →</span>
    </motion.a>
  );
}

