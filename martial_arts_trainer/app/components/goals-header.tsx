
'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Trophy, Target, Plus, Star, Calendar, TrendingUp } from 'lucide-react'

export function GoalsHeader() {
  const [showAddGoal, setShowAddGoal] = useState(false)
  const [newGoalTitle, setNewGoalTitle] = useState('')
  const [newGoalDescription, setNewGoalDescription] = useState('')

  const handleAddGoal = () => {
    // TODO: Implement goal adding logic
    console.log('Adding goal:', { title: newGoalTitle, description: newGoalDescription })
    setNewGoalTitle('')
    setNewGoalDescription('')
    setShowAddGoal(false)
  }

  return (
    <div className="mb-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Twoje cele treningowe</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Wyznaczaj ambitne cele, śledź postępy i celebruj każde osiągnięcie. 
          Prawdziwy wojownik zawsze dąży do doskonałości.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="martial-card">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 martial-gradient rounded-lg flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div className="text-lg font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Aktywne cele</div>
          </CardContent>
        </Card>

        <Card className="martial-card">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div className="text-lg font-bold text-gray-900">2</div>
            <div className="text-sm text-gray-600">Osiągnięte</div>
          </CardContent>
        </Card>

        <Card className="martial-card">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className="text-lg font-bold text-gray-900">15</div>
            <div className="text-sm text-gray-600">Dni do celu</div>
          </CardContent>
        </Card>

        <Card className="martial-card">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="text-lg font-bold text-gray-900">67%</div>
            <div className="text-sm text-gray-600">Średni postęp</div>
          </CardContent>
        </Card>
      </div>

      {/* Add Goal Button */}
      <div className="flex justify-center mb-8">
        <Button
          onClick={() => setShowAddGoal(!showAddGoal)}
          className="martial-gradient text-white"
          size="lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Dodaj nowy cel
        </Button>
      </div>

      {/* Add Goal Form */}
      {showAddGoal && (
        <Card className="martial-card animate-fadeInUp">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Nowy cel treningowy</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tytuł celu
                </label>
                <Input
                  type="text"
                  placeholder="np. Opanuj wszystkie podstawowe kopnięcia"
                  value={newGoalTitle}
                  onChange={(e) => setNewGoalTitle(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Opis i szczegóły
                </label>
                <Input
                  type="text"
                  placeholder="Opisz szczegóły swojego celu..."
                  value={newGoalDescription}
                  onChange={(e) => setNewGoalDescription(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={handleAddGoal}
                  className="martial-gradient text-white flex-1"
                  disabled={!newGoalTitle.trim()}
                >
                  Dodaj cel
                </Button>
                <Button
                  onClick={() => setShowAddGoal(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Anuluj
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Motivation Card */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 mt-6">
        <CardContent className="p-6">
          <div className="flex items-start">
            <Star className="w-6 h-6 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">
                💪 Motywacja dnia
              </h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                "Nie ma szybkich ścieżek do osiągnięcia mistrzostwa. Każda technika wymaga tysięcy powtórzeń, 
                każda kombinacja - setek godzin ćwiczeń. Ale właśnie ta droga czyni Cię prawdziwym wojownikiem."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
