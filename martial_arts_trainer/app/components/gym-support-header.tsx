
'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Dumbbell, Heart, Zap, Shield } from 'lucide-react'

export function GymSupportHeader() {
  return (
    <div className="mb-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Wsparcie siłowni</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Ćwiczenia siłowe i kondycyjne wspierające rozwój w sportach walki. 
          Rozgrzewka, rozciąganie i trening specjalizowany.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-video w-full h-80 bg-muted rounded-2xl mb-8 overflow-hidden">
        <Image
          src="https://i.ytimg.com/vi/vN66op0oJd0/maxresdefault.jpg"
          alt="Ćwiczenia siłowe dla sportów walki"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Trening funkcjonalny</h3>
            <p className="text-gray-600 text-sm">
              Ćwiczenia specjalnie dobrane dla potrzeb zawodników sportów walki
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="martial-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 martial-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Siła funkcjonalna</h3>
            <p className="text-gray-600 text-sm">
              Rozwój siły przydatnej w sportach walki
            </p>
          </CardContent>
        </Card>

        <Card className="martial-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Kondycja</h3>
            <p className="text-gray-600 text-sm">
              Budowa wytrzymałości sercowo-naczyniowej
            </p>
          </CardContent>
        </Card>

        <Card className="martial-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Eksplozywność</h3>
            <p className="text-gray-600 text-sm">
              Rozwój szybkości i mocy uderzeń
            </p>
          </CardContent>
        </Card>

        <Card className="martial-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Prewencja</h3>
            <p className="text-gray-600 text-sm">
              Zapobieganie kontuzjom przez wzmacnianie
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-orange-200/50">
        <div className="flex items-center justify-center space-x-8 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">25+</div>
            <div className="text-sm text-gray-600">Ćwiczeń</div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">4</div>
            <div className="text-sm text-gray-600">Kategorie</div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Poziomy trudności</div>
          </div>
        </div>
      </div>
    </div>
  )
}
