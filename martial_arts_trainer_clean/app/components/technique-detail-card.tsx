
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Circle, Zap, Target, Play, BookOpen, AlertTriangle, Dumbbell, List } from 'lucide-react'

interface TechniqueDetailCardProps {
  id: string
  name: string
  nameEn: string
  category: 'PUNCHES' | 'KICKS'
  description: string
  keyPoints: string[]
  stepByStep: string[]
  commonMistakes: string[]
  bagWork: string[]
  repsGuidelines: string
  imageUrl: string
  difficulty: number
  delay?: number
}

export function TechniqueDetailCard({
  id,
  name,
  nameEn,
  category,
  description,
  keyPoints,
  stepByStep,
  commonMistakes,
  bagWork,
  repsGuidelines,
  imageUrl,
  difficulty,
  delay = 0
}: TechniqueDetailCardProps) {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [isMastered, setIsMastered] = useState(false)
  const [showKeyPoints, setShowKeyPoints] = useState(false)
  const [showStepByStep, setShowStepByStep] = useState(false)
  const [showMistakes, setShowMistakes] = useState(false)
  const [showBagWork, setShowBagWork] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  const difficultyColor = {
    1: 'difficulty-1',
    2: 'difficulty-2', 
    3: 'difficulty-3',
    4: 'difficulty-4',
    5: 'difficulty-5'
  }[difficulty] || 'difficulty-1'

  const categoryInfo = {
    'PUNCHES': { label: 'Hand Strikes', icon: Zap, color: 'bg-blue-500' },
    'KICKS': { label: 'Kicks', icon: Target, color: 'bg-green-500' }
  }[category]

  const CategoryIcon = categoryInfo.icon

  const handleStartTraining = () => {
    router.push(`/training/${nameEn}`)
  }

  return (
    <Card className={`technique-card transition-all duration-500 ${
      isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-4'
    }`}>
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative aspect-video w-full h-64 bg-gray-900 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${name} - ${category === 'PUNCHES' ? 'hand strike' : 'kick'} technique`}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/api/placeholder/600/400';
            }}
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Overlay Info */}
          <div className="absolute top-4 left-4 flex space-x-2">
            <Badge className={`${categoryInfo.color} text-white border-none`}>
              <CategoryIcon className="w-3 h-3 mr-1" />
              {categoryInfo.label}
            </Badge>
            <Badge className={difficultyColor}>
              Level {difficulty}
            </Badge>
          </div>

          {/* Mastery Toggle */}
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMastered(!isMastered)}
              className={`${
                isMastered 
                  ? 'bg-green-500 text-white hover:bg-green-600' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              } backdrop-blur-sm border border-white/20`}
            >
              {isMastered ? (
                <CheckCircle className="w-4 h-4 mr-1" />
              ) : (
                <Circle className="w-4 h-4 mr-1" />
              )}
              {isMastered ? 'Mastered' : 'Mark as Mastered'}
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {description}
            </p>
            <div className="mt-2 text-sm text-gray-500 font-medium uppercase tracking-wide">
              {nameEn.replace('_', ' ')}
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="mb-4">
            <Button
              variant="outline"
              onClick={() => setShowStepByStep(!showStepByStep)}
              className="w-full justify-between hover:bg-blue-500/10 hover:border-blue-500/50 text-gray-300"
            >
              <span className="flex items-center">
                <List className="w-4 h-4 mr-2" />
                Step-by-Step Instructions
              </span>
              <div className={`transform transition-transform duration-200 ${
                showStepByStep ? 'rotate-180' : ''
              }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </Button>
            
            {showStepByStep && (
              <div className="mt-4 p-4 bg-blue-900/20 rounded-lg animate-fadeInUp border border-blue-700/50">
                <ol className="space-y-3">
                  {stepByStep?.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-200 text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Common Mistakes */}
          <div className="mb-4">
            <Button
              variant="outline"
              onClick={() => setShowMistakes(!showMistakes)}
              className="w-full justify-between hover:bg-red-500/10 hover:border-red-500/50 text-gray-300"
            >
              <span className="flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Common Mistakes to Avoid
              </span>
              <div className={`transform transition-transform duration-200 ${
                showMistakes ? 'rotate-180' : ''
              }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </Button>
            
            {showMistakes && (
              <div className="mt-4 p-4 bg-red-900/20 rounded-lg animate-fadeInUp border border-red-700/50">
                <ul className="space-y-3">
                  {commonMistakes?.map((mistake, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-200 text-sm leading-relaxed">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Bag Work Drills */}
          <div className="mb-6">
            <Button
              variant="outline"
              onClick={() => setShowBagWork(!showBagWork)}
              className="w-full justify-between hover:bg-green-500/10 hover:border-green-500/50 text-gray-300"
            >
              <span className="flex items-center">
                <Dumbbell className="w-4 h-4 mr-2" />
                Bag Work Drills
              </span>
              <div className={`transform transition-transform duration-200 ${
                showBagWork ? 'rotate-180' : ''
              }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </Button>
            
            {showBagWork && (
              <div className="mt-4 p-4 bg-green-900/20 rounded-lg animate-fadeInUp border border-green-700/50">
                <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-orange-400 text-sm font-medium">{repsGuidelines}</p>
                </div>
                <ul className="space-y-3">
                  {bagWork?.map((drill, index) => (
                    <li key={index} className="flex items-start">
                      <Target className="w-4 h-4 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-200 text-sm leading-relaxed">{drill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button 
              onClick={handleStartTraining}
              className="martial-gradient text-white flex-1 hover:opacity-90"
            >
              <Play className="w-4 h-4 mr-2" />
              Start Training
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowKeyPoints(!showKeyPoints)}
              className="hover:bg-gray-800 border-gray-600 text-gray-400"
            >
              <BookOpen className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
