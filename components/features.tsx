import { Activity, BookOpen, Globe2, Users } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Features() {
  return (
    <section id="features" className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="h-12 w-12 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>{feature.content}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    icon: Activity,
    title: "SABR Research",
    description: "Leading research in stereotactic ablative radiotherapy",
    content:
      "Our consortium focuses on evaluating treatment outcomes and recurrence patterns in renal cell carcinoma patients treated with SABR.",
  },
  {
    icon: Globe2,
    title: "International Collaboration",
    description: "Global network of research centers",
    content:
      "We bring together leading institutions from around the world to advance our understanding of kidney cancer treatment.",
  },
  {
    icon: BookOpen,
    title: "Data Registry",
    description: "Comprehensive patient data collection",
    content:
      "Our registry maintains detailed records of treatment outcomes, helping to improve future patient care and research.",
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Connect with leading researchers",
    content: "Join a network of dedicated professionals working to advance cancer treatment through collaborative research.",
  },
]

