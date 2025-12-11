import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Users, Award, Clock, MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export default function OmOss() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Om King Trafikskola</h1>
          <p className="text-xl max-w-2xl mx-auto">Din pålitliga partner för körkort och trafikutbildning i Stockholm</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Vår Historia</h2>
              <p className="text-gray-600 text-lg mb-6">
                King Trafikskola har varit en del av Stockholms trafikutbildning i många år. Vi har specialiserat oss på att ge våra elever den bästa möjliga utbildningen för att de ska bli säkra och ansvarsfulla förare.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Sedan 2006 har vi erbjudit handledarutbildning som är obligatorisk för privat övningskörning. Varje fredag kl 16:00 håller vi introduktionsutbildningar för att förbereda handledare på deras viktiga roll.
              </p>
              <p className="text-gray-600 text-lg">
                Vi är stolta över att ha hjälpt tusentals elever att ta sitt körkort och bli säkra förare på Stockholms vägar.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vårt Uppdrag</h3>
                <p className="text-gray-600">
                  Att utbilda säkra och ansvarsfulla förare genom professionell undervisning och personlig service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Våra Värderingar</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Det som driver oss i vårt arbete varje dag</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kvalitet</h3>
              <p className="text-gray-600">
                Vi strävar efter högsta kvalitet i all vår utbildning och service för att ge våra elever bästa möjliga förutsättningar.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trygghet</h3>
              <p className="text-gray-600">
                Trafiksäkerhet är vår prioritet. Vi utbildar ansvarsfulla förare som bidrar till säkrare trafik för alla.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tillgänglighet</h3>
              <p className="text-gray-600">
                Vi anpassar våra tider och metoder efter våra elevers behov för att göra utbildningen så tillgänglig som möjligt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hitta till oss</h2>
              <p className="text-xl text-gray-600">Vi finns centralt beläget i Skärholmen</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformation</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-lg">08-603 85 85</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-lg">Bredängstorget 5, 127 34 Skärholmen</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Öppettider</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>Måndag - Torsdag</span>
                    <span>Enligt överenskommelse</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">Fredag</span>
                    <span className="font-medium">16:00 - Handledarutbildning</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Lördag - Söndag</span>
                    <span>Enligt överenskommelse</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}