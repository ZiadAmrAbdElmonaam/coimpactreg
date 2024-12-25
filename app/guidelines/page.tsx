import Image from 'next/image'

export default function Guidelines() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-[850px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Header with Logo */}
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/weblogo.png"
              alt="CO-IMPACT Logo"
              width={200}
              height={70}
              className="h-auto"
            />
          </div>
          
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-2xl font-bold text-gray-800">
              Consortium for Implementation of PSMA-PET in Prostate Cancer therapy Trials (Co-IMPACT) – standard operating procedures
            </h1>
          </div>

          {/* Content with PDF-like styling */}
          <div className="space-y-6 text-gray-700">
            {/* Purpose Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800">1. PURPOSE</h2>
              <div className="pl-4">
                <p className="mb-2">This Standard Operating Procedure (SOP) describes the activities required to:</p>
                <p>Coordinate and monitor the activities of the Consortium for Implementation of PSMA-PET in Prostate Cancer therapy Trials (Co-IMPACT).</p>
              </div>
            </section>

            {/* Introduction Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800">2. INTRODUCTION | SCOPE</h2>
              <div className="pl-4 space-y-3">
                <p>Prostate cancer is the most prevalent malignancy among men in the Western world, and with ongoing demographic shifts, its incidence is expected to rise in the coming years. Despite advancements, optimal treatment strategies for prostate cancer remain uncertain in various clinical scenarios.</p>
                <p>Through four sub-projects (Co-IMPACT1-4), the consortium will investigate specific clinical scenarios along the prostate cancer patient pathway. The aim is to define personalized treatment approaches and, using advanced medical imaging such as PSMA-PET/CT, improve outcomes for patients with prostate cancer.</p>
                <p>This SOP defines the roles, the responsibilities of the consortiums principal investigators as well as the procedures ensuring a smooth operation.</p>
              </div>
            </section>

            {/* Objectives Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800">3. OBJECTIVES</h2>
              <div className="pl-4">
                <p>To define the Co-IMPACT consortium&apos;s SOPs for (i) the role of the principal investigators (PIs), (ii) the funding strategy, (iii) the authorship rules, (iv) the creation and the amendment(s) of the data transfer agreement, (v) the creation and the amendment(s) of the study protocol and (iv) the inclusion of new study centers</p>
              </div>
            </section>

            {/* Responsibilities Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800">4. RESPONSIBILITIES</h2>
              
              <div className="pl-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.1 Co-IMPACT PIs:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The consortium consists of 16 PIs which are divided into 4 PIs per project</li>
                    <li>The PIs are responsible for the strategic and operational management of the consortium</li>
                    <li>All decisions require a majority vote (greater than 50% of the votes)</li>
                    <li>The performance of all Principal Investigators (PIs) will be evaluated annually</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">4.2 Co-IMPACT statistical advisor</h3>
                  <ul className="list-disc pl-6">
                    <li>The PIs can name a statistical advisor who is responsible to double-check the analyses and the statistical plan of each publication</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">4.3 Co-IMPACT project manager</h3>
                  <ul className="list-disc pl-6">
                    <li>The project manager is responsible for the administrative tasks including the recruitment of new centers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">4.4 Co-IMPACT data manager and statistician</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Programming of automated data quality control</li>
                    <li>Creation and management of RedCap files</li>
                    <li>Overall statistical concept and design</li>
                    <li>Conduction of major analyses (including machine-learning)</li>
                    <li>Maintenance of General Data Protection Regulation (GDPR)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Procedures and Rules Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800">5. PROCEDURES and RULES</h2>
              
              <div className="pl-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">5.1 Funding</h3>
                  <div className="space-y-3">
                    <p>All Co-IMPACT PIs can apply for funding for the consortium via different sources including private, governmental and other. All funding actions must be approved by the PIs.</p>
                    <p>Regarding industry/private sponsors a two-level system will be applied:</p>
                    
                    <div className="pl-4">
                      <h4 className="font-medium mb-2">Level 1: General Sponsorship</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Sponsors at this level provide funding to support Co-IMPACT as a whole</li>
                        <li>These sponsors will be acknowledged in all Co-IMPACT publications</li>
                      </ul>
                    </div>
                    
                    <div className="pl-4">
                      <h4 className="font-medium mb-2">Level 2: Project-Specific Sponsorship</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Sponsors at this level may apply to collaborate on a project utilizing Co-IMPACT data</li>
                        <li>Level 2 sponsorships must also apply for a level 1 sponsorship</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Abbreviations Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800">6. ABBREVIATIONS</h2>
              <div className="pl-4">
                <ul className="list-disc pl-6 space-y-1">
                  <li>PI: principal investigator</li>
                  <li>DTA: data exchange file</li>
                  <li>GDPR: General Data Protection Regulation</li>
                </ul>
              </div>
            </section>

            {/* Monitoring Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800">7. MONITORING</h2>
              <div className="pl-4">
                <p>This SOP will be monitored and updated every two years by all Co-IMPACT PIs</p>
              </div>
            </section>

            {/* Guidelines Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800">8. GUIDELINES AND REFERENCES</h2>
              <div className="pl-4">
                <p className="mb-2">The Co-IMPACT consortium will follow the:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <a 
                      href="https://www.equator-network.org/reporting-guidelines/strobe/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      STROBE guidelines
                    </a>
                  </li>
                  <li>Each center must apply to the local GDPR and ethics legislations</li>
                </ul>
              </div>
            </section>

            {/* Footer */}
            <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-600">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 