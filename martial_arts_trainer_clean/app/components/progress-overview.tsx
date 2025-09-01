
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Target, Zap, Award, TrendingUp, Calendar, Clock, Flame } from 'lucide-react'

export function ProgressOverview() {
  const [stats, setStats] = useState({
    techniquesLearned: 0,
    combinationsMastered: 0,
    trainingHours: 0,
    currentStreak: 0,
    skillLevel: 0
  })

  const targetStats = {
    techniquesLearned: 3,
    combinationsMastered: 1,
    trainingHours: 12,
    currentStreak: 5,
    skillLevel: 25
  }

  useEffect(() => {
    const animateStats = () => {
      Object.keys(targetStats).forEach((key) => {
        const target = targetStats[key as keyof typeof targetStats]
        let current = 0
        const increment = target / 30
        
        const interval = setInterval(() => {
          if (current < target) {
            current += increment
            setStats(prev => ({
              ...prev,
              [key]: Math.min(Math.floor(current), target)
            }))
          } else {
            clearInterval(interval)
          }
        }, 50)
      })
    }

    animateStats()
  }, [])

  const progressCards = [
    {
      title: "Techniques Mastered",
      value: stats.techniquesLearned,
      total: 8,
      icon: Target,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      description: "Keep practicing to master all techniques"
    },
    {
      title: "Combinations Learned",
      value: stats.combinationsMastered,
      total: 6,
      icon: Zap,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      description: "Chain techniques for maximum effectiveness"
    },
    {
      title: "Training Hours",
      value: stats.trainingHours,
      icon: Clock,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      description: "Total time spent training",
      suffix: "h"
    },
    {
      title: "Current Streak",
      value: stats.currentStreak,
      icon: Flame,
      color: "text-primary",
      bgColor: "bg-primary/20",
      description: "Days of consistent training",
      suffix: " days"
    }
  ]

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Training Overview</h2>
        <p className="text-gray-300">Your martial arts journey at a glance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {progressCards.map((card, index) => {
          const Icon = card.icon
          const percentage = card.total ? (card.value / card.total) * 100 : card.value
          
          return (
            <Card key={index} className="technique-card animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${card.bgColor}`}>
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${card.color}`}>
                      {card.value}{card.suffix || (card.total ? `/${card.total}` : '')}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-white mb-1">
                      {card.title}
                    </div>
                    <div className="text-xs text-gray-400">
                      {card.description}
                    </div>
                  </div>
                  
                  {card.total && (
                    <Progress 
                      value={percentage} 
                      className="h-2 bg-gray-800"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity */}
      <Card className="technique-card">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-primary" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <Badge className="bg-green-500 text-white">Completed</Badge>
                <span className="text-gray-300">Jab technique training</span>
              </div>
              <span className="text-sm text-gray-400">Today</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <Badge className="bg-blue-500 text-white">Practiced</Badge>
                <span className="text-gray-300">Basic 1-2 combination</span>
              </div>
              <span className="text-sm text-gray-400">Yesterday</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <Badge className="bg-yellow-500 text-white">Started</Badge>
                <span className="text-gray-300">Cross technique learning</span>
              </div>
              <span className="text-sm text-gray-400">2 days ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
