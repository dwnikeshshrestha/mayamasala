import AnnouncementBar from './components/AnnouncementBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Story from './components/Story'
import Products from './components/Products'
import Promo from './components/Promo'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Badges from './components/Badges'
import Order from './components/Order'
import Footer from './components/Footer'
import SocialRail from './components/SocialRail'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <SocialRail />
      <main id="main">
        <Hero />
        <Categories />
        <Story />
        <Products />
        <Promo />
        <Process />
        <Testimonials />
        <Badges />
        <Order />
      </main>
      <Footer />
    </>
  )
}
