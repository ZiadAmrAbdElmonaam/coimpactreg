'use client'

import { useRouter } from 'next/navigation'
import { HomeIcon } from '@heroicons/react/24/solid'

export default function NavButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/')}
      className="fixed top-4 left-4 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
      aria-label="Go to homepage"
    >
      <HomeIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
    </button>
  )
} 