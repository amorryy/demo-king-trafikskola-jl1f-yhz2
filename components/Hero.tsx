import Link from 'next/link'
import { ArrowRight, Phone, GraduationCap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ta ditt körkort med
            <span className="block text-amber-300">King Trafikskola</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Professionell trafikutbildning i Stockholm. Handledarutbildning, körkortsteori och körkortstester.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/kontakt" className="bg-amber-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-300 transition-all duration-300 flex items-center justify-center group">
              Kom igång idag
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a href="tel:08-603 85 85" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              08-603 85 85
            </a>
          </div>
          
          {/* Key Info */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="bg-amber-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="font-bold text-lg mb-2">Handledarutbildning</h3>
              <p className="text-blue-100 text-sm">Fredagar kl 16:00 - Obligatorisk sedan 2006</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="bg-amber-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="font-bold text-lg mb-2">Kontakta oss</h3>
              <p className="text-blue-100 text-sm">Ring 08-603 85 85 för bokning</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="bg-amber-400 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="font-bold text-lg mb-2">Centralt läge</h3>
              <p className="text-blue-100 text-sm">Bredängstorget 5, Skärholmen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}