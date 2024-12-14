export default function SpecialOffers() {
  const offers = [
    {
      title: "Weekend Special",
      description: "Get 20% off on all main courses every weekend",
      image: "@assets/offer1.jpg",
    },
    {
      title: "Happy Hours",
      description: "50% off on beverages from 4PM to 7PM",
      image: "@assets/offer2.jpg",
    },
    {
      title: "Family Package",
      description: "Special family meals at great prices",
      image: "@assets/offer3.jpg",
    },
  ]

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4">
                <div className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: `url('${offer.image}')` }}></div>
              </div>
              <h3 className="font-semibold text-xl mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <button className="text-orange-500 font-semibold">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}