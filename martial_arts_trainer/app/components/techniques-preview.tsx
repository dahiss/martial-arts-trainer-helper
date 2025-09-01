
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Target, Zap, ArrowRight, Play } from 'lucide-react'

export function TechniquesPreview() {
  const [currentTechniqueIndex, setCurrentTechniqueIndex] = useState(0)

  const featuredTechniques = [
    {
      id: '1',
      name: 'Jab',
      nameEn: 'jab',
      category: 'PUNCHES',
      description: 'Master the fastest strike in martial arts',
      imageUrl: 'https://cdn.abacus.ai/images/1a8d4700-d3ac-4dd2-be6c-40e65df60df2.png',
      difficulty: 1
    },
    {
      id: '5',
      name: 'Low Kick',
      nameEn: 'low_kick',
      category: 'KICKS',
      description: 'Learn the signature Muay Thai technique',
      imageUrl: 'https://cdn.abacus.ai/images/f5b6910d-305b-4c4d-a3d2-8b1b49f4b4b7.png',
      difficulty: 2
    },
    {
      id: '3',
      name: 'Hook',
      nameEn: 'hook',
      category: 'PUNCHES',
      description: 'Perfect your circular striking power',
      imageUrl: 'https://cdn.abacus.ai/images/33981763-6e7c-4b79-8423-ac037325ab38.png',
      difficulty: 3
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechniqueIndex((prev) => (prev + 1) % featuredTechniques.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [featuredTechniques.length])

  const currentTechnique = featuredTechniques[currentTechniqueIndex]

  const difficultyColor = {
    1: 'difficulty-1',
    2: 'difficulty-2', 
    3: 'difficulty-3',
    4: 'difficulty-4',
    5: 'difficulty-5'
  }[currentTechnique.difficulty] || 'difficulty-1'

  const categoryInfo = {
    'PUNCHES': { label: 'Hand Strikes', icon: Zap, color: 'bg-blue-500' },
    'KICKS': { label: 'Kicks', icon: Target, color: 'bg-green-500' }
  }[currentTechnique.category]

  const CategoryIcon = categoryInfo?.icon || Target

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Learn <span className="martial-gradient bg-clip-text text-transparent">Techniques</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Start with fundamental striking techniques. Each technique includes step-by-step guidance and practice drills.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Featured Technique Card */}
        <Card className="technique-card animate-scaleIn">
          <CardContent className="p-0">
            <div className="relative aspect-video w-full h-64 bg-gray-900 overflow-hidden">
              <Image
                src={currentTechnique.imageUrl}
                alt={`${currentTechnique.name} technique`}
                fill
                className="object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Overlay */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <Badge className={`${categoryInfo?.color || 'bg-gray-500'} text-white border-none`}>
                  <CategoryIcon className="w-3 h-3 mr-1" />
                  {categoryInfo?.label || 'Unknown'}
                </Badge>
                <Badge className={difficultyColor}>
                  Level {currentTechnique.difficulty}
                </Badge>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {currentTechnique.name}
              </h3>
              <p className="text-gray-300 mb-4">
                {currentTechnique.description}
              </p>
              
              <div className="flex space-x-3">
                <Link href={`/training/${currentTechnique.nameEn}`}>
                  <Button className="martial-gradient text-white flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Start Training
                  </Button>
                </Link>
                <Link href="/techniques">
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    View All
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technique Grid */}
        <div className="grid grid-cols-2 gap-4">
          {featuredTechniques.map((technique, index) => {
            const isActive = index === currentTechniqueIndex
            const Icon = technique.category === 'PUNCHES' ? Zap : Target
            
            return (
              <Card
                key={technique.id}
                className={`technique-card cursor-pointer transition-all duration-300 ${
                  isActive ? 'ring-2 ring-primary/50 bg-primary/5' : 'hover:bg-gray-800/50'
                }`}
                onClick={() => setCurrentTechniqueIndex(index)}
              >
                <CardContent className="p-4 text-center">
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${
                    isActive ? 'text-primary' : 'text-gray-400'
                  }`} />
                  <h4 className={`font-semibold mb-1 ${
                    isActive ? 'text-primary' : 'text-white'
                  }`}>
                    {technique.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    Level {technique.difficulty}
                  </p>
                </CardContent>
              </Card>
            )
          })}
          
          {/* View All Card */}
          <Link href="/techniques">
            <Card className="technique-card cursor-pointer hover:bg-gray-800/50 hover:border-primary/50">
              <CardContent className="p-4 text-center flex flex-col items-center justify-center h-full">
                <ArrowRight className="w-8 h-8 text-gray-400 mb-3" />
                <span className="font-semibold text-white">View All</span>
                <span className="text-sm text-gray-400">8 Techniques</span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
