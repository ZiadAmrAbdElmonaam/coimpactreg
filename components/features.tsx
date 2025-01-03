import { BookOpen, Globe2, Users, ScrollText, Calendar } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Features() {
  return (
    <section className=" mx-auto max-w-7xl px-4 -mt-8 mb-16">
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {feature.link ? (
                <Link
                  href={feature.link}
                  className="group flex flex-col items-center text-center p-2 space-y-2 text-gray-900 hover:text-blue-900 dark:text-gray-100 dark:hover:text-blue-100 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-sm">
                    {feature.title}
                  </h3>
                </Link>
              ) : (
                <div className="group flex flex-col items-center text-center p-2 space-y-2 text-gray-900 dark:text-gray-100">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-sm">
                    {feature.title}
                  </h3>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Users,
    title: <><strong>CO-IMPACT</strong> Team</>,
    link: "/expert-network"
  },
  {
    icon: Globe2,
    title: <><strong>CO-IMPACT</strong> Sites</>,
    link: "/coimpact/sites"
  },
  {
    icon: BookOpen,
    title: "Publications",
    link: "/publications"
  },
  {
    icon: ScrollText,
    title: "Guidelines",
    link: "/guidelines"
  },
  {
    icon: Calendar,
    title: "Meetings",
    link: "/meetings"
  }
]

