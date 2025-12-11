interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-6 group-hover:bg-blue-100 transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      
      <p className="text-gray-600 leading-relaxed">{description}</p>
      
      <div className="mt-6 text-blue-600 font-semibold flex items-center group-hover:text-blue-700 transition-colors duration-300">
        Läs mer
        <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}