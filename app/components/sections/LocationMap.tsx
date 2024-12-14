'use client'

interface LocationMapProps {
  latitude?: number
  longitude?: number
}

export default function LocationMap({ 
  latitude = -6.586488753852987,
  longitude = 106.80960453909383
}: LocationMapProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Visit Us</h3>
            <p>Cilibende RT.01/RW.06, Babakan, Bogor Tengah</p>
            <p>Kota Bogor, Indonesia 16128</p>
            <p>Phone: 085158553802</p>
            <p>Email: info@tehai.biz.id</p>
          </div>
          <div className="relative">
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.002}%2C${latitude-0.002}%2C${longitude+0.002}%2C${latitude+0.002}&layer=mapnik&marker=${latitude}%2C${longitude}`}
              className="w-full h-[400px] rounded-lg border-0"
              title="Restaurant Location"
              loading="lazy"
            />
            <small className="absolute bottom-0 right-0 bg-white px-2 py-1 text-xs">
              © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}
