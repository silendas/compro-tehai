'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Kios Tehai</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <button onClick={() => scrollToSection('home')} className="hover:text-gray-600">Home</button>
              <button onClick={() => scrollToSection('menu')} className="hover:text-gray-600">Menu</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-600">About</button>
              <button onClick={() => scrollToSection('offers')} className="hover:text-gray-600">Special Offers</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600">Contact</button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 hover:bg-gray-100">Home</button>
          <button onClick={() => scrollToSection('menu')} className="block w-full text-left px-3 py-2 hover:bg-gray-100">Menu</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 hover:bg-gray-100">About</button>
          <button onClick={() => scrollToSection('offers')} className="block w-full text-left px-3 py-2 hover:bg-gray-100">Special Offers</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 hover:bg-gray-100">Contact</button>
        </div>
      </div>
    </nav>
  )
}
