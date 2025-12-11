import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Kontakt() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Kontakta Oss</h1>
          <p className="text-xl max-w-2xl mx-auto">Vi hjälper dig gärna med frågor om våra tjänster och utbildningar</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Skicka meddelande</h2>
              <p className="text-gray-600 mb-8">Fyll i formuläret så kontaktar vi dig så snart som möjligt</p>
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kontaktuppgifter</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                    <p className="text-gray-600">08-603 85 85</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adress</h3>
                    <p className="text-gray-600">Bredängstorget 5<br />127 34 Skärholmen</p>
                  </div>
                </div>
              </div>
              
              {/* Important Information */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Viktig information</h3>
                
                <div className="space-y-4">
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 text-amber-600 mr-2" />
                      <span className="font-medium text-amber-800">Avbokningsregler</span>
                    </div>
                    <p className="text-amber-700">Avbokningar skall ske senast en arbetsdag innan kl 12.</p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-800">Handledarutbildning</span>
                    </div>
                    <p className="text-blue-700">Fredagar kl 16:00 - Introduktionsutbildning för privat övningskörning</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <a href="tel:08-603 85 85" className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Ring oss nu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}