'use client'

// import Image from 'next/image'
import SitesGrid from '@/components/sites-grid'

export default function SitesMap() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">
        <strong>CO-IMPACT</strong> Sites
      </h1>
      {/* <div className="relative h-[600px] w-full rounded-lg border shadow-lg overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/f60e33_02ad37d2f2c94c46a08d81490b385fdf~mv2.png/v1/fill/w_1960,h_1010,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/f60e33_02ad37d2f2c94c46a08d81490b385fdf~mv2.png"
          alt="iROCK Registry Sites Map"
          fill
          priority
          className="object-contain"
        />
      </div> */}
      <SitesGrid />
    </div>
  )
} 