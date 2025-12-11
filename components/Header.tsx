'use client';
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="https://kingtrafikskola.se/wp-content/themes/kennedy/img/design/logo.png?v1" 
              alt="King Trafikskola" 
              width={150} 
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Hem
            </Link>
            <Link href="/tjanster" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Tjänster
            </Link>
            <Link href="/om-oss" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Om oss
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:08-603 85 85" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              08-603 85 85
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-6 py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hem
            </Link>
            <Link 
              href="/tjanster" 
              className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tjänster
            </Link>
            <Link 
              href="/om-oss" 
              className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Om oss
            </Link>
            <Link 
              href="/kontakt" 
              className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            <div className="pt-4 border-t">
              <a href="tel:08-603 85 85" className="block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 text-center">
                Ring oss: 08-603 85 85
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}