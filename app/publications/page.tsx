interface Publication {
  title: string;
  titleUrl?: string;
  authors: string;
  journal: string;
  doi: string;
  pmid?: string;
}

export default function PublicationsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Publications</h1>
      <div className="space-y-12">
        {Object.entries(publicationsByYear)
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([year, pubs]) => (
          <div key={year}>
            <h2 className="text-2xl font-bold mb-6">{year}</h2>
            <div className="space-y-8">
              {pubs.map((pub: Publication, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-sm font-semibold text-gray-500">{index + 1}.</span>
                    {pub.titleUrl ? (
                      <a href={pub.titleUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-600 hover:text-blue-800">
                        {pub.title}
                      </a>
                    ) : (
                      <h3 className="text-lg font-medium text-gray-900">{pub.title}</h3>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                  <p className="text-sm font-medium text-gray-800">{pub.journal}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="text-sm text-gray-500">DOI: {pub.doi}</span>
                    {pub.pmid && <span className="text-sm text-gray-500">PMID: {pub.pmid}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const publicationsByYear: Record<string, Publication[]> = {
  "2024": [
    {
      title: "The prognostic significance of a negative PSMA-PET scan prior to salvage radiotherapy following radical prostatectomy",
      titleUrl: "https://pubmed.ncbi.nlm.nih.gov/37736808/",
      authors: "Adebahr S, Althaus A, Scharl S, Strouthos I, Farolfi A, Serani F, Lanzafame H, Trapp C, Koerber SA, Peeken JC, Vogel MME, Vrachimis A, Spohn SKB, Grosu AL, Kroeze SGC, Guckenberger M, Fanti S, Hruby G, Emmett L, Belka C, Schmidt-Hegemann NS, Henkenberens C, Aebersold DM, Wiegel T, Afshar-Oromieh A, Zamboglou C, Shelan M",
      journal: "Eur J Nucl Med Mol Imaging. 2024 Jan;51(2):558-567",
      doi: "10.1007/s00259-023-06438-3",
      pmid: "37736808"
    },
    {
      title: "European association of urology risk stratification predicts outcome in patients receiving PSMA-PET-planned salvage radiotherapy for biochemical recurrence following radical prostatectomy",
      titleUrl: "https://pubmed.ncbi.nlm.nih.gov/38458259/",
      authors: "Scharl S, Zamboglou C, Strouthos I, Farolfi A, Serani F, Koerber SA, Debus J, Peeken JC, Vogel MME, Kroeze SGC, Guckenberger M, Krafcsik M, Hruby G, Emmett L, Schmidt-Hegemann NS, Trapp C, Spohn SKB, Henkenberens C, Mayer B, Shelan M, Aebersold DM, Thamm R, Wiegel T",
      journal: "Radiother Oncol. 2024 May;194:110215",
      doi: "10.1016/j.radonc.2024.110215",
      pmid: "38458259"
    },
    {
      title: "Whole pelvis vs. hemi pelvis elective nodal radiotherapy in patients with PSMA-positive nodal recurrence after radical prostatectomy - a retrospective multi-institutional propensity score analysis",
      titleUrl: "https://pubmed.ncbi.nlm.nih.gov/38940843/",
      authors: "Trapp C, Aebersold DM, Belka C, Casuscelli J, Emmett L, Eze C, Fanti S, Farolfi A, Fendler W, Grosu AL, Guckenberger M, Hruby G, Kirste S, Koerber SA, Kroeze S, Peeken JC, Rogowski P, Scharl S, Shelan M, Spohn SKB, Strouthos I, Unterrainer L, Vogel M, Wiegel T, Zamboglou C, Schmidt-Hegemann NS",
      journal: "Eur J Nucl Med Mol Imaging. 2024 Oct;51(12):3770-3781",
      doi: "10.1007/s00259-024-06802-x",
      pmid: "38940843"
    },
    {
      title: "A Machine Learning Approach for Predicting Biochemical Outcome After PSMA-PET-Guided Salvage Radiotherapy in Recurrent Prostate Cancer After Radical Prostatectomy: Retrospective Study",
      titleUrl: "https://pubmed.ncbi.nlm.nih.gov/39303279/",
      authors: "Janbain A, Farolfi A, Guenegou-Arnoux A, Romengas L, Scharl S, Fanti S, Serani F, Peeken JC, Katsahian S, Strouthos I, Ferentinos K, Koerber SA, Vogel ME, Combs SE, Vrachimis A, Morganti AG, Spohn SK, Grosu AL, Ceci F, Henkenberens C, Kroeze SG, Guckenberger M, Belka C, Bartenstein P, Hruby G, Emmett L, Omerieh AA, Schmidt-Hegemann NS, Mose L, Aebersold DM, Zamboglou C, Wiegel T, Shelan M",
      journal: "JMIR Cancer. 2024 Sep 20;10:e60323",
      doi: "10.2196/60323",
      pmid: "39303279"
    },
    {
      title: "Better Oncological Outcomes After Prostate-specific Membrane Antigen Positron Emission Tomography-guided Salvage Radiotherapy Following Prostatectomy",
      titleUrl: "https://pubmed.ncbi.nlm.nih.gov/39609244/",
      authors: "Zamboglou C, Staus P, Wolkewitz M, Peeken JC, Ferentinos K, Strouthos I, Farolfi A, Koerber SA, Vrachimis A, Spohn SKB, Aebersold DM, Grosu AL, Kroeze SGC, Fanti S, Hruby G, Wiegel T, Emmett L, Hayoz S, Ceci F, Guckenberger M, Belka C, Schmidt-Hegemann NS, Ghadjar P, Shelan M",
      journal: "Eur Urol Focus. 2024 Nov",
      doi: "10.1007/s00259-024-06802-x",
      pmid: "39609244"
    }
  ],
  "2023": [
    {
      title: "Development and Validation of a Multi-institutional Nomogram of Outcomes for PSMA-PET-Based Salvage Radiotherapy for Recurrent Prostate Cancer",
      titleUrl: "https://pubmed.ncbi.nlm.nih.gov/37219907/",
      authors: "Zamboglou C, Peeken JC, Janbain A, Katsahian S, Strouthos I, Ferentinos K, Farolfi A, Koerber SA, Debus J, Vogel ME, Combs SE, Vrachimis A, Morganti AG, Spohn SKB, Shelan M, Aebersold DM, Grosu AL, Ceci F, Henkenberens C, Kroeze SGC, Guckenberger M, Fanti S, Belka C, Bartenstein P, Hruby G, Scharl S, Wiegel T, Emmett L, Arnoux A, Schmidt-Hegemann NS",
      journal: "JAMA Netw Open. 2023 May 1;6(5):e2314748",
      doi: "10.1001/jamanetworkopen.2023.14748",
      pmid: "37219907"
    },
    {
      title: "PSMA-PET/CT-guided salvage radiotherapy in recurrent or persistent prostate cancer and PSA ≥ 0.2 ng/ml",
      titleUrl: "https://pubmed.ncbi.nlm.nih.gov/36905411/",
      authors: "Solomonidou N, Germanou D, Strouthos I, Karagiannis E, Farolfi A, Koerber SA, Debus J, Peeken JC, Vogel ME, Vrachimis A, Spohn SKB, Shelan M, Aebersold D, Grosu AL, Ceci F, Kroeze SGC, Guckenberger M, Fanti S, Belka C, Hruby G, Scharl S, Wiegel T, Bartenstein P, Henkenberens C, Emmett L, Schmidt-Hegemann NS, Ferentinos K, Zamboglou C",
      journal: "Eur J Nucl Med Mol Imaging. 2023 Jul;50(8):2529-2536",
      doi: "10.1007/s00259-023-06185-5",
      pmid: "36905411"
    },
    {
      title: "Salvage radiotherapy is effective in patients with PSMA-PET-negative biochemical recurrence- results of a retrospective study",
      titleUrl: "https://pubmed.ncbi.nlm.nih.gov/37146766/",
      authors: "Scharl S, Zamboglou C, Strouthos I, Farolfi A, Serani F, Lanzafame H, Giuseppe Morganti A, Trapp C, Koerber SA, Debus J, Peeken JC, Vogel MME, Vrachimis A, Spohn SKB, Ruf J, Grosu AL, Ceci F, Fendler WP, Bartenstein P, Kroeze SGC, Guckenberger M, Krafcsik M, Klopscheck C, Fanti S, Hruby G, Emmett L, Belka C, Stief C, Schmidt-Hegemann NS, Henkenberens C, Mayer B, Miksch J, Shelan M, Aebersold DM, Thamm R, Wiegel T",
      journal: "Radiother Oncol. 2023 Jul;184:109678",
      doi: "10.1016/j.radonc.2023.109678",
      pmid: "37146766"
    },
    {
      title: "Development of PSMA-PET-guided CT-based radiomic signature to predict biochemical recurrence after salvage radiotherapy",
      titleUrl: "https://pubmed.ncbi.nlm.nih.gov/36929180/",
      authors: "Spohn SKB, Schmidt-Hegemann NS, Ruf J, Mix M, Benndorf M, Bamberg F, Makowski MR, Kirste S, Rühle A, Nouvel J, Sprave T, Vogel MME, Galitsnaya P, Gschwend JE, Gratzke C, Stief C, Löck S, Zwanenburg A, Trapp C, Bernhardt D, Nekolla SG, Li M, Belka C, Combs SE, Eiber M, Unterrainer L, Unterrainer M, Bartenstein P, Grosu AL, Zamboglou C, Peeken JC",
      journal: "Eur J Nucl Med Mol Imaging. 2023 Jul;50(8):2537-2547",
      doi: "10.1007/s00259-023-06195-3",
      pmid: "36929180"
    }
  ],
  "2022": [
    {
      title: "The maximum standardized uptake value in patients with recurrent or persistent prostate cancer after radical prostatectomy and PSMA-PET-guided salvage radiotherapy-a multicenter retrospective analysis",
      titleUrl: "https://pubmed.ncbi.nlm.nih.gov/35984452/",
      authors: "Spohn SKB, Farolfi A, Schandeler S, Vogel MME, Ruf J, Mix M, Kirste S, Ceci F, Fanti S, Lanzafame H, Serani F, Gratzke C, Sigle A, Combs SE, Bernhardt D, Gschwend JE, Buchner JA, Trapp C, Belka C, Bartenstein P, Unterrainer L, Unterrainer M, Eiber M, Nekolla SG, Schiller K, Grosu AL, Schmidt-Hegemann NS, Zamboglou C, Peeken JC",
      journal: "Eur J Nucl Med Mol Imaging. 2022 Dec;50(1):218-227",
      doi: "10.1007/s00259-022-05931-5",
      pmid: "35984452"
    },
    {
      title: "Metastasis-Free Survival and Patterns of Distant Metastatic Disease After Prostate-Specific Membrane Antigen Positron Emission Tomography (PSMA-PET)-Guided Salvage Radiation Therapy in Recurrent or Persistent Prostate Cancer After Prostatectomy",
      titleUrl: "https://pubmed.ncbi.nlm.nih.gov/35659629/",
      authors: "Zamboglou C, Strouthos I, Sahlmann J, Farolfi A, Serani F, Medici F, Cavallini L, Morganti AG, Trapp C, Koerber SA, Peeken JC, Vogel MME, Schiller K, Combs SE, Eiber M, Vrachimis A, Ferentinos K, Spohn SKB, Kirste S, Gratzke C, Ruf J, Grosu AL, Ceci F, Fendler WP, Miksch J, Kroeze S, Guckenberger M, Lanzafame H, Fanti S, Hruby G, Wiegel T, Emmett L, Schmidt-Hegemann NS, Henkenberens C",
      journal: "Int J Radiat Oncol Biol Phys. 2022 Aug 1;113(5):1015-1024",
      doi: "10.1016/j.ijrobp.2022.04.048",
      pmid: "35659629"
    }
  ]
} 