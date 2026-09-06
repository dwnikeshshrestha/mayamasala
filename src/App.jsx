import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Story from './components/Story'
import Products from './components/Products'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Order from './components/Order'
import Footer from './components/Footer'
import SocialRail from './components/SocialRail'

export default function App() {
  return (
    <>
      <Nav />
      <SocialRail />
      <main id="main">
        <Hero />
        <Marquee />
        <Story />
        <Products />
        <Process />
        <Testimonials />
        <Order />
      </main>
      <Footer />
    </>
  )
}
