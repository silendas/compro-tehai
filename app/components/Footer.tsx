export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kios Tehau</h3>
            <p className="text-gray-300">Rasanya dijamin enak dan puas</p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Jam Buka</h4>
            <table className="text-gray-300 border-collapse">
              <tbody>
                <tr>
                  <td className="pr-4">Senin - Jumat</td>
                  <td>: 09.00 - 20.00 WIB</td>
                </tr>
                <tr>
                  <td className="pr-4">Sabtu - Minggu</td>
                  <td>: 09.00 - 21.00 WIB</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Cilibende RT.01/RW.06, Babakan, Bogor Tengah</li>
              <li>Bogor, Indonesia 16128</li>
              <li>Phone: 085158553802</li>
              <li>Email: info@tehai.biz.id</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Kios Tehai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}