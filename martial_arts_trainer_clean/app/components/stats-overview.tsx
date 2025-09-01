
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Target, TrendingUp, Award, Clock } from 'lucide-react'

export function StatsOverview() {
  const [animatedStats, setAnimatedStats] = useState({
    masteredTechniques: 0,
    totalTrainingTime: 0,
    currentStreak: 0,
    skillLevel: 0
  })

  // Target values
  const targetStats = {
    masteredTechniques: 3,
    totalTrainingTime: 12, // hours
    currentStreak: 5, // days
    skillLevel: 25 // percentage
  }

  useEffect(() => {
    const intervals = Object.keys(targetStats).map((key) => {
      const targetValue = targetStats[key as keyof typeof targetStats]
      const increment = targetValue / 50 // 50 steps animation
      
      let currentValue = 0
      return setInterval(() => {
        if (currentValue < targetValue) {
          currentValue += increment
          setAnimatedStats(prev => ({
            ...prev,
            [key]: Math.min(Math.floor(currentValue), targetValue)
          }))
        }
      }, 30)
    })

    return () => intervals.forEach(interval => clearInterval(interval))
  }, [])

  const stats = [
    {
      icon: Target,
      label: "Techniques Mastered",
      value: animatedStats.masteredTechniques,
      total: 8,
      suffix: "/8",
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      icon: Clock,
      label: "Training Time",
      value: animatedStats.totalTrainingTime,
      suffix: "h",
      color: "text-blue-400", 
      bgColor: "bg-blue-500/20"
    },
    {
      icon: TrendingUp,
      label: "Current Streak",
      value: animatedStats.currentStreak,
      suffix: " days",
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    {
      icon: Award,
      label: "Skill Level",
      value: animatedStats.skillLevel,
      suffix: "%",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    }
  ]

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Your <span className="martial-gradient bg-clip-text text-transparent">Progress</span>
        </h2>
        <p className="text-lg text-gray-300">
          Track your martial arts journey and celebrate your achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const progressValue = stat.total ? (stat.value / stat.total) * 100 : stat.value
          
          return (
            <Card key={index} className="technique-card animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}{stat.suffix}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">
                      {stat.label}
                    </span>
                  </div>
                  
                  {stat.total && (
                    <Progress 
                      value={progressValue} 
                      className="h-2 bg-gray-800"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
