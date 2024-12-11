export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FoodBrand</h3>
            <p className="text-gray-300">Delicious food and beverages for everyone.</p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 9AM - 10PM</li>
              <li>Saturday: 10AM - 10PM</li>
              <li>Sunday: 10AM - 8PM</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>123 Food Street</li>
              <li>City, Country</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@foodbrand.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Mie Baso Tehai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}