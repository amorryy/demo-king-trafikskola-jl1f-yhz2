import Header from '../components/Header'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import { Car, GraduationCap, Users, Clock, Shield, Star } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Våra Tjänster</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Vi hjälper dig att ta körkort på ett säkert och professionellt sätt</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Car className="h-12 w-12 text-blue-600" />}
              title="Körkortsteori"
              description="Komplett teorikurs för att förbereda dig för teoriprov. Strukturerad undervisning som ger dig kunskapen du behöver."
            />
            <ServiceCard 
              icon={<GraduationCap className="h-12 w-12 text-blue-600" />}
              title="Handledarutbildning"
              description="Obligatorisk introduktionsutbildning för privat övningskörning. Fredagar kl 16:00 sedan 2006."
            />
            <ServiceCard 
              icon={<Users className="h-12 w-12 text-blue-600" />}
              title="Körkortstester"
              description="Professionell körutbildning med erfarna instruktörer som hjälper dig att bli en säker förare."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Varför Välja King Trafikskola?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Vi har hjälpt tusentals elever att ta körkort sedan vi startade</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexibla Tider</h3>
              <p className="text-gray-600">Vi anpassar våra lektioner efter dina behov och schema för bästa resultat.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Erfarna Instruktörer</h3>
              <p className="text-gray-600">Våra instruktörer har mångårig erfarenhet och hjälper dig att bli en säker förare.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hög Godkännandeprocent</h3>
              <p className="text-gray-600">Våra elever har hög godkännandeprocent tack vare vår professionella utbildning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Redo att ta körkort?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Kontakta oss idag för att boka din första lektion eller handledarutbildning</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Kontakta oss
            </Link>
            <a href="tel:08-603 85 85" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Ring nu: 08-603 85 85
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}