import { sections } from './components/sections'

export default function Home() {
  return (
    <main>
      <section id={sections.Hero.id}>
        <sections.Hero.component />
      </section>
      
      <section id={sections.FeaturedMenu.id}>
        <sections.FeaturedMenu.component />
      </section>
      
      <section id={sections.About.id}>
        <sections.About.component />
      </section>
      
      <section id={sections.SpecialOffers.id}>
        <sections.SpecialOffers.component />
      </section>
      
      <section id={sections.LocationMap.id}>
        <sections.LocationMap.component 
          latitude={-6.586488753852987}
          longitude={106.80960453909383}
        />
      </section>
    </main>
  )
}
