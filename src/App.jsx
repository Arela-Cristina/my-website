import './App.css'
import Hero from './component/heroSection'
import SobreMi from './component/sobreMi'
import Servicios from './component/servicios'
import Proyectos from './component/proyectos'
import Contacto from './component/contacto'
import Footer from './component/footer'
import MiExperiencia from './component/miExperiencia'


export default function Portfolio() {
  return (
    <main className="w-full">
      <Hero/>
      <SobreMi />
      <MiExperiencia />
      <Servicios />
      <Proyectos />
      <Contacto />
      <Footer />
    </main>

  )
}






