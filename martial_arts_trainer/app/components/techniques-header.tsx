
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Filter, Target, Zap, TrendingUp } from 'lucide-react'

export function TechniquesHeader() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [difficultyFilter, setDifficultyFilter] = useState('all')
  const [currentStat, setCurrentStat] = useState(0)
  
  const stats = [
    { label: "Total Techniques", value: "8", icon: Target },
    { label: "Hand Strikes", value: "4", icon: Zap },
    { label: "Kicks", value: "4", icon: Target },
    { label: "Difficulty Levels", value: "4", icon: TrendingUp }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <div className="space-y-6 mb-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Martial Arts <span className="martial-gradient bg-clip-text text-transparent">Techniques</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Master the fundamental strikes of Muay Thai, K1, and Kickboxing. 
          Each technique includes detailed instructions and key points for proper execution.
        </p>
      </div>

      {/* Filters */}
      <Card className="technique-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-white">Filter Techniques</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search techniques..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="all" className="text-white">All Categories</SelectItem>
                <SelectItem value="punches" className="text-white">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Hand Strikes
                  </div>
                </SelectItem>
                <SelectItem value="kicks" className="text-white">
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Kicks
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Difficulty Filter */}
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="all" className="text-white">All Levels</SelectItem>
                <SelectItem value="1" className="text-white">Level 1 - Beginner</SelectItem>
                <SelectItem value="2" className="text-white">Level 2 - Basic</SelectItem>
                <SelectItem value="3" className="text-white">Level 3 - Intermediate</SelectItem>
                <SelectItem value="4" className="text-white">Level 4 - Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const isActive = currentStat === index
          
          return (
            <Card 
              key={index}
              className={`technique-card transition-all duration-500 ${
                isActive ? 'ring-2 ring-primary/50 bg-primary/5' : ''
              }`}
            >
              <CardContent className="p-4 text-center">
                <Icon className={`w-6 h-6 mx-auto mb-2 transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-gray-400'
                }`} />
                <div className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-white'
                }`}>
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
    </div>
  )
}
