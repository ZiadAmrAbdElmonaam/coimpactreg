import { Activity, BookOpen, Globe2, Users } from 'lucide-react'
import Link from 'next/link'

export default function Features() {
  return (
    <section id="features" className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group relative bg-card hover:bg-accent rounded-lg p-4 transition-colors border"
          >
            {feature.link ? (
              <Link 
                href={feature.link} 
                className="flex flex-col items-center text-center space-y-3"
              >
                <feature.icon className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
              </Link>
            ) : (
              <div className="flex flex-col items-center text-center space-y-3">
                <feature.icon className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-sm">
                  {feature.title}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    icon: Activity,
    title: "PSMA PET based Radiotherapy",
  },
  {
    icon: Globe2,
    title: "International Collaboration",
    link: "/coimpact/sites"
  },
  {
    icon: BookOpen,
    title: "Data Registry"
  },
  {
    icon: Users,
    title: "Expert Network",
    link: "/expert-network"
  },
]

