'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
export default function Research() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="text-3xl">Our Research Focus</CardTitle>
            <CardDescription>
              Investigating the effectiveness of stereotactic ablative radiotherapy in kidney cancer treatment
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="font-semibold">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        {publications.map((publication, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{publication.title}</CardTitle>
              <CardDescription>{publication.authors}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{publication.abstract}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => {}}>
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

const researchAreas = [
  {
    title: "Treatment Outcomes",
    description: "Evaluating the effectiveness of SABR in treating renal cell carcinoma",
  },
  {
    title: "Recurrence Patterns",
    description: "Studying patterns of cancer recurrence following SABR treatment",
  },
  {
    title: "Patient Selection",
    description: "Identifying optimal candidates for SABR treatment",
  },
]

const publications = [
  {
    title: "Long-term Outcomes of SABR in Renal Cell Carcinoma",
    authors: "Johnson et al.",
    abstract:
      "A comprehensive analysis of long-term treatment outcomes in patients treated with stereotactic ablative radiotherapy for renal cell carcinoma.",
  },
  {
    title: "Predictive Factors for SABR Success",
    authors: "Smith et al.",
    abstract:
      "Investigation of factors that contribute to successful treatment outcomes in SABR therapy for kidney cancer patients.",
  },
]

