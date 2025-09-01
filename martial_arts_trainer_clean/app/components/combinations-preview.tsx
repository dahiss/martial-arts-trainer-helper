
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Zap, ArrowRight, Play, Target } from 'lucide-react'

export function CombinationsPreview() {
  const [selectedCombo, setSelectedCombo] = useState(0)

  const combinations = [
    {
      id: '1',
      name: 'Basic 1-2',
      techniques: ['Jab', 'Cross'],
      description: 'Fundamental one-two punch combination',
      difficulty: 1,
      category: 'PUNCHES'
    },
    {
      id: '2', 
      name: 'Jab-Cross-Hook',
      techniques: ['Jab', 'Cross', 'Hook'],
      description: 'Classic boxing combination with power finish',
      difficulty: 2,
      category: 'PUNCHES'
    },
    {
      id: '3',
      name: 'Low Kick Counter',
      techniques: ['Cross', 'Low Kick'],
      description: 'Punch-kick combination for distance management',
      difficulty: 2,
      category: 'MIXED'
    },
    {
      id: '4',
      name: 'Thai Combo',
      techniques: ['Jab', 'Cross', 'Low Kick', 'Middle Kick'],
      description: 'Traditional Muay Thai flowing combination',
      difficulty: 3,
      category: 'MIXED'
    }
  ]

  const difficultyColors: Record<number, string> = {
    1: 'difficulty-1',
    2: 'difficulty-2',
    3: 'difficulty-3',
    4: 'difficulty-4',
    5: 'difficulty-5'
  }

  const categoryColors: Record<string, string> = {
    'PUNCHES': 'bg-blue-500',
    'KICKS': 'bg-green-500',
    'MIXED': 'bg-purple-500'
  }

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Master <span className="martial-gradient bg-clip-text text-transparent">Combinations</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Put your techniques together with flowing combinations. Start simple and progress to advanced sequences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Combination */}
        <Card className="technique-card">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {combinations[selectedCombo].name}
                </h3>
                <p className="text-gray-300 text-sm">
                  {combinations[selectedCombo].description}
                </p>
              </div>
              <div className="flex space-x-2">
                <Badge className={`${categoryColors[combinations[selectedCombo].category]} text-white border-none`}>
                  {combinations[selectedCombo].category}
                </Badge>
                <Badge className={difficultyColors[combinations[selectedCombo].difficulty]}>
                  Level {combinations[selectedCombo].difficulty}
                </Badge>
              </div>
            </div>

            {/* Technique Flow */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-400 mb-3">TECHNIQUE FLOW</h4>
              <div className="flex items-center flex-wrap gap-2">
                {combinations[selectedCombo].techniques.map((technique, index) => (
                  <div key={index} className="flex items-center">
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      {technique}
                    </Badge>
                    {index < combinations[selectedCombo].techniques.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-gray-500 mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <Link href={`/combinations`}>
                <Button className="martial-gradient text-white flex-1">
                  <Play className="w-4 h-4 mr-2" />
                  Practice Combo
                </Button>
              </Link>
              <Button 
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Zap className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Combination List */}
        <div className="space-y-3">
          {combinations.map((combo, index) => {
            const isActive = selectedCombo === index
            
            return (
              <Card
                key={combo.id}
                className={`technique-card cursor-pointer transition-all duration-300 ${
                  isActive ? 'ring-2 ring-primary/50 bg-primary/5' : 'hover:bg-gray-800/50'
                }`}
                onClick={() => setSelectedCombo(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-1 ${
                        isActive ? 'text-primary' : 'text-white'
                      }`}>
                        {combo.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {combo.techniques.length} techniques
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={difficultyColors[combo.difficulty]}>
                        L{combo.difficulty}
                      </Badge>
                      {isActive && (
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}

          {/* View All Button */}
          <Link href="/combinations">
            <Card className="technique-card cursor-pointer hover:bg-gray-800/50 hover:border-primary/50">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-gray-300 hover:text-primary transition-colors">
                  <span className="font-medium">View All Combinations</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
