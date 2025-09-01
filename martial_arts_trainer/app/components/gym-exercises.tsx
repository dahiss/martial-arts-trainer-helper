
'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dumbbell, Heart, Zap, Shield, Play, Clock, Target, ChevronDown, ChevronUp } from 'lucide-react'

interface Exercise {
  id: string
  name: string
  category: 'strength' | 'cardio' | 'power' | 'flexibility'
  difficulty: number
  description: string
  instructions: string[]
  sets: string
  reps: string
  rest: string
  tips: string[]
}

interface ExerciseCategoryProps {
  title: string
  icon: React.ComponentType<any>
  color: string
  exercises: Exercise[]
  description: string
}

function ExerciseCard({ exercise }: { exercise: Exercise }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const difficultyColor = {
    1: 'difficulty-1',
    2: 'difficulty-2',
    3: 'difficulty-3',
    4: 'difficulty-4',
    5: 'difficulty-5'
  }[exercise.difficulty] || 'difficulty-1'

  return (
    <Card className="martial-card">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900">{exercise.name}</h4>
          <Badge className={difficultyColor}>
            Poziom {exercise.difficulty}
          </Badge>
        </div>

        {/* Quick Info */}
        <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
          <span>{exercise.sets}</span>
          <span>•</span>
          <span>{exercise.reps}</span>
          <span>•</span>
          <span>Przerwa: {exercise.rest}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3">{exercise.description}</p>

        {/* Expand Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full justify-between text-xs"
        >
          <span>Instrukcje wykonania</span>
          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </Button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 animate-fadeInUp">
            {/* Instructions */}
            <div className="mb-4">
              <h5 className="font-medium text-gray-900 mb-2">Wykonanie:</h5>
              <ol className="text-sm text-gray-600 space-y-1">
                {exercise.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-medium text-orange-600 mr-2">{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tips */}
            {exercise.tips.length > 0 && (
              <div className="p-3 bg-blue-50/80 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2 flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  Wskazówki:
                </h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  {exercise.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function ExerciseCategory({ title, icon: Icon, color, exercises, description }: ExerciseCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-600 hover:text-gray-900"
        >
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </Button>
      </div>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeInUp">
          {exercises.map(exercise => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  )
}

export function GymExercises() {
  const exercises = {
    strength: [
      {
        id: '1',
        name: 'Pompki klasyczne',
        category: 'strength' as const,
        difficulty: 1,
        description: 'Podstawowe ćwiczenie wzmacniające klatkę piersiową, ramiona i triceps.',
        instructions: [
          'Ustaw się w pozycji podporu przodem',
          'Dłonie rozstaw na szerokość ramion',
          'Opuszczaj ciało do momentu dotknięcia klatką podłogi',
          'Wypychaj się w górę do pełnego wyprostu rąk'
        ],
        sets: '3 serie',
        reps: '15-20 powtórzeń',
        rest: '60 sek',
        tips: [
          'Utrzymuj proste plecy przez całe ćwiczenie',
          'Kontroluj tempo - 2 sekundy w dół, 1 sekunda w górę',
          'Oddychaj - wdech w dół, wydech w górę'
        ]
      },
      {
        id: '2',
        name: 'Przysiady z wyskokiem',
        category: 'strength' as const,
        difficulty: 2,
        description: 'Eksplozywne ćwiczenie rozwijające siłę i moc nóg.',
        instructions: [
          'Stań w rozkroku na szerokość ramion',
          'Wykonaj głęboki przysiad',
          'Eksplozywnie wyskocz w górę',
          'Ląduj miękko i natychmiast przejdź do następnego przysiadu'
        ],
        sets: '4 serie',
        reps: '10-15 wyskoków',
        rest: '90 sek',
        tips: [
          'Ląduj na całych stopach, nie tylko na palcach',
          'Kontroluj lądowanie - cisza to klucz',
          'Używaj rąk do pomocy w wyskoku'
        ]
      },
      {
        id: '3',
        name: 'Deska',
        category: 'strength' as const,
        difficulty: 1,
        description: 'Izometryczne wzmacnianie mięśni core - podstawa stabilności.',
        instructions: [
          'Ustaw się w pozycji jak do pompek',
          'Oprzyj się na przedramionach',
          'Utrzymuj proste ciało od głowy do pięt',
          'Napinaj mięśnie brzucha przez cały czas'
        ],
        sets: '3 serie',
        reps: '30-60 sekund',
        rest: '60 sek',
        tips: [
          'Nie unoś pośladków za wysoko',
          'Oddychaj spokojnie',
          'Skupuj się na napięciu brzucha'
        ]
      }
    ],
    cardio: [
      {
        id: '4',
        name: 'High knees (wysokie kolana)',
        category: 'cardio' as const,
        difficulty: 1,
        description: 'Intensywne ćwiczenie kardio poprawiające koordynację i wytrzymałość.',
        instructions: [
          'Stań prosto, ręce przed sobą na wysokości pasa',
          'Szybko unoś kolana do wysokości dłoni',
          'Utrzymuj szybkie tempo',
          'Ląduj na przodostopiu'
        ],
        sets: '4 serie',
        reps: '30 sekund',
        rest: '30 sek',
        tips: [
          'Utrzymuj wyprostowaną sylwetkę',
          'Szybkie małe kroki zamiast dużych skoków',
          'Użyj rąk do pomocy w utrzymaniu rytmu'
        ]
      },
      {
        id: '5',
        name: 'Burpees',
        category: 'cardio' as const,
        difficulty: 3,
        description: 'Kompleksowe ćwiczenie angażujące całe ciało i budujące wytrzymałość.',
        instructions: [
          'Zrób przysiad i oprzyj dłonie o podłogę',
          'Wyskocz nogami do tyłu do pozycji pompki',
          'Wykonaj jedną pompkę (opcjonalnie)',
          'Wyskocz nogami z powrotem do przysiadu',
          'Wyskocz w górę z rękami nad głową'
        ],
        sets: '3 serie',
        reps: '8-12 powtórzeń',
        rest: '120 sek',
        tips: [
          'Rozpocznij od wersji bez pompki',
          'Kontroluj każdy etap ruchu',
          'Oddychaj regularnie przez cały cykl'
        ]
      }
    ],
    power: [
      {
        id: '6',
        name: 'Rzuty piłką lekarską',
        category: 'power' as const,
        difficulty: 2,
        description: 'Rozwój eksplozywnej mocy tułowia podobnej do ciosów.',
        instructions: [
          'Stań w pozycji bojowej z piłką lekarską',
          'Unieś piłkę nad głowę',
          'Rzuć piłką o podłogę z maksymalną mocą',
          'Podnieś piłkę i powtórz'
        ],
        sets: '4 serie',
        reps: '6-8 rzutów',
        rest: '90 sek',
        tips: [
          'Używaj całego ciała do rzutu',
          'Kontroluj piłkę podczas podnoszenia',
          'Symuluj ruch podobny do uderzenia z góry'
        ]
      }
    ],
    flexibility: [
      {
        id: '7',
        name: 'Rozciąganie czworogłowego',
        category: 'flexibility' as const,
        difficulty: 1,
        description: 'Rozciąganie przedniej części uda - kluczowe dla kopnięć.',
        instructions: [
          'Stań na jednej nodze przy ścianie dla równowagi',
          'Zegnij drugą nogę i chwyć stopę ręką',
          'Pociągnij piętę w kierunku pośladków',
          'Utrzymaj pozycję i zmień nogę'
        ],
        sets: '2 serie',
        reps: '45 sekund każda noga',
        rest: '15 sek',
        tips: [
          'Nie forsuj - rozciągaj stopniowo',
          'Utrzymuj biodra skierowane do przodu',
          'Oddychaj głęboko podczas rozciągania'
        ]
      },
      {
        id: '8',
        name: 'Spagat boczny',
        category: 'flexibility' as const,
        difficulty: 3,
        description: 'Zaawansowane rozciąganie przywodzicieli potrzebne do wysokich kopnięć.',
        instructions: [
          'Usiądź na podłodze z nogami maksymalnie rozstawionymi',
          'Pochyl się do przodu utrzymując plecy proste',
          'Stopniowo zwiększaj zasięg pochylenia',
          'Trzymaj pozycję przez określony czas'
        ],
        sets: '2 serie',
        reps: '60-90 sekund',
        rest: '60 sek',
        tips: [
          'NIGDY nie forsuj - ryzyko kontuzji',
          'Rozgrzej się przed rozciąganiem',
          'Postęp mierz tygodniami, nie minutami'
        ]
      }
    ]
  }

  return (
    <div className="space-y-8">
      <ExerciseCategory
        title="Ćwiczenia siłowe"
        icon={Dumbbell}
        color="martial-gradient"
        exercises={exercises.strength}
        description="Wzmacnianie mięśni kluczowych dla sportów walki"
      />

      <ExerciseCategory
        title="Trening kardio"
        icon={Heart}
        color="bg-red-500"
        exercises={exercises.cardio}
        description="Budowa wytrzymałości sercowo-naczyniowej"
      />

      <ExerciseCategory
        title="Rozwój mocy"
        icon={Zap}
        color="bg-blue-500"
        exercises={exercises.power}
        description="Ćwiczenia eksplozywne zwiększające siłę uderzeń"
      />

      <ExerciseCategory
        title="Elastyczność"
        icon={Shield}
        color="bg-green-500"
        exercises={exercises.flexibility}
        description="Rozciąganie niezbędne dla technik kopnięć"
      />

      {/* General Workout Plan */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-purple-900 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Przykładowy plan tygodnia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-purple-800">Poniedziałek - Siła + Kardio</div>
              <div className="text-purple-700 pl-4">• 3x Pompki, Przysiady, Deska • 4x High knees</div>
              
              <div className="font-medium text-purple-800 pt-2">Środa - Moc + Elastyczność</div>
              <div className="text-purple-700 pl-4">• Rzuty piłką • Rozciąganie kompletne</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-purple-800">Piątek - Full Body</div>
              <div className="text-purple-700 pl-4">• Mix wszystkich kategorii • Burpees na koniec</div>
              
              <div className="font-medium text-purple-800 pt-2">Weekend - Aktywny odpoczynek</div>
              <div className="text-purple-700 pl-4">• Długie rozciąganie • Delikatne kardio</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
