
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, Calendar, Target } from 'lucide-react'

export function ProgressCharts() {
  const weeklyProgress = [
    { day: 'Mon', techniques: 2, combinations: 1 },
    { day: 'Tue', techniques: 1, combinations: 0 },
    { day: 'Wed', techniques: 3, combinations: 2 },
    { day: 'Thu', techniques: 0, combinations: 0 },
    { day: 'Fri', techniques: 2, combinations: 1 },
    { day: 'Sat', techniques: 4, combinations: 2 },
    { day: 'Sun', techniques: 1, combinations: 1 }
  ]

  const skillLevels = [
    { skill: 'Jab', progress: 85, color: 'bg-green-500' },
    { skill: 'Cross', progress: 70, color: 'bg-blue-500' },
    { skill: 'Hook', progress: 45, color: 'bg-yellow-500' },
    { skill: 'Low Kick', progress: 60, color: 'bg-purple-500' },
    { skill: 'Middle Kick', progress: 30, color: 'bg-red-500' },
    { skill: 'High Kick', progress: 15, color: 'bg-pink-500' }
  ]

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity */}
        <Card className="technique-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary" />
              Weekly Activity
            </h3>
            <div className="space-y-4">
              {weeklyProgress.map((day, index) => (
                <div key={day.day} className="flex items-center justify-between">
                  <span className="text-gray-300 font-medium w-12">{day.day}</span>
                  <div className="flex-1 mx-4">
                    <div className="flex space-x-2">
                      <div 
                        className="bg-primary/70 h-6 rounded"
                        style={{ width: `${Math.max(day.techniques * 15, 5)}px` }}
                        title={`${day.techniques} techniques`}
                      ></div>
                      <div 
                        className="bg-blue-500/70 h-6 rounded"
                        style={{ width: `${Math.max(day.combinations * 20, 5)}px` }}
                        title={`${day.combinations} combinations`}
                      ></div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm w-16 text-right">
                    {day.techniques + day.combinations} total
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary/70 rounded"></div>
                <span className="text-sm text-gray-400">Techniques</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500/70 rounded"></div>
                <span className="text-sm text-gray-400">Combinations</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skill Progress */}
        <Card className="technique-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary" />
              Skill Progress
            </h3>
            <div className="space-y-4">
              {skillLevels.map((skill, index) => (
                <div key={skill.skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.skill}</span>
                    <span className="text-gray-400 text-sm">{skill.progress}%</span>
                  </div>
                  <Progress 
                    value={skill.progress} 
                    className="h-2 bg-gray-800"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
