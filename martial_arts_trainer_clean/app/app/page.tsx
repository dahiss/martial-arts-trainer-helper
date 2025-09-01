
import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { TechniquesPreview } from '@/components/techniques-preview'
import { CombinationsPreview } from '@/components/combinations-preview'
import { StatsOverview } from '@/components/stats-overview'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Stats Overview */}
        <StatsOverview />
        
        {/* Techniques Preview */}
        <TechniquesPreview />
        
        {/* Combinations Preview */}
        <CombinationsPreview />
      </main>
    </div>
  )
}
