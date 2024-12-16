'use client'

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950" />
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 w-full max-w-[600px] dark:invert">
              <Image
                src="/images/weblogo.png"
                alt="COIMPACT PSMA PET & RADIOTHERAPY"
                width={600}
                height={150}
                priority
                className="w-full h-auto"
              />
            </div>
            
            <div className="max-w-[800px] mx-auto mb-8 text-left font-medium">
              <p className="text-sm md:text-base leading-relaxed mb-4">
                <span className="font-bold">Prostate cancer</span> is the most prevalent malignancy among men in the Western world, and with
                ongoing demographic shifts, its incidence is expected to rise in the coming years. Despite
                advancements, optimal treatment strategies for prostate cancer remain uncertain in various
                clinical scenarios. To address this, the <span className="font-bold">Co-IMPACT consortium</span> was established by a global,
                multidisciplinary team of experts in radiotherapy, nuclear medicine, and medical oncology.
                Comprising <span className="font-bold">45 centers</span> across Europe, the USA, Asia, and Australia, the consortium is
                dedicated to advancing prostate cancer care.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Through <span className="font-bold">four sub-projects (Co-IMPACT1-4)</span>, the consortium will investigate specific clinical
                scenarios along the prostate cancer patient pathway. The aim is to define personalized
                treatment approaches and, using advanced medical imaging such as <span className="font-bold">PSMA-PET/CT</span>, improve
                outcomes for patients with prostate cancer.
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
              <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-y-0 md:divide-x">
                {stats.map((stat, index) => (
                  <div key={index} className="p-6 md:p-8 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold md:text-4xl text-primary">{stat.value}</div>
                    <div className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{stat.label}</div>
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
    value: "30+",
    label: "Research Centers",
  },
  {
    value: "2000+",
    label: "Patients Enrolled",
  },
  {
    value: "10+",
    label: "Publications",
  },
]

