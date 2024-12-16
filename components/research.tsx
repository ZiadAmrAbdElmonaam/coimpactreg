'use client'

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function Research() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="text-3xl">Our Research Focus</CardTitle>
          </CardHeader>
        </Card>
        
      </div>
    </section>
  )
}





