
'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Clock, Zap, Target, Heart, Dumbbell, Timer, Pause } from 'lucide-react'

interface WorkoutCardProps {
  id: string
  title: string
  description: string
  duration: string
  difficulty: number
  type: 'technique' | 'conditioning' | 'power' | 'endurance'
  rounds: WorkoutRound[]
}

interface WorkoutRound {
  name: string
  duration: string
  rest: string
  description: string
}

function WorkoutCard({ id, title, description, duration, difficulty, type, rounds }: WorkoutCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const typeConfig = {
    technique: { label: 'Technika', icon: Target, color: 'bg-blue-500' },
    conditioning: { label: 'Kondycja', icon: Heart, color: 'bg-red-500' },
    power: { label: 'Moc', icon: Zap, color: 'martial-gradient' },
    endurance: { label: 'Wytrzymałość', icon: Dumbbell, color: 'bg-green-500' }
  }[type]

  const TypeIcon = typeConfig.icon

  const difficultyColor = {
    1: 'difficulty-1',
    2: 'difficulty-2',
    3: 'difficulty-3',
    4: 'difficulty-4',
    5: 'difficulty-5'
  }[difficulty] || 'difficulty-1'

  return (
    <Card className="martial-card">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${typeConfig.color} rounded-lg flex items-center justify-center`}>
              <TypeIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Badge className={difficultyColor}>
                  Poziom {difficulty}
                </Badge>
                <Badge className="bg-gray-100 text-gray-700">
                  {typeConfig.label}
                </Badge>
              </div>
            </div>
          </div>
          <div className="text-right text-sm text-gray-600">
            <Clock className="w-4 h-4 inline mr-1" />
            {duration}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Quick Info */}
        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50/80 rounded-lg">
          <div className="text-center">
            <div className="font-semibold text-gray-900">{rounds.length}</div>
            <div className="text-xs text-gray-600">Rund</div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="text-center">
            <div className="font-semibold text-gray-900">{duration}</div>
            <div className="text-xs text-gray-600">Łącznie</div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="text-center">
            <div className="font-semibold text-gray-900">{typeConfig.label}</div>
            <div className="text-xs text-gray-600">Typ</div>
          </div>
        </div>

        {/* Rounds Details */}
        {isExpanded && (
          <div className="mb-4 animate-fadeInUp">
            <h4 className="font-medium text-gray-900 mb-3">Plan treningu:</h4>
            <div className="space-y-2">
              {rounds.map((round, index) => (
                <div key={index} className="p-3 bg-orange-50/80 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">
                      Runda {index + 1}: {round.name}
                    </span>
                    <div className="text-sm text-gray-600">
                      {round.duration} | Przerwa: {round.rest}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{round.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button 
            className="martial-gradient text-white flex-1"
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? (
              <>
                <Pause className="w-4 h-4 mr-2" />
                Zatrzymaj
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Rozpocznij
              </>
            )}
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="hover:bg-orange-50"
          >
            {isExpanded ? 'Zwiń' : 'Szczegóły'}
          </Button>
        </div>

        {/* Active Timer */}
        {isActive && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg animate-scaleIn">
            <div className="flex items-center justify-center space-x-4">
              <Timer className="w-5 h-5 text-green-600" />
              <span className="text-lg font-semibold text-green-800">
                Trening aktywny - {title}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function BagTrainingWorkouts() {
  const workouts = [
    {
      id: '1',
      title: 'Podstawy techniki',
      description: 'Koncentracja na doskonałości wykonania podstawowych technik. Powolne, kontrolowane ruchy.',
      duration: '15 min',
      difficulty: 1,
      type: 'technique' as const,
      rounds: [
        {
          name: 'Rozgrzewka',
          duration: '3 min',
          rest: '1 min',
          description: 'Delikatne uderzenia, koncentracja na pozycji ciała i technice'
        },
        {
          name: 'Jab i Cross',
          duration: '3 min',
          rest: '1 min',
          description: 'Tylko proste ciosy, skupienie na precyzji i powrocie do gwardii'
        },
        {
          name: 'Hook i Uppercut',
          duration: '3 min',
          rest: '1 min',
          description: 'Ciosy okrężne, kontrolowana prędkość, właściwa trajektoria'
        },
        {
          name: 'Kombinacje podstawowe',
          duration: '3 min',
          rest: '1 min',
          description: 'Jab-Cross, Jab-Cross-Hook, powolne łączenie technik'
        },
        {
          name: 'Cool down',
          duration: '2 min',
          rest: '0 min',
          description: 'Lekkie uderzenia, rozciąganie, głębokie oddychanie'
        }
      ]
    },
    {
      id: '2',
      title: 'Trening kondycyjny',
      description: 'Wysokointensywny trening interwałowy budujący wytrzymałość i kondycję specjalną.',
      duration: '20 min',
      difficulty: 3,
      type: 'conditioning' as const,
      rounds: [
        {
          name: 'Rozgrzewka',
          duration: '2 min',
          rest: '30 sek',
          description: 'Stopniowe zwiększanie intensywności, przygotowanie mięśni'
        },
        {
          name: 'Interwał 1',
          duration: '3 min',
          rest: '1 min',
          description: 'Maksymalna intensywność, różnorodne kombinacje'
        },
        {
          name: 'Interwał 2',
          duration: '3 min',
          rest: '1 min',
          description: 'Kontynuacja wysokiej intensywności, dodanie kopnięć'
        },
        {
          name: 'Interwał 3',
          duration: '3 min',
          rest: '1 min',
          description: 'Finałowy sprint, wszystkie techniki, maksymalne tempo'
        },
        {
          name: 'Interwał 4',
          duration: '3 min',
          rest: '1 min',
          description: 'Walka ze zmęczeniem, utrzymanie techniki przy wysokiej intensywności'
        },
        {
          name: 'Wyciszenie',
          duration: '2 min',
          rest: '0 min',
          description: 'Stopniowe zmniejszanie intensywności, normalizacja oddechu'
        }
      ]
    },
    {
      id: '3',
      title: 'Rozwój mocy',
      description: 'Trening eksplozywnej mocy uderzeń z krótkimi, intensywnymi interwałami.',
      duration: '12 min',
      difficulty: 2,
      type: 'power' as const,
      rounds: [
        {
          name: 'Rozgrzewka',
          duration: '2 min',
          rest: '30 sek',
          description: 'Mobilizacja stawów, aktywacja mięśni'
        },
        {
          name: 'Power - Ręce',
          duration: '30 sek',
          rest: '30 sek',
          description: 'Maksymalna moc uderzeń rękami, 6 serii'
        },
        {
          name: 'Power - Nogi',
          duration: '30 sek',
          rest: '30 sek',
          description: 'Eksplozywne kopnięcia, maksymalna siła, 4 serie'
        },
        {
          name: 'Power - Mix',
          duration: '30 sek',
          rest: '30 sek',
          description: 'Kombinacje ręce + nogi, maksymalna intensywność, 4 serie'
        },
        {
          name: 'Zakończenie',
          duration: '2 min',
          rest: '0 min',
          description: 'Lekkie uderzenia, odprężenie mięśni'
        }
      ]
    },
    {
      id: '4',
      title: 'Wytrzymałość specjalna',
      description: 'Długie rundy budujące wytrzymałość mięśniową specyficzną dla sportów walki.',
      duration: '25 min',
      difficulty: 4,
      type: 'endurance' as const,
      rounds: [
        {
          name: 'Rozgrzewka',
          duration: '3 min',
          rest: '1 min',
          description: 'Stopniowe włączenie w pracę, przygotowanie organizmu'
        },
        {
          name: 'Wytrzymałość 1',
          duration: '5 min',
          rest: '1 min',
          description: 'Stałe tempo, koncentracja na technice przy zmęczeniu'
        },
        {
          name: 'Wytrzymałość 2',
          duration: '5 min',
          rest: '1 min',
          description: 'Utrzymanie tempa, walka z narastającym zmęczeniem'
        },
        {
          name: 'Wytrzymałość 3',
          duration: '5 min',
          rest: '1 min',
          description: 'Test mentalny, przekroczenie bariery zmęczenia'
        },
        {
          name: 'Finał',
          duration: '3 min',
          rest: '0 min',
          description: 'Ostatni wysiłek, zmobilizowanie ostatnich rezerw'
        }
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Gotowe plany treningowe</h2>
        <p className="text-gray-600">
          Wybierz trening dostosowany do swoich celów i poziomu zaawansowania
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {workouts.map((workout, index) => (
          <WorkoutCard 
            key={workout.id}
            {...workout}
          />
        ))}
      </div>

      {/* General Tips */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Ogólne wskazówki do treningu na worku
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div>• Zawsze rozpocznij od rozgrzewki i skończ wyciszeniem</div>
            <div>• Pij wodę regularnie, szczególnie podczas długich treningów</div>
            <div>• Słuchaj swojego ciała - zmęczenie to nie to samo co ból</div>
            <div>• Technika jest ważniejsza niż moc - nie forsuj złego ruchu</div>
            <div>• Oddychaj regularnie podczas wykonywania technik</div>
            <div>• Stopniowo zwiększaj intensywność i długość treningów</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
