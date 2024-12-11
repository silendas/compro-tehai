export default function FeaturedMenu() {
  const menuItems = [
    { name: "Mie Ayam", price: "Rp.13.000", category: "Main Course" },
    { name: "Baso", price: "Rp.13.000", category: "Main Courses" },
    { name: "Aneka Jus", price: "Rp.10.000", category: "Drinks" },
    { name: "Coffe", price: "Rp.5.000", category: "Drinks" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Daftar Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.category}</p>
              <p className="text-orange-500 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
