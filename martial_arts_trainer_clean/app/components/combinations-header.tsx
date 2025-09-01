
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Target, Award, Clock } from 'lucide-react'

export function CombinationsHeader() {
  const stats = [
    {
      icon: Zap,
      label: "Total Combos",
      value: "6",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: Target,
      label: "Difficulty Range",
      value: "1-4",
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      icon: Award,
      label: "Categories",
      value: "3",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    },
    {
      icon: Clock,
      label: "Est. Time",
      value: "2-5min",
      color: "text-primary",
      bgColor: "bg-primary/20"
    }
  ]

  return (
    <div className="space-y-6 mb-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Strike <span className="martial-gradient bg-clip-text text-transparent">Combinations</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Chain techniques together for maximum effectiveness. Practice flowing combinations 
          that connect punches and kicks seamlessly.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          
          return (
            <Card key={index} className="technique-card animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-4 text-center">
                <div className={`p-2 rounded-lg ${stat.bgColor} w-fit mx-auto mb-2`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className={`text-lg font-bold mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Categories Info */}
      <Card className="technique-card">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-primary" />
            Combination Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Badge className="bg-blue-500 text-white mb-2">Hand Strikes</Badge>
              <p className="text-sm text-gray-300">Pure boxing combinations</p>
            </div>
            <div className="text-center">
              <Badge className="bg-green-500 text-white mb-2">Kicks</Badge>
              <p className="text-sm text-gray-300">Leg technique sequences</p>
            </div>
            <div className="text-center">
              <Badge className="bg-purple-500 text-white mb-2">Mixed</Badge>
              <p className="text-sm text-gray-300">Hands and kicks combined</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
