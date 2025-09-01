
'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Zap, Clock, Target, Shield, AlertTriangle } from 'lucide-react'

export function BagTrainingHeader() {
  return (
    <div className="mb-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Trening na worku</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Profesjonalne treningi na worku bokserskim dostosowane do różnych celów - 
          od pracy nad techniką po intensywny trening kondycyjny.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-video w-full h-80 bg-muted rounded-2xl mb-8 overflow-hidden">
        <Image
          src="https://i.ytimg.com/vi/9DbL3jgU-mo/maxresdefault.jpg"
          alt="Trening na worku bokserskim"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Podstawy treningu na worku</h3>
            <p className="text-gray-600 text-sm">
              Worek treningowy to najlepsze narzędzie do doskonalenia techniki, mocy uderzeń i kondycji
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="martial-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 martial-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Rozwój mocy</h3>
            <p className="text-gray-600 text-sm">
              Zwiększ siłę i prędkość uderzeń dzięki regularnej pracy na worku
            </p>
          </CardContent>
        </Card>

        <Card className="martial-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Precyzja techniki</h3>
            <p className="text-gray-600 text-sm">
              Doskonał wykonanie wszystkich podstawowych technik uderzeń
            </p>
          </CardContent>
        </Card>

        <Card className="martial-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Wytrzymałość</h3>
            <p className="text-gray-600 text-sm">
              Buduj kondycję specjalną niezbędną w sportach walki
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Safety Tips */}
      <Card className="bg-yellow-50/80 border-yellow-200">
        <CardContent className="p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-3">Bezpieczeństwo podczas treningu</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
                <div className="flex items-start">
                  <Shield className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Zawsze używaj właściwych rękawic (minimum 12 oz)</span>
                </div>
                <div className="flex items-start">
                  <Shield className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Bandażuj nadgarstki przed każdym treningiem</span>
                </div>
                <div className="flex items-start">
                  <Shield className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Rozpoczynaj od rozgrzewki i ćwicz stopniowo</span>
                </div>
                <div className="flex items-start">
                  <Shield className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Słuchaj swojego ciała i rób przerwy gdy potrzebujesz</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
