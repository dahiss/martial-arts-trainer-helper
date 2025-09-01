
'use client'

import { useState, useEffect } from 'react'
import { CombinationCard } from '@/components/combination-card'

interface Combination {
  id: string
  name: string
  nameEn: string
  techniques: string[]
  description: string
  category: 'PUNCHES' | 'KICKS' | 'MIXED'
  difficulty: number
  estimatedTime: number
}

export function CombinationsGrid() {
  const [combinations, setCombinations] = useState<Combination[]>([])
  const [filteredCombinations, setFilteredCombinations] = useState<Combination[]>([])

  const mockCombinations: Combination[] = [
    {
      id: '1',
      name: 'Basic 1-2',
      nameEn: 'basic_1_2',
      techniques: ['Jab', 'Cross'],
      description: 'The fundamental one-two punch combination. Master this before moving to complex combinations.',
      category: 'PUNCHES',
      difficulty: 1,
      estimatedTime: 2
    },
    {
      id: '2',
      name: 'Jab-Cross-Hook',
      nameEn: 'jab_cross_hook',
      techniques: ['Jab', 'Cross', 'Hook'],
      description: 'Classic three-punch combination ending with a power hook.',
      category: 'PUNCHES',
      difficulty: 2,
      estimatedTime: 3
    },
    {
      id: '3',
      name: 'Low Kick Counter',
      nameEn: 'low_kick_counter',
      techniques: ['Cross', 'Low Kick'],
      description: 'Effective punch-kick combination for distance management.',
      category: 'MIXED',
      difficulty: 2,
      estimatedTime: 3
    },
    {
      id: '4',
      name: 'Thai Traditional',
      nameEn: 'thai_traditional',
      techniques: ['Jab', 'Cross', 'Low Kick', 'Middle Kick'],
      description: 'Traditional Muay Thai flowing combination using hands and legs.',
      category: 'MIXED',
      difficulty: 3,
      estimatedTime: 4
    },
    {
      id: '5',
      name: 'Head Hunter',
      nameEn: 'head_hunter',
      techniques: ['Jab', 'Cross', 'Hook', 'High Kick'],
      description: 'Advanced combination targeting the head with both punches and kicks.',
      category: 'MIXED',
      difficulty: 4,
      estimatedTime: 5
    },
    {
      id: '6',
      name: 'Teep Setup',
      nameEn: 'teep_setup',
      techniques: ['Jab', 'Front Kick'],
      description: 'Simple but effective combination using teep for distance control.',
      category: 'MIXED',
      difficulty: 1,
      estimatedTime: 2
    }
  ]

  useEffect(() => {
    setCombinations(mockCombinations)
    setFilteredCombinations(mockCombinations)
  }, [])

  return (
    <div className="space-y-6">
      {filteredCombinations.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12a8 8 0 01-2.083 5.344M8 12H6a8 8 0 012.917-6.656A7.962 7.962 0 0112 6a7.962 7.962 0 013.083 0A8 8 0 0118 12v0" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No combinations found</h3>
          <p className="text-gray-400">
            Try changing filters or search keywords.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCombinations.map((combination, index) => (
            <CombinationCard 
              key={combination.id}
              {...combination}
              delay={index * 100}
            />
          ))}
        </div>
      )}
    </div>
  )
}
