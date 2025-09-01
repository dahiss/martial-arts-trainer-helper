
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Zap, Trophy, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const [currentStat, setCurrentStat] = useState(0)
  
  const stats = [
    { label: "Techniques to Master", value: "8+", icon: Target },
    { label: "Training Combinations", value: "15+", icon: Zap },
    { label: "Skill Levels", value: "5", icon: Trophy },
    { label: "Progress Tracking", value: "∞", icon: TrendingUp }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8 space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-white">Master</span>{' '}
              <span className="martial-gradient bg-clip-text text-transparent">
                Martial Arts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Learn Muay Thai, K1, and Kickboxing techniques with guided training sessions, 
              progress tracking, and expert tips.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/techniques">
              <Button className="martial-gradient text-white px-8 py-4 text-lg hover:opacity-90 transition-opacity">
                <Target className="w-5 h-5 mr-2" />
                Start Learning Techniques
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/combinations">
              <Button 
                variant="outline" 
                className="px-8 py-4 text-lg border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-primary/50"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore Combinations
              </Button>
            </Link>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const isActive = currentStat === index
              
              return (
                <Card 
                  key={index}
                  className={`technique-card transition-all duration-500 ${
                    isActive ? 'ring-2 ring-primary/50 bg-primary/5' : ''
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-3 transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'text-gray-400'
                    }`} />
                    <div className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'text-white'
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
