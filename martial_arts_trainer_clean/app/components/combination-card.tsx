
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, ArrowRight, Clock, CheckCircle, Circle } from 'lucide-react'

interface CombinationCardProps {
  id: string
  name: string
  nameEn: string
  techniques: string[]
  description: string
  category: 'PUNCHES' | 'KICKS' | 'MIXED'
  difficulty: number
  estimatedTime: number
  delay?: number
}

export function CombinationCard({
  id,
  name,
  nameEn,
  techniques,
  description,
  category,
  difficulty,
  estimatedTime,
  delay = 0
}: CombinationCardProps) {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [isMastered, setIsMastered] = useState(false)

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

  const categoryColors = {
    'PUNCHES': 'bg-blue-500',
    'KICKS': 'bg-green-500',
    'MIXED': 'bg-purple-500'
  }

  const handleStartTraining = () => {
    router.push(`/training/combination/${nameEn}`)
  }

  return (
    <Card className={`technique-card transition-all duration-500 ${
      isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-4'
    }`}>
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMastered(!isMastered)}
            className={`ml-4 ${
              isMastered 
                ? 'text-green-400 hover:text-green-300' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {isMastered ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <Circle className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={`${categoryColors[category]} text-white border-none`}>
            {category}
          </Badge>
          <Badge className={difficultyColor}>
            Level {difficulty}
          </Badge>
          <Badge variant="outline" className="border-gray-600 text-gray-300">
            <Clock className="w-3 h-3 mr-1" />
            {estimatedTime} min
          </Badge>
        </div>

        {/* Technique Flow */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-400 mb-3">TECHNIQUE SEQUENCE</h4>
          <div className="flex items-center flex-wrap gap-2">
            {techniques.map((technique, index) => (
              <div key={index} className="flex items-center">
                <Badge 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 bg-gray-800/50"
                >
                  {technique}
                </Badge>
                {index < techniques.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-gray-500 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={handleStartTraining}
          className="martial-gradient text-white w-full hover:opacity-90"
        >
          <Play className="w-4 h-4 mr-2" />
          Practice Combination
        </Button>
      </CardContent>
    </Card>
  )
}
