'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Flag from 'react-world-flags'

interface Site {
  country: string
  city: string
  hospital: string
}

// Add a mapping for country codes
const countryToCode: { [key: string]: string } = {
  "Switzerland": "CHE",
  "Germany": "DEU",
  "Cyprus": "CYP",
  "Australia": "AUS",
  "Austria": "AUT",
  "Italy": "ITA",
  "USA": "USA",
  "UK": "GBR",
  "Netherlands": "NLD",
  "China": "CHN",
  "France": "FRA",
  "Canada": "CAN",
  "India": "IND",
  "Poland": "POL",
  "Turkey": "TUR",
}

const sites: Site[] = [
  { country: "Switzerland", city: "Aarau", hospital: "Cantonal Hospital Aarau" },
  { country: "Switzerland", city: "Basel", hospital: "University Hospital Basel" },
  { country: "Switzerland", city: "Bellinzona", hospital: "Ente Ospedaliero Cantonale" },
  { country: "Switzerland", city: "Bern", hospital: "Inselspital Bern" },
  { country: "Switzerland", city: "Geneva", hospital: "Hopital Latour" },
  { country: "Switzerland", city: "Zürich", hospital: "University Hospital Zürich" },
  { country: "Switzerland", city: "Baden", hospital: "Cantonal Hospital Baden" },
  { country: "Germany", city: "Freiburg", hospital: "University Hospital Freiburg" },
  { country: "Germany", city: "Dresden", hospital: "University Hospital Dresden"},
  { country: "Germany", city: "Munich", hospital: "Technical University of Munich" },
  { country: "Germany", city: "Munich", hospital: "Ludwig Maximilian University of Munich" },
  { country: "Germany", city: "Ulm", hospital: "University Hospital of Ulm" },
  { country: "Germany", city: "Heidelberg", hospital: "Heidelberg University Hospital" },
  { country: "Germany", city: "Regensburg", hospital: "Hospital of Barmherzige Brüder Regensburg" },
  { country: "Germany", city: "Hannover", hospital: "Hannover Medical School"},
  { country: "Germany", city: "Essen", hospital: "Essen University Hospital" },
  { country: "Germany", city: "Wuerzburg", hospital: "University Hospital Wuerzburg" },
  { country: "Cyprus", city: "Limassol", hospital: "German Oncology Center" },
  { country: "Australia", city: "Melbourne", hospital: "Peter MacCallum Cancer Centre" },
  { country: "Australia", city: "Sydney", hospital: "Northern Sydney Cancer Care Center, Royal North Shore Hospital (RNSH)" },
  { country: "Australia", city: "Sydney", hospital: "University of Sydney and Department of Theranostics and Nuclear medicine, St Vincent's Hospital Sydney" },
  { country: "Austria", city: "Innsbruck", hospital: "University of Innsbruck - Tirol Kliniken" },
  { country: "Austria", city: "Vienna", hospital: "University hospital" },
  { country: "Italy", city: "Bologna", hospital: "IRCCS AOI SantÒrsola" },
  { country: "Italy", city: "Milano", hospital: "European Institute of Oncology" },
  { country: "Italy", city: "Milano", hospital: "European Institute of Oncology IRCCS" },
  { country: "Italy", city: "Milano-Bicocca", hospital: "Humanitas Research Hospital IRCCS" },
  { country: "Italy", city: "Rome", hospital: "IRCCS Regina Elena National Cancer Institute" },
  { country: "Italy", city: "Florence", hospital: "Azienda Ospedaliero Universitaria Careggi" },
  { country: "USA", city: "Los Angeles", hospital: "University of California, Los Angeles" },
  { country: "USA", city: "Miami", hospital: "University of Miami" },
  { country: "USA", city: "Dallas", hospital: "UT Southwestern Medical Center" },
  { country: "USA", city: "Philadelphia", hospital: "University of Pennsylvania" },
  { country: "USA", city: "Boston", hospital: "Massachusetts General Hospital" },
  { country: "UK", city: "London", hospital: "Royal Marsden Hospital" },
  { country: "UK", city: "London", hospital: "Guy's and St Thomas' Hospital" },
  { country: "Netherlands", city: "Amsterdam", hospital: "The Netherlands Cancer Institute" },
  { country: "Netherlands", city: "Utrecht", hospital: "St. Antonius Ziekenhuis Utrecht/Nieuwegein" },
  { country: "China", city: "Yunnan", hospital: "Yunnan Cancer Hospital" },
  { country: "France", city: "Paris", hospital: "AP-HP, European Hospital Georges-Pompidou, INSERM" },
  { country: "France", city: "Nantes", hospital: "Institut de Cancérologie de l'Ouest Nantes Université" },
  { country: "Canada", city: "Ontario", hospital: "Ontario Centers" },
  { country: "India", city: "Mumbai", hospital: "Tata Memorial Hospital" },
  { country: "Poland", city: "Gliwice", hospital: "Maria Sklodowska-Curie National Research Institute of Oncology" },
  { country: "Turkey", city: "Adana", hospital: "Baskent University Faculty of Medicine, Adana Dr. Turgut Noyan Research and Treatment Centre, Department of Radiation Oncology" },
]

export default function SitesGrid() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sites.map((site, index) => (
        <Card 
          key={index}
          className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2"
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-bold leading-tight text-primary">
              {site.hospital}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg 
                  className="w-4 h-4 text-muted-foreground flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className="font-medium text-sm">{site.city}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 flex-shrink-0 overflow-hidden">
                  <Flag 
                    code={countryToCode[site.country]} 
                    height="12" 
                    width="16"
                    className="object-cover w-full h-full rounded-[1px] shadow-sm"
                    fallback={<span className="w-full h-full bg-gray-200 rounded-[1px]" />}
                  />
                </div>
                <p className="text-sm text-muted-foreground">{site.country}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 