
import { Navigation } from '@/components/navigation'
import { TechniquesGrid } from '@/components/techniques-grid'
import { TechniquesHeader } from '@/components/techniques-header'

export const metadata = {
  title: 'Techniques - Martial Arts Trainer',
  description: 'Learn fundamental striking techniques in Muay Thai, kickboxing and K1. Detailed descriptions, key points and visual aids.',
}

export default function TechniquesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <TechniquesHeader />
        <TechniquesGrid />
      </main>
    </div>
  )
}
