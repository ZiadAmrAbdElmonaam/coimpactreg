import Image from 'next/image'

export default function Guidelines() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-[850px] mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Header with Logo */}
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/coimpact.png"
              alt="CO-IMPACT Logo"
              width={200}
              height={70}
              className="h-auto"
            />
          </div>
          
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Consortium for Implementation of PSMA-PET in Prostate Cancer therapy Trials (Co-IMPACT) – standard operating procedures
            </h1>
          </div>

          {/* Document Info Table */}
          <div className="mb-8">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
              <tbody>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 p-2 w-1/3 text-gray-900 dark:text-white">Date</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 w-1/3 text-gray-900 dark:text-white">Issued by</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 w-1/3 text-gray-900 dark:text-white">Approved by</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white">Date</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white">Constantinos Zamboglou</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white">All Co-IMPACT PIs (23.12.2024)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 p-2 w-1/3 text-gray-900 dark:text-white">Date</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 w-1/3 text-gray-900 dark:text-white">Review</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 w-1/3 text-gray-900 dark:text-white">Approved by</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white"></td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white">Reviewer&apos;s name</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white">Director&apos;s name</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white"></td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white">Reviewer&apos;s name</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white">Director&apos;s name</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white"></td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white">Reviewer&apos;s name</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-white">Director&apos;s name</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-900 dark:text-white">
            {/* Purpose Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">1. PURPOSE</h2>
              <p>This Standard Operating Procedure (SOP) describes the activities required to:</p>
              <p className="pl-4">Coordinate and monitor the activities of the Consortium for Implementation of PSMA-PET in Prostate Cancer therapy Trials (Co-IMPACT).</p>
            </section>

            {/* Introduction Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2. INTRODUCTION | SCOPE</h2>
              <p className="mb-3">Prostate cancer is the most prevalent malignancy among men in the Western world, and with ongoing demographic shifts, its incidence is expected to rise in the coming years. Despite advancements, optimal treatment strategies for prostate cancer remain uncertain in various clinical scenarios. To address this, the Co-IMPACT consortium was established by a global, multidisciplinary team of experts in radiotherapy, nuclear medicine, and medical oncology. Comprising 45 centers across Europe, the USA, Asia, and Australia, the consortium is dedicated to advancing prostate cancer care.</p>
              <p className="mb-3">Through four sub-projects (Co-IMPACT1-4), the consortium will investigate specific clinical scenarios along the prostate cancer patient pathway. The aim is to define personalized treatment approaches and, using advanced medical imaging such as PSMA-PET/CT, improve outcomes for patients with prostate cancer.</p>
              <p>This SOP defines the roles, the responsibilities of the consortiums principal investigators as well as the procedures ensuring a smooth operation.</p>
            </section>

            {/* Objectives Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">3. OBJECTIVES</h2>
              <p>To define the Co-IMPACT consortium&apos;s SOPs for (i) the role of the principal investigators (PIs), (ii) the funding strategy, (iii) the authorship rules, (iv) the creation and the amendment(s) of the data transfer agreement, (v) the creation and the amendment(s) of the study protocol and (iv) the inclusion of new study centers</p>
            </section>

            {/* Responsibilities Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">4. RESPONSIBILITIES</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">4.1 Co-IMPACT PIs:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-white">
                    <li>The consortium consists of 16 PIs which are divided into 4 PIs per project</li>
                    <li>The PIs are responsible for the strategic and operational management of the consortium</li>
                    <li>All decisions require a majority vote (greater than 50% of the votes). If not all Principal Investigators (PIs) are present during a meeting, only the votes of those in attendance will be taken into account.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">4.2 Co-IMPACT statistical advisor</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-white">
                    <li>The PIs can name a statistical advisor who is responsible to double-check the analyses and the statistical plan of each publication using the data of the Co-IMPACT consortium. This advisor has the right to be named as Co-author in each manuscript he or she was actively involved.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">4.3 Co-IMPACT project manager</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-white">
                    <li>The project manager is responsible for the administrative tasks including the recruitment of new centers, the initial quality control of the clinical datasets, the organization and follow-up steps of the consortium meetings as well as the correspondence with all participants.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">4.4 Co-IMPACT data manager and statistician</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-white">
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
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">5. PROCEDURES and RULES</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">5.1 Funding</h3>
                  <p className="mb-3 text-gray-900 dark:text-white">All Co-IMPACT PIs can apply for funding for the consortium via different sources including private, governmental and other. All funding actions must be approved by the PIs. The main aim is to ensure a smooth operation of the project related work, especially the data management and the administrative tasks. Additionally, the organization of consortium meetings is a major aim.</p>
                  <p className="mb-3 text-gray-900 dark:text-white">All contracts/funding proposals will be shared among the PIs just for transparency and centrally stored.</p>
                  <p className="mb-3 text-gray-900 dark:text-white">Regarding industry/private sponsors a two-level system will be applied</p>

                  <div className="pl-4 mb-3 text-gray-900 dark:text-white">
                    <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Level 1: General Sponsorship</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-white">
                      <li>Sponsors at this level provide funding to support Co-IMPACT as a whole, rather than any specific project or topic.</li>
                      <li>These sponsors will be acknowledged in all Co-IMPACT publications, on the website, and in every presentation.</li>
                    </ul>
                  </div>

                  <div className="pl-4 text-gray-900 dark:text-white">
                    <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Level 2: Project-Specific Sponsorship</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-white">
                      <li>Sponsors at this level may apply to collaborate on a project utilizing Co-IMPACT data.</li>
                      <li>While direct access to clinical data or imaging will not be granted, sponsors can request an analysis contingent on approval by the Principal Investigators (PIs).</li>
                      <li>They are welcome to participate in Co-IMPACT meetings when discussions pertain to their dedicated project.</li>
                      <li>Additionally, they may propose ancillary projects that do not involve clinical or imaging data, such as studies related to treatment concepts, including those based on questionnaire-based research (e.g. on treatment strategies).</li>
                      <li>Level 2 sponsorships must also apply for a level 1 sponsorship.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">5.2 Approval of new study centers</h3>
                  <p className="mb-3 text-gray-900 dark:text-white">Centers interested in participating in Co-IMPACT may apply by directly contacting a Principal Investigator (PI) or through the Co-IMPACT website (currently under development). Applications must follow a designated template (see attachment 1, center application form), which should include the names of the primary local participants, the expected number of patients, the need for a signed DTA and the approximated time to complete a DTA, the sub-projects of interest, and confirmation regarding the ability to share DICOM data. Furthermore, applicants are required to reference any prior publications relevant to the consortium&apos;s focus areas.</p>
                  <p className="text-gray-900 dark:text-white">Each application will be shared within the consortium PIs and a majority vote is needed to include a center. Upon this step, the approved new center will receive the DTA, the study protocol and the data exchange files.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">5.3 Authorship rights</h3>
                  <p className="mb-3 text-gray-900 dark:text-white">1. First/Last Authorships For each paper resulting from a pre-specified analysis using the Co-IMPACT database, the responsible institution(s) are defined. This/These institution(s) is/are allowed to name the first and last authors.</p>
                  <p className="mb-3 text-gray-900 dark:text-white">2. Co-authors All Co-IMPACT PIs of the respective sub-project must be named as Co-authors in the main author line. The policy considers the number of patients included in each sub-project (Co-IMPACT 1-4) according to the following co-authorship guidelines:</p>

                  <div className="pl-4 mb-3 text-gray-900 dark:text-white">
                    <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Papers Including Only Clinical Data</h4>
                    <p className="mb-2 text-gray-900 dark:text-white">Institutions contributing:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-white">
                      <li>Up to 100 patients: 2 names as PubMed indexed author collaborators</li>
                      <li>More than 100 but fewer than 200 patients: 1 name on the main author line; 1 name as PubMed indexed author collaborator</li>
                      <li>More than 200 but fewer than 300 patients: 2 names on the main author line; 2 names as PubMed indexed author collaborators</li>
                      <li>More than 300 patients: 3 names on the main author line; 3 names as PubMed indexed author collaborators</li>
                    </ul>
                  </div>

                  <div className="pl-4 mb-3 text-gray-900 dark:text-white">
                    <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Papers Including Clinical and Imaging Data</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-white">
                      <li>Up to 100 patients: 1* name on the main author line; 2 names as PubMed indexed author collaborators</li>
                      <li>More than 100 but fewer than 200 patients: 2* names on the main author line; 2 names as PubMed indexed author collaborators</li>
                      <li>More than 200 patients: 3* names on the main author line; 3 names as PubMed indexed author collaborators</li>
                    </ul>
                    <p className="mt-2 text-sm italic text-gray-900 dark:text-white">* Depending on journal restrictions on the number of authors in the main author line, the responsible institutions for the respective analysis are allowed to name up to additional 1-3 authors for the main author line. The Co-IMPACT PIs remain in the main author line.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">5.3 Changes of the study protocol, DTA or data exchange files</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-white">
                    <li>All centers may submit their comments to a/the PI(s) or administrative staff.</li>
                    <li>The request is discussed among the PIs and with the requesting party.</li>
                    <li>If a majority vote favors the change, the relevant PIs will implement the modification.</li>
                    <li>The change is then communicated to all participating centers.</li>
                  </ul>
                  <p className="mt-2 text-gray-900 dark:text-white">These rules apply for changes in the study protocol, the DTA and the data exchange files.</p>
                  <p className="mt-2 text-gray-900 dark:text-white">(Minor adjustments may be collected and incorporated into a protocol amendment at a later stage to minimize bureaucratic overhead.)</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">5.4 Clinical data submission and initial quality check</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-white">
                    <li>All centers are required to submit their clinical data either (i) through RedCap (preferred) or (ii) via a secure server in Excel format.</li>
                    <li>Upon each data submission, the respective sub-project PIs and the data manager will receive an automated notification.</li>
                    <li>Alongside the clinical data transfer, centers must complete a brief questionnaire addressing data quality.</li>
                    <li>An automated quality control check will be conducted to identify semantic and logical errors within the clinical data. This process will be overseen by the project manager.</li>
                    <li>If errors are detected, the project manager will reach out to the respective centers to facilitate corrective actions.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Abbreviations Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">6. ABBREVIATIONS</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-900 dark:text-white">
                <li>PI: principal investigator</li>
                <li>DTA: data exchange file</li>
                <li>GDPR: General Data Protection Regulation</li>
              </ul>
            </section>

            {/* Monitoring Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">7. MONITORING</h2>
              <p className="text-gray-900 dark:text-white">This SOP will be monitored and updated every two years by all Co-IMPACT PIs</p>
            </section>

            {/* Guidelines Section */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">8. GUIDELINES AND REFERENCES</h2>
              <p className="mb-2 text-gray-900 dark:text-white">The Co-IMPACT consortium will follow the:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-white">
                <li>
                  <a 
                    href="https://www.equator-network.org/reporting-guidelines/strobe/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    STROBE guidelines
                  </a>
                </li>
                <li className="dark:text-gray-300">Each center must apply to the local GDPR and ethics legislations</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 