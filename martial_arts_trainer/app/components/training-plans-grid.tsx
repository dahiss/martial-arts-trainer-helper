
'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Calendar, Clock, Target, CheckCircle, ArrowRight, Dumbbell } from 'lucide-react'

interface TrainingPlan {
  id: string
  name: string
  description: string
  level: string
  duration: string
  sessionsPerWeek: number
  techniques: string[]
  focuses: string[]
  progression: string[]
  weeklyStructure: {
    week: number
    focus: string
    techniques: string[]
    bagWork: string[]
  }[]
}

const trainingPlans: TrainingPlan[] = [
  {
    id: 'beginner-fundamentals',
    name: 'Beginner Fundamentals',
    description: 'Perfect starting point for martial arts beginners. Master the basic techniques with proper form.',
    level: 'Beginner',
    duration: '4 weeks',
    sessionsPerWeek: 2,
    techniques: ['Jab', 'Cross', 'Front Kick', 'Low Kick'],
    focuses: ['Proper stance', 'Basic techniques', 'Form over power', 'Balance and coordination'],
    progression: [
      'Week 1-2: Learn proper stance and basic jab/cross',
      'Week 3: Add front kick (teep) for distance control',
      'Week 4: Introduce low kick and simple combinations'
    ],
    weeklyStructure: [
      {
        week: 1,
        focus: 'Stance & Basic Punches',
        techniques: ['Orthodox stance', 'Jab', 'Cross'],
        bagWork: [
          'Session 1: 20 light jabs, 15 crosses, focus on form',
          'Session 2: Jab-cross combinations x15, stance practice'
        ]
      },
      {
        week: 2,
        focus: 'Punch Combinations',
        techniques: ['Jab', 'Cross', 'Jab-Cross combo'],
        bagWork: [
          'Session 1: 3 sets x 15 jab-cross combos',
          'Session 2: Power crosses x12, speed jabs x20'
        ]
      },
      {
        week: 3,
        focus: 'Add Front Kicks',
        techniques: ['Jab', 'Cross', 'Front Kick'],
        bagWork: [
          'Session 1: Jab-cross-teep combinations x10',
          'Session 2: 15 teeps each leg, 20 jab-cross combos'
        ]
      },
      {
        week: 4,
        focus: 'Low Kicks & Flow',
        techniques: ['All basic techniques', 'Low kick'],
        bagWork: [
          'Session 1: 10 low kicks each leg, jab-cross-low kick x8',
          'Session 2: Free flow - mix all techniques learned'
        ]
      }
    ]
  },
  {
    id: 'intermediate-power',
    name: 'Intermediate Power Development',
    description: 'Build power and add advanced techniques. Perfect for those comfortable with basics.',
    level: 'Intermediate',
    duration: '6 weeks',
    sessionsPerWeek: 3,
    techniques: ['All basic techniques', 'Hook', 'Uppercut', 'Middle Kick'],
    focuses: ['Power development', 'Advanced techniques', 'Combination flow', 'Timing and precision'],
    progression: [
      'Week 1-2: Add hooks and uppercuts to arsenal',
      'Week 3-4: Introduce middle kicks and power combinations',
      'Week 5-6: Advanced combinations and sparring preparation'
    ],
    weeklyStructure: [
      {
        week: 1,
        focus: 'Add Hooks',
        techniques: ['Jab', 'Cross', 'Hook'],
        bagWork: [
          'Session 1: 15 lead hooks, 12 rear hooks, form focus',
          'Session 2: Jab-cross-hook combinations x12',
          'Session 3: Power training - heavy crosses and hooks'
        ]
      },
      {
        week: 2,
        focus: 'Add Uppercuts',
        techniques: ['All punches', 'Uppercut'],
        bagWork: [
          'Session 1: 12 uppercuts each hand, close range focus',
          'Session 2: Jab-cross-uppercut combinations x10',
          'Session 3: Hook-uppercut combinations x8'
        ]
      }
    ]
  },
  {
    id: 'advanced-fighter',
    name: 'Advanced Fighter Training',
    description: 'Elite level training with high kicks, complex combinations, and fight conditioning.',
    level: 'Advanced',
    duration: '8 weeks',
    sessionsPerWeek: 4,
    techniques: ['All techniques', 'High Kick', 'Complex combinations'],
    focuses: ['High-level technique', 'Fight conditioning', 'Complex combinations', 'Competition preparation'],
    progression: [
      'Week 1-3: Master high kicks and flexibility',
      'Week 4-6: Complex combinations and timing',
      'Week 7-8: Fight simulation and conditioning'
    ],
    weeklyStructure: [
      {
        week: 1,
        focus: 'High Kick Development',
        techniques: ['High kick', 'Flexibility'],
        bagWork: [
          'Session 1: Flexibility + 5 high kicks each leg',
          'Session 2: Setup high kicks with punches x8',
          'Session 3: Speed high kicks x6 each leg',
          'Session 4: All techniques review + high kicks'
        ]
      }
    ]
  }
]

export function TrainingPlansGrid() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const levelColors = {
    'Beginner': 'bg-green-500',
    'Intermediate': 'bg-yellow-500', 
    'Advanced': 'bg-red-500'
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-8">
        {trainingPlans.map((plan, index) => (
          <Card key={plan.id} className="technique-card">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <Badge className={`${levelColors[plan.level as keyof typeof levelColors]} text-white border-none`}>
                      {plan.level}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                    {plan.description}
                  </p>
                </div>
                
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {plan.duration}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {plan.sessionsPerWeek} sessions/week
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-primary" />
                    Techniques You'll Learn
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {plan.techniques.map((technique, idx) => (
                      <Badge key={idx} variant="outline" className="border-gray-600 text-gray-300">
                        {technique}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Dumbbell className="w-4 h-4 mr-2 text-primary" />
                    Training Focus
                  </h4>
                  <ul className="space-y-1">
                    {plan.focuses.slice(0, 3).map((focus, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                        {focus}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Expandable Details */}
              {selectedPlan === plan.id && (
                <div className="animate-fadeInUp">
                  {/* Progression Timeline */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Progression Timeline</h4>
                    <div className="space-y-3">
                      {plan.progression.map((step, idx) => (
                        <div key={idx} className="flex items-start bg-gray-800/50 p-3 rounded-lg">
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-primary text-black text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-gray-200 text-sm leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weekly Structure */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Weekly Training Structure</h4>
                    <div className="grid gap-4">
                      {plan.weeklyStructure.map((week, idx) => (
                        <div key={idx} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="font-semibold text-white">Week {week.week}</h5>
                            <Badge variant="outline" className="border-primary text-primary">
                              {week.focus}
                            </Badge>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h6 className="text-sm font-medium text-gray-400 mb-2">Techniques</h6>
                              <div className="flex flex-wrap gap-1">
                                {week.techniques.map((tech, techIdx) => (
                                  <Badge key={techIdx} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h6 className="text-sm font-medium text-gray-400 mb-2">Bag Work</h6>
                              <ul className="space-y-1">
                                {week.bagWork.map((work, workIdx) => (
                                  <li key={workIdx} className="text-xs text-gray-300">
                                    • {work}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="flex justify-center">
                <Button
                  onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
                  className="martial-gradient text-white px-8 py-3"
                >
                  {selectedPlan === plan.id ? 'Hide Details' : 'View Training Plan'}
                  <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    selectedPlan === plan.id ? 'rotate-180' : ''
                  }`} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
