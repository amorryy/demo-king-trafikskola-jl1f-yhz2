import { Phone, MapPin, Clock, Car } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image 
                src="https://kingtrafikskola.se/wp-content/themes/kennedy/img/design/logo.png?v1" 
                alt="King Trafikskola" 
                width={150} 
                height={50}
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Din pålitliga partner för körkort och trafikutbildning i Stockholm sedan många år.
            </p>
            <div className="flex items-center text-gray-300">
              <Car className="h-5 w-5 mr-2 text-blue-400" />
              <span>Professionell trafikutbildning</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Snabblänkar</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/tjanster" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Våra tjänster
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Våra tjänster</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Handledarutbildning</li>
              <li>Körkortsteori</li>
              <li>Körkortstester</li>
              <li>Trafikkunskap</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>08-603 85 85</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                <span>Bredängstorget 5<br />127 34 Skärholmen</span>
              </div>
              <div className="flex items-start text-gray-300">
                <Clock className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium">Handledarutbildning:</p>
                  <p>Fredagar kl 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 King Trafikskola. Alla rättigheter förbehållna.</p>
            <p>Skapad av <span className="text-blue-400 font-medium">Noory Solution</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}