
'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Target, CheckCircle, Plus, Calendar, Trophy, Zap } from 'lucide-react'

export function GoalsGrid() {
  const [goals, setGoals] = useState([
    {
      id: '1',
      title: 'Master Basic Punches',
      description: 'Learn and perfect jab, cross, hook, and uppercut',
      progress: 75,
      target: 4,
      current: 3,
      deadline: '2025-09-15',
      category: 'techniques',
      isCompleted: false
    },
    {
      id: '2',
      title: 'Practice 5 Combinations',
      description: 'Master 5 different strike combinations',
      progress: 20,
      target: 5,
      current: 1,
      deadline: '2025-09-30',
      category: 'combinations',
      isCompleted: false
    },
    {
      id: '3',
      title: 'Train 3 Times This Week',
      description: 'Consistent training schedule',
      progress: 66,
      target: 3,
      current: 2,
      deadline: '2025-09-06',
      category: 'consistency',
      isCompleted: false
    }
  ])

  const toggleGoalCompletion = (goalId: string) => {
    setGoals(prev => prev.map(goal => 
      goal.id === goalId 
        ? { ...goal, isCompleted: !goal.isCompleted, progress: goal.isCompleted ? goal.progress : 100 }
        : goal
    ))
  }

  const categoryColors = {
    techniques: 'bg-green-500',
    combinations: 'bg-blue-500',
    consistency: 'bg-purple-500',
    general: 'bg-primary'
  }

  const categoryIcons = {
    techniques: Target,
    combinations: Zap,
    consistency: Calendar,
    general: Trophy
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Training Goals</h2>
          <p className="text-gray-300">Set and track your martial arts objectives</p>
        </div>
        <Button className="martial-gradient text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal, index) => {
          const Icon = categoryIcons[goal.category as keyof typeof categoryIcons] || Trophy
          const isOverdue = new Date(goal.deadline) < new Date()
          
          return (
            <Card 
              key={goal.id} 
              className={`technique-card animate-fadeInUp ${
                goal.isCompleted ? 'ring-2 ring-green-500/50 bg-green-500/5' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${categoryColors[goal.category as keyof typeof categoryColors] || 'bg-primary'}/20`}>
                      <Icon className={`w-5 h-5 ${
                        goal.isCompleted ? 'text-green-400' : 'text-primary'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-1 ${
                        goal.isCompleted ? 'text-green-400 line-through' : 'text-white'
                      }`}>
                        {goal.title}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleGoalCompletion(goal.id)}
                    className={`${
                      goal.isCompleted 
                        ? 'text-green-400 hover:text-green-300' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </Button>
                </div>

                {/* Progress */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">
                      Progress: {goal.current}/{goal.target}
                    </span>
                    <span className={`text-sm font-medium ${
                      goal.isCompleted ? 'text-green-400' : 'text-primary'
                    }`}>
                      {goal.progress}%
                    </span>
                  </div>
                  <Progress 
                    value={goal.progress} 
                    className={`h-2 bg-gray-800 ${
                      goal.isCompleted ? '[&>div]:bg-green-500' : ''
                    }`}
                  />
                </div>

                {/* Deadline */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Deadline:</span>
                  <Badge 
                    variant="outline"
                    className={`${
                      isOverdue && !goal.isCompleted
                        ? 'border-red-500 text-red-400'
                        : goal.isCompleted
                        ? 'border-green-500 text-green-400'
                        : 'border-gray-600 text-gray-300'
                    }`}
                  >
                    {new Date(goal.deadline).toLocaleDateString()}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
