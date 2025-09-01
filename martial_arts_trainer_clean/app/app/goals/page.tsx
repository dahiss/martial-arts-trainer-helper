
import { Navigation } from '@/components/navigation'
import { GoalsHeader } from '@/components/goals-header'
import { GoalsGrid } from '@/components/goals-grid'

export const metadata = {
  title: 'Cele - Martial Arts Trainer',
  description: 'Wyznaczaj i śledź cele treningowe. Motywuj się i celebruj swoje osiągnięcia.',
}

export default function GoalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <GoalsHeader />
        <GoalsGrid />
      </main>
    </div>
  )
}
