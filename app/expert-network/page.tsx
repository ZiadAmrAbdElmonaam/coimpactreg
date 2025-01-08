import React from 'react'

interface ProjectSection {
  title: string;
  description: string;
  investigators: {
    name: string;
    affiliation: string;
    email: string;
  }[];
}

const projects: ProjectSection[] = [
  {
    title: "CO-IMPACT 1",
    description: "Impact of PSMA PET CT/MRI at first diagnosis on outcomes in unfavourable intermediate- and high-risk prostate cancer.",
    investigators: [
      {
        name: "Dr. Simon K.B. Spohn",
        affiliation: "Department of Radiation Oncology, Medical Center – University of Freiburg, Freiburg, Germany",
        email: "simon.spohn@uniklinik-freiburg.de"
      },
      {
        name: "Dr. Marco Vogel",
        affiliation: "Department of Radiation Oncology, Technical University Munich, Munich, Germany",
        email: "marco.vogel@tum.de"
      },
      {
        name: "Dr. Stephanie G.C. Kroeze",
        affiliation: "Radiation Oncology Center Mittelland, Canton Hospital Aarau, Aarau, Switzerland",
        email: "stephanie.thoma@ksa.ch "
      },
      {
        name: "Dr. Giulia Marvaso",
        affiliation: "Dipartimeno di Oncologia ed Onco-ematologia presso Università degli Studi di Milano, Milano, Italy",
        email: "Giulia.Marvaso@ieo.it"
      }
    ]
  },
  {
    title: "CO-IMPACT 2",
    description: "Impact of PSMA PET CT/MR imaging for salvage radiotherapy guidance in prostate cancer patients with recurrent or persistent PSA after primary prostatectomy.",
    investigators: [
      {
        name: "Dr. Constantinos Zamboglou",
        affiliation: "German Oncology Center, Limassol, Cyprus",
        email: "Constantinos.Zamboglou@goc.com.cy"
      },
      {
        name: "Dr. Nina-Sophie Schmidt-Hegemann",
        affiliation: "Department of Radiation Oncology, University Munich (LMU), Munich, Germany",
        email: "Nina-Sophie.Hegemann@med.uni-muenchen.de"
      },
      {
        name: "Dr. Shankar Siva",
        affiliation: "Department of Radiation Oncology, Peter MacCallum Cancer Center, Melbourne, Australia",
        email: "Shankar.Siva@petermac.org"
      },
      {
        name: "Dr. Mohamed Shelan",
        affiliation: "Department of Radiation Oncology, University of Bern, Bern, Switzerland",
        email: "Mohamed.Shelan@insel.ch"
      }
    ]
  },
  {
    title: "CO-IMPACT 3",
    description: "Impact of PSMA PET CT/MR imaging in prostate cancer patients with recurrent PSA after primary radiotherapy.",
    investigators: [
      {
        name: "Dr. Vedang Murthy",
        affiliation: "Department of Radiation Oncology, Tata Memorial Centre, India",
        email: "vmurthy@actrec.gov.in"
      },
      {
        name: "Dr. Amar U. Kishan",
        affiliation: "Department of Radiation Oncology, UCLA, Los Angeles, USA",
        email: "AUKishan@mednet.ucla.edu"
      },
      {
        name: "Dr. Tobias Hoelscher",
        affiliation: "Department of Radiation Oncology, University of Dresden, Dresden, Germany",
        email: "Tobias.Hoelscher@uniklinikum-dresden.de"
      },
      {
        name: "Dr. Jan Peeken",
        affiliation: "Department of Radiation Oncology, Technical University Munich, Munich, Germany",
        email: "jan.peeken@tum.de"
      }
    ]
  },
  {
    title: "CO-IMPACT 4",
    description: "Impact of PSMA PET CT/MR imaging in castration-resistant prostate cancer patients with radiotherapy due to oligoprogressive disease.",
    investigators: [
      {
        name: "Dr. Matthias Guckenberger",
        affiliation: "Department of Radiation Oncology, University of Zürich, Switzerland",
        email: "Matthias.Guckenberger@usz.ch"
      },
      {
        name: "Dr. Thomas Zilli",
        affiliation: "IOSI - Oncology Institute of Southern Switzerland, EOC, Switzerland",
        email: "Thomas.Zilli@eoc.ch"
      },
      {
        name: "Dr. Ken Herrmann",
        affiliation: "Essen University Hospital, Germany",
        email: "ken.herrmann@uk-essen.de"
      },
      {
        name: "Dr. S. Gillessen",
        affiliation: "IOSI - Oncology Institute of Southern Switzerland, EOC, Switzerland",
        email: "silke.gillessen.sommer@usi.ch"
      }
    ]
  }
];

export default function ExpertNetwork() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">CO-IMPACT</span> Expert Network
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            International Group of Investigators
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project) => (
            <section 
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Investigators Grid */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Principal Investigators (PIs):
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {project.investigators.map((investigator, i) => (
                      <div 
                        key={i}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-md"
                      >
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          {investigator.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          {investigator.affiliation}
                        </p>
                        <a 
                          href={`mailto:${investigator.email}`}
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {investigator.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
} 