
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, Play, Pause, RotateCcw, CheckCircle, Target, Timer, Zap, List, AlertTriangle, Dumbbell } from 'lucide-react'

interface Technique {
  id: string
  name: string
  category: 'PUNCHES' | 'KICKS'
  description: string
  keyPoints: string[]
  stepByStep: string[]
  commonMistakes: string[]
  bagWork: string[]
  repsGuidelines: string
  imageUrl: string
  difficulty: number
}

interface TrainingSessionProps {
  technique: Technique
}

export function TrainingSession({ technique }: TrainingSessionProps) {
  const router = useRouter()
  const [isTraining, setIsTraining] = useState(false)
  const [currentRound, setCurrentRound] = useState(1)
  const [timeLeft, setTimeLeft] = useState(180) // 3 minutes
  const [totalRounds] = useState(3)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isTraining && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => {
          const newTime = prevTime - 1
          setProgress(((180 - newTime) / 180) * 100)
          return newTime
        })
      }, 1000)
    } else if (timeLeft === 0 && isTraining) {
      // Round finished
      setIsTraining(false)
      if (currentRound < totalRounds) {
        // Auto advance to next round after 30 second rest
        setTimeout(() => {
          setCurrentRound(prev => prev + 1)
          setTimeLeft(180)
          setProgress(0)
        }, 30000)
      }
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isTraining, timeLeft, currentRound, totalRounds])

  const startTraining = () => {
    setIsTraining(true)
  }

  const pauseTraining = () => {
    setIsTraining(false)
  }

  const resetTraining = () => {
    setIsTraining(false)
    setTimeLeft(180)
    setProgress(0)
    setCurrentRound(1)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const difficultyColor = {
    1: 'difficulty-1',
    2: 'difficulty-2', 
    3: 'difficulty-3',
    4: 'difficulty-4',
    5: 'difficulty-5'
  }[technique.difficulty] || 'difficulty-1'

  const categoryInfo = {
    'PUNCHES': { label: 'Hand Strikes', icon: Zap, color: 'bg-blue-500' },
    'KICKS': { label: 'Kicks', icon: Target, color: 'bg-green-500' }
  }[technique.category]

  const CategoryIcon = categoryInfo?.icon || Target

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="ghost"
          onClick={() => router.push('/techniques')}
          className="text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Techniques
        </Button>
      </div>

      {/* Training Session Card */}
      <Card className="technique-card mb-8">
        <CardContent className="p-0">
          {/* Technique Image */}
          <div className="relative aspect-video w-full h-80 bg-muted overflow-hidden">
            <Image
              src={technique.imageUrl}
              alt={`${technique.name} technique demonstration`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Overlay Info */}
            <div className="absolute top-4 left-4 flex space-x-2">
              <Badge className={`${categoryInfo?.color || 'bg-gray-500'} text-white border-none`}>
                <CategoryIcon className="w-3 h-3 mr-1" />
                {categoryInfo?.label || 'Unknown'}
              </Badge>
              <Badge className={difficultyColor}>
                Level {technique.difficulty}
              </Badge>
            </div>

            {/* Training Timer Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">Round {currentRound}/{totalRounds}</span>
                  <span className="text-2xl font-bold text-white">{formatTime(timeLeft)}</span>
                </div>
                <Progress value={progress} className="h-2 bg-gray-700" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-3">{technique.name}</h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                {technique.description}
              </p>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <List className="w-5 h-5 mr-2 text-blue-400" />
                Step-by-Step Instructions
              </h3>
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/50">
                <ol className="space-y-3">
                  {technique.stepByStep?.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-200 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                Common Mistakes to Avoid
              </h3>
              <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/50">
                <ul className="space-y-3">
                  {technique.commonMistakes?.map((mistake, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-200 leading-relaxed">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bag Work Drills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Dumbbell className="w-5 h-5 mr-2 text-green-400" />
                Bag Work Drills
              </h3>
              <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/50">
                <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
                  <p className="text-orange-400 font-medium">{technique.repsGuidelines}</p>
                </div>
                <ul className="space-y-3">
                  {technique.bagWork?.map((drill, index) => (
                    <li key={index} className="flex items-start">
                      <Target className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-200 leading-relaxed">{drill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Training Controls */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                {!isTraining ? (
                  <Button 
                    onClick={startTraining}
                    className="martial-gradient text-white px-8 py-3 text-lg"
                    disabled={timeLeft === 0 && currentRound === totalRounds}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {timeLeft === 180 ? 'Start Training' : 'Resume Training'}
                  </Button>
                ) : (
                  <Button 
                    onClick={pauseTraining}
                    variant="outline"
                    className="px-8 py-3 text-lg border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
                  >
                    <Pause className="w-5 h-5 mr-2" />
                    Pause Training
                  </Button>
                )}
                
                <Button 
                  onClick={resetTraining}
                  variant="outline"
                  className="px-6 py-3 border-gray-600 text-gray-400 hover:bg-gray-800"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Training Status */}
              <div className="text-center">
                {isTraining && (
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <Timer className="w-4 h-4 animate-pulse" />
                    <span className="font-medium">Training in progress...</span>
                  </div>
                )}
                {timeLeft === 0 && currentRound < totalRounds && (
                  <div className="text-yellow-400 font-medium">
                    Round {currentRound} complete! Next round starting in 30 seconds...
                  </div>
                )}
                {timeLeft === 0 && currentRound === totalRounds && (
                  <div className="text-green-400 font-medium flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Training session complete! Great work!
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
