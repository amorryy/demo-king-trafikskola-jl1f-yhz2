import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceCard from '../../components/ServiceCard'
import { Car, GraduationCap, Users, Clock, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Tjanster() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Våra Tjänster</h1>
          <p className="text-xl max-w-2xl mx-auto">Komplett utbud av tjänster för att hjälpa dig ta körkort på bästa sätt</p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Handledarutbildning</h3>
              </div>
              <p className="text-gray-600 mb-6">På fredagar kl 16:00 så håller vi en Introduktionsutbildning, även kallad handledarutbildning, som sedan 2006 är ett krav för privat övningskörning.</p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Fredagar kl 16:00</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Obligatorisk för privat övningskörning</span>
                </div>
              </div>
              <Link href="/kontakt" className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Boka utbildning
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Car className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Körkortsteori</h3>
              </div>
              <p className="text-gray-600 mb-6">Komplett teorikurs som förbereder dig för teoriprov. Vi går igenom allt du behöver veta för att klara provet.</p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Flexibla tider</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Erfarna instruktörer</span>
                </div>
              </div>
              <Link href="/kontakt" className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Läs mer
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Körkortstester</h3>
              </div>
              <p className="text-gray-600 mb-6">Professionell körutbildning med fokus på trafiksäkerhet och körteknisk utveckling.</p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Anpassat efter dina behov</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Individuell träning</span>
                </div>
              </div>
              <Link href="/kontakt" className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Boka lektion
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Viktigt att veta</h3>
              <div className="space-y-4">
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                  <p className="text-amber-800 font-medium">Avbokningar skall ske senast en arbetsdag innan kl 12.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Tel: 08-603 85 85</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Bredängstorget 5, 127 34 Skärholmen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Har du frågor om våra tjänster?</h2>
          <p className="text-xl mb-8">Kontakta oss så hjälper vi dig att komma igång</p>
          <Link href="/kontakt" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Kontakta oss idag
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}