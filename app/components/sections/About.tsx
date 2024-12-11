export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] bg-gray-200 rounded-lg"></div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded with a passion for exceptional food and service, we bring you the finest culinary experiences. 
              Our commitment to quality ingredients and authentic recipes makes every dish special.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-orange-500 rounded-full mr-3"></span>
                Quality Ingredients
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-orange-500 rounded-full mr-3"></span>
                Expert Chefs
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-orange-500 rounded-full mr-3"></span>
                Perfect Ambiance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
