
import { Navigation } from '@/components/navigation'
import { BagTrainingHeader } from '@/components/bag-training-header'
import { BagTrainingWorkouts } from '@/components/bag-training-workouts'

export const metadata = {
  title: 'Trening Worka - Martial Arts Trainer',
  description: 'Profesjonalne treningi na worku bokserskim. Rundy treningowe, różne style treningu i wskazówki dotyczące pracy z workiem.',
}

export default function BagTrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <BagTrainingHeader />
        <BagTrainingWorkouts />
      </main>
    </div>
  )
}
