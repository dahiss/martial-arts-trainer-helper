
import { Navigation } from '@/components/navigation'
import { ProgressOverview } from '@/components/progress-overview'
import { ProgressCharts } from '@/components/progress-charts'
import { GoalsGrid } from '@/components/goals-grid'

export const metadata = {
  title: 'Progress - Martial Arts Trainer',
  description: 'Track your martial arts progress, view statistics, and set training goals.',
}

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your <span className="martial-gradient bg-clip-text text-transparent">Progress</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Track your martial arts journey, analyze your performance, and set new goals.
          </p>
        </div>
        
        <ProgressOverview />
        <ProgressCharts />
        <GoalsGrid />
      </main>
    </div>
  )
}
