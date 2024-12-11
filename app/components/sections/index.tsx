import Hero from './Hero'
import FeaturedMenu from './FeaturedMenu'
import About from './About'
import SpecialOffers from './SpecialOffers'
import LocationMap from './LocationMap'

const sections = {
  Hero: { id: 'home', component: Hero },
  FeaturedMenu: { id: 'menu', component: FeaturedMenu },
  About: { id: 'about', component: About },
  SpecialOffers: { id: 'offers', component: SpecialOffers },
  LocationMap: { id: 'contact', component: LocationMap }
}

export {
  sections,
  Hero,
  FeaturedMenu,
  About,
  SpecialOffers,
  LocationMap
}
