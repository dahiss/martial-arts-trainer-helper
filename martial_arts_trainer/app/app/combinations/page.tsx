
import { Navigation } from '@/components/navigation'
import { CombinationsGrid } from '@/components/combinations-grid'
import { CombinationsHeader } from '@/components/combinations-header'

export const metadata = {
  title: 'Combinations - Martial Arts Trainer',
  description: 'Learn effective strike combinations for Muay Thai, kickboxing and K1. From basic one-two punches to advanced flowing sequences.',
}

export default function CombinationsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <CombinationsHeader />
        <CombinationsGrid />
      </main>
    </div>
  )
}
