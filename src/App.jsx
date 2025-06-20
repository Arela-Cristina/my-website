import './App.css'
import Hero from './component/heroSection'
import SobreMi from './component/sobreMi'
import Servicios from './component/servicios'
import Proyectos from './component/proyectos'
import Contacto from './component/contacto'
import Footer from './component/footer'


export default function Portfolio() {
  return (
    <main>
      <Hero />
      <SobreMi />
      <Servicios />
      <Proyectos />
      <Contacto />
      <Footer />
    </main>

  )
}






