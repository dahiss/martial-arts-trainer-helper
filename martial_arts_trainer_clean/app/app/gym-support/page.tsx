
import { Navigation } from '@/components/navigation'
import { GymSupportHeader } from '@/components/gym-support-header'
import { GymExercises } from '@/components/gym-exercises'

export const metadata = {
  title: 'Wsparcie Siłowni - Martial Arts Trainer',
  description: 'Ćwiczenia siłowe wspierające sporty walki. Rozgrzewka, rozciąganie i trening kondycji specjalnej.',
}

export default function GymSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <GymSupportHeader />
        <GymExercises />
      </main>
    </div>
  )
}
