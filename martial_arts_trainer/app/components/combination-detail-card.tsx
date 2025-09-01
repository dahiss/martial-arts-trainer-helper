
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, ArrowRight, Target, Zap, Play, Lightbulb, Clock, CheckCircle, Circle } from 'lucide-react'

interface CombinationDetailCardProps {
  id: string
  name: string
  nameEn: string
  techniques: string[]
  difficulty: number
  description: string
  tips: string[]
  category: 'HAND_ONLY' | 'MIXED'
  delay?: number
}

export function CombinationDetailCard({
  id,
  name,
  nameEn,
  techniques,
  difficulty,
  description,
  tips,
  category,
  delay = 0
}: CombinationDetailCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isPracticed, setIsPracticed] = useState(false)
  const [showTips, setShowTips] = useState(false)

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
    'HAND_ONLY': { label: 'Tylko ręce', icon: Target, color: 'bg-blue-500' },
    'MIXED': { label: 'Ręce + Nogi', icon: Zap, color: 'bg-green-500' }
  }[category]

  const CategoryIcon = categoryInfo.icon

  const techniqueDisplayNames = {
    'jab': 'Jab',
    'cross': 'Cross', 
    'hook': 'Hook',
    'uppercut': 'Uppercut',
    'low_kick': 'Low Kick',
    'middle_kick': 'Middle Kick',
    'high_kick': 'High Kick',
    'front_kick': 'Front Kick'
  }

  return (
    <Card className={`martial-card transition-all duration-500 ${
      isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-4'
    }`}>
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${categoryInfo.color} rounded-lg flex items-center justify-center`}>
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <Badge className={`${difficultyColor} mb-1`}>
                Poziom {difficulty}
              </Badge>
              <Badge className="bg-gray-100 text-gray-700 ml-2">
                <CategoryIcon className="w-3 h-3 mr-1" />
                {categoryInfo.label}
              </Badge>
            </div>
          </div>

          {/* Practiced Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPracticed(!isPracticed)}
            className={`${
              isPracticed 
                ? 'text-green-600 hover:text-green-700' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {isPracticed ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <Circle className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>

        {/* Techniques Flow */}
        <div className="mb-4 p-4 bg-orange-50/80 rounded-lg">
          <div className="flex items-center justify-center space-x-2 flex-wrap">
            {techniques.map((technique, index) => (
              <div key={index} className="flex items-center">
                <div className="px-3 py-2 bg-white rounded-lg shadow-sm border border-orange-200">
                  <span className="font-medium text-gray-800">
                    {techniqueDisplayNames[technique as keyof typeof techniqueDisplayNames] || technique}
                  </span>
                </div>
                {index < techniques.length - 1 && (
                  <ArrowRight className="w-4 h-4 mx-2 text-orange-500" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-2 text-xs text-gray-600">
            <Clock className="w-3 h-3 inline mr-1" />
            {techniques.length} ruchy • {nameEn.replace('_', ' ')}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Tips Section */}
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => setShowTips(!showTips)}
            className="w-full justify-between hover:bg-blue-50 hover:border-blue-300"
          >
            <span className="flex items-center">
              <Lightbulb className="w-4 h-4 mr-2" />
              Wskazówki i porady
            </span>
            <div className={`transform transition-transform duration-200 ${
              showTips ? 'rotate-180' : ''
            }`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </Button>
          
          {showTips && (
            <div className="mt-4 p-4 bg-blue-50/80 rounded-lg animate-fadeInUp">
              <ul className="space-y-3">
                {tips?.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <Target className="w-4 h-4 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button className="martial-gradient text-white flex-1">
            <Play className="w-4 h-4 mr-2" />
            Ćwicz kombinację
          </Button>
          <Button variant="outline" className="hover:bg-gray-50">
            <BookOpen className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress indicator */}
        <div className="mt-4 text-center">
          <div className="text-xs text-gray-500">
            {isPracticed ? 'Kombinacja ćwiczona' : 'Kliknij aby oznaczyć jako ćwiczona'}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
