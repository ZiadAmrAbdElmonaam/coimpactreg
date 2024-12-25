'use client'

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RegistryForm() {
  const [formData, setFormData] = useState({
    date: "",
    centerName: "",
    centerAddress: "",
    contacts: [
      { name: "", email: "" },
      { name: "", email: "" }
    ],
    projects: {
      coimpact1: { participation: "", patients: "", dicomShared: "" },
      coimpact2: { participation: "", patients: "", dicomShared: "" },
      coimpact3: { participation: "", patients: "", dicomShared: "" },
      coimpact4: { participation: "", patients: "", dicomShared: "" }
    },
    dataTransferAgreement: "",
    references: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <section className="container mx-auto max-w-4xl px-4 py-16">
      <Card>
        <CardHeader>
          <CardTitle>Center Application Form</CardTitle>
          <CardDescription>
            Join the Consortium for Implementation of PSMA-PET in Prostate Cancer therapy Trials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="centerName">Name and address of the center</Label>
                <Input
                  id="centerName"
                  placeholder="Center Name"
                  value={formData.centerName}
                  onChange={(e) => setFormData({ ...formData, centerName: e.target.value })}
                />
                <Textarea
                  id="centerAddress"
                  placeholder="Center Address"
                  className="mt-2"
                  value={formData.centerAddress}
                  onChange={(e) => setFormData({ ...formData, centerAddress: e.target.value })}
                />
              </div>

              <div>
                <Label>Contact Persons (minimum 2)</Label>
                {formData.contacts.map((contact, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 mt-2">
                    <Input
                      placeholder="Name"
                      value={contact.name}
                      onChange={(e) => {
                        const newContacts = [...formData.contacts]
                        newContacts[index].name = e.target.value
                        setFormData({ ...formData, contacts: newContacts })
                      }}
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={contact.email}
                      onChange={(e) => {
                        const newContacts = [...formData.contacts]
                        newContacts[index].email = e.target.value
                        setFormData({ ...formData, contacts: newContacts })
                      }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <Label>Projects of interest including patient numbers and DICOM sharing</Label>
                {Object.entries(formData.projects).map(([project, data]) => (
                  <div key={project} className="grid grid-cols-3 gap-4 mt-4">
                    <div className="font-medium">{project.toUpperCase()}</div>
                    <div className="space-y-2">
                      <Label>Participation</Label>
                      <RadioGroup
                        value={data.participation}
                        onValueChange={(value: string) => {
                          setFormData({
                            ...formData,
                            projects: {
                              ...formData.projects,
                              [project]: { ...data, participation: value }
                            }
                          })
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id={`${project}-yes`} />
                          <Label htmlFor={`${project}-yes`}>Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id={`${project}-no`} />
                          <Label htmlFor={`${project}-no`}>No</Label>
                        </div>
                      </RadioGroup>
                      {data.participation === 'yes' && (
                        <Input
                          placeholder="Number of patients"
                          value={data.patients}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              projects: {
                                ...formData.projects,
                                [project]: { ...data, patients: e.target.value }
                              }
                            })
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <Label>DICOM Shared</Label>
                      <RadioGroup
                        value={data.dicomShared}
                        onValueChange={(value: string) => {
                          setFormData({
                            ...formData,
                            projects: {
                              ...formData.projects,
                              [project]: { ...data, dicomShared: value }
                            }
                          })
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id={`${project}-dicom-yes`} />
                          <Label htmlFor={`${project}-dicom-yes`}>Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id={`${project}-dicom-no`} />
                          <Label htmlFor={`${project}-dicom-no`}>No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Label htmlFor="dataTransfer">Data transfer agreement needed</Label>
                <Textarea
                  id="dataTransfer"
                  placeholder="Please state the approx. duration until completion"
                  value={formData.dataTransferAgreement}
                  onChange={(e) => setFormData({ ...formData, dataTransferAgreement: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="references">Previous references affecting Co-IMPACT related topics</Label>
                <Textarea
                  id="references"
                  placeholder="In case your center published >3, please state the 3 most important ones"
                  value={formData.references}
                  onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full">Submit Application</Button>
        </CardFooter>
      </Card>
    </section>
  )
} 