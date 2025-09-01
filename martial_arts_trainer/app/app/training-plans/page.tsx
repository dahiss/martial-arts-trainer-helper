
'use client'

import { Navigation } from '@/components/navigation'
import { TrainingPlansGrid } from '@/components/training-plans-grid'

export default function TrainingPlansPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Training Plans
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Structured training programs designed for progressive learning. 
            From beginner fundamentals to advanced combinations.
          </p>
        </div>
        
        <TrainingPlansGrid />
      </main>
    </div>
  )
}
