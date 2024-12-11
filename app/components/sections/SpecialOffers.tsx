export default function SpecialOffers() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="font-semibold text-xl mb-2">Weekend Special</h3>
            <p className="text-gray-600 mb-4">Get 20% off on all main courses every weekend</p>
            <button className="text-orange-500 font-semibold">Learn More →</button>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="font-semibold text-xl mb-2">Happy Hours</h3>
            <p className="text-gray-600 mb-4">50% off on beverages from 4PM to 7PM</p>
            <button className="text-orange-500 font-semibold">Learn More →</button>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="font-semibold text-xl mb-2">Family Package</h3>
            <p className="text-gray-600 mb-4">Special family meals at great prices</p>
            <button className="text-orange-500 font-semibold">Learn More →</button>
          </div>
        </div>
      </div>
    </section>
  )
}
