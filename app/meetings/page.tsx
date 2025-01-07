import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meetings | CO-IMPACT',
  description: 'CO-IMPACT Project Meetings and Events',
}

export default function MeetingsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        <strong>CO-IMPACT</strong> Project Meetings
      </h1>
      <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300">
        Highlights from our CO-IMPACT project meetings and events
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          'DSC00577.jpg',
          'DSC00586.jpg', 
          'DSC00607.jpg',
          'DSC00628.jpg',
          'DSC04756.jpg',
          'DSC04771.jpg'
        ].map((image, index) => (
          <div key={index} className="group bg-card dark:bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={`/images/${image}`}
                alt={`CO-IMPACT Meeting Photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 