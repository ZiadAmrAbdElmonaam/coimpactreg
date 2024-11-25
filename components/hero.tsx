'use client'

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950" />
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              🔬 International Research Consortium
            </div>
            <div className="mt-6 space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                International coimpactreg
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Advancing research in stereotactic ablative radiotherapy for renal cell carcinoma through international
                collaboration.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  Join Registry <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="mt-12 w-full overflow-hidden rounded-lg border bg-background">
              <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="p-4 md:p-8">
                    <div className="text-2xl font-bold md:text-4xl">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const stats = [
  {
    value: "50+",
    label: "Research Centers",
  },
  {
    value: "1000+",
    label: "Patients Enrolled",
  },
  {
    value: "25+",
    label: "Publications",
  },
  {
    value: "15+",
    label: "Countries",
  },
]

