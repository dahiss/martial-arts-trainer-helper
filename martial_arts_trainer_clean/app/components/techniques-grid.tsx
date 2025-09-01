
'use client'

import { useState, useEffect } from 'react'
import { TechniqueDetailCard } from '@/components/technique-detail-card'

interface Technique {
  id: string
  name: string
  nameEn: string
  category: 'PUNCHES' | 'KICKS'
  description: string
  keyPoints: string[]
  stepByStep: string[]
  commonMistakes: string[]
  bagWork: string[]
  repsGuidelines: string
  imageUrl: string
  difficulty: number
}

export function TechniquesGrid() {
  const [techniques, setTechniques] = useState<Technique[]>([])
  const [filteredTechniques, setFilteredTechniques] = useState<Technique[]>([])
  const [filters, setFilters] = useState({ category: 'ALL', difficulty: 'ALL' })
  const [searchQuery, setSearchQuery] = useState('')

  // Updated techniques with detailed training information
  const mockTechniques: Technique[] = [
    {
      id: '1',
      name: "Jab",
      nameEn: "jab",
      category: "PUNCHES" as const,
      description: "Straight punch with the lead hand. The fastest and most fundamental punch in martial arts.",
      keyPoints: [
        "Step forward slightly with lead leg",
        "Punch straight forward, rotating wrist slightly",
        "Clench fist at the last moment before impact",
        "Quickly return to defensive position"
      ],
      stepByStep: [
        "Start in orthodox stance - left foot forward, right foot back",
        "Keep your guard up with hands protecting your face",
        "Step forward slightly with your lead (left) foot",
        "Extend your left arm straight forward, rotating fist palm-down",
        "Hit with the first two knuckles, keep wrist straight",
        "Snap the punch back immediately to guard position"
      ],
      commonMistakes: [
        "Dropping guard while punching - Keep right hand up protecting chin!",
        "Telegraphing - Don't pull back before punching, throw straight from guard",
        "Wrong fist position - Punch with first two knuckles, not fingers",
        "No snap back - Return to guard quickly, don't leave arm extended"
      ],
      bagWork: [
        "Light speed jabs - 3 sets x 20 punches (focus on speed, not power)",
        "Power jabs - 3 sets x 10 punches (focus on technique and impact)",
        "Step-in jabs - 3 sets x 15 reps (step forward with each jab)",
        "Double jab - 3 sets x 10 combinations (jab-jab quickly)"
      ],
      repsGuidelines: "Beginners: 3 sets of each drill, 30s rest between sets. Focus on form over speed.",
      imageUrl: "https://cdn.abacus.ai/images/ea652f24-dc2b-4a4e-9690-ada9c77fe036.png",
      difficulty: 1
    },
    {
      id: '2',
      name: "Cross",
      nameEn: "cross",
      category: "PUNCHES" as const,
      description: "Straight punch with the rear hand. The most powerful straight punch, utilizing full body rotation.",
      keyPoints: [
        "Execute strong hip and back rotation",
        "Drive rear hand straight to target",
        "Transfer weight from rear leg to front leg",
        "Quick return to defensive position"
      ],
      stepByStep: [
        "Start in orthodox stance with weight on rear foot",
        "Begin rotation from your back hip and shoulder",
        "Drive your right hand straight forward as body rotates",
        "Transfer weight from right foot to left foot",
        "Rotate fist palm-down on impact",
        "Return to defensive stance immediately"
      ],
      commonMistakes: [
        "Throwing without hip rotation - Power comes from hips, not just arm",
        "Overextending - Don't lean too far forward, maintain balance",
        "Dropping left hand - Keep lead hand up for protection",
        "Wrong timing - Coordinate hip rotation with punch extension"
      ],
      bagWork: [
        "Power crosses - 3 sets x 12 punches (full power, perfect form)",
        "Jab-Cross combo - 3 sets x 15 combinations",
        "Cross + pivot out - 3 sets x 10 reps (punch and move)",
        "Heavy crosses - 2 sets x 8 punches (maximum power)"
      ],
      repsGuidelines: "Focus on hip rotation. Rest 45s between power sets to maintain technique.",
      imageUrl: "https://cdn.abacus.ai/images/2b537ce9-cc06-4013-ab0d-0a508acbdfaf.png",
      difficulty: 2
    },
    {
      id: '3',
      name: "Hook",
      nameEn: "hook",
      category: "PUNCHES" as const,
      description: "Circular punch. A circular strike targeting the side of the head or body.",
      keyPoints: [
        "Bend elbow at approximately 90 degrees",
        "Execute hip and torso rotation",
        "Strike with circular motion",
        "Keep fist horizontal"
      ],
      stepByStep: [
        "Start with lead foot slightly forward",
        "Raise your elbow to shoulder level (90-degree angle)",
        "Rotate your torso and hips in circular motion",
        "Drive your fist in a horizontal arc toward target",
        "Keep elbow angle consistent throughout the punch",
        "Return to guard position following the same path"
      ],
      commonMistakes: [
        "Wide, looping punch - Keep elbow angle tight, punch in shorter arc",
        "No hip rotation - Power comes from core rotation, not just arm",
        "Dropping elbow - Maintain shoulder-level elbow position",
        "Overcommitting - Don't throw yourself off balance"
      ],
      bagWork: [
        "Lead hooks - 3 sets x 15 punches (left hook for orthodox)",
        "Rear hooks - 3 sets x 12 punches (right hook for orthodox)", 
        "Hook to body - 3 sets x 10 punches (target liver area)",
        "Hook combinations - 3 sets x 8 (hook-hook-straight)"
      ],
      repsGuidelines: "Advanced technique. Master jab/cross first. 60s rest between sets.",
      imageUrl: "https://cdn.abacus.ai/images/096ee0b9-913d-4997-8380-95b5ce8fd4c2.png",
      difficulty: 3
    },
    {
      id: '4',
      name: "Uppercut",
      nameEn: "uppercut",
      category: "PUNCHES" as const,
      description: "Upward punch from below. A short vertical punch aimed at the opponent's chin.",
      keyPoints: [
        "Slightly bend knees and lower striking arm",
        "Execute upward movement from legs",
        "Drive fist vertically upward, targeting chin",
        "Synchronize hip rotation with leg extension"
      ],
      stepByStep: [
        "Start in fighting stance, slightly bend knees",
        "Lower your striking hand below guard level",
        "Begin upward drive from your legs and core",
        "Rotate hips upward as you extend legs",
        "Drive fist vertically up toward chin level",
        "Keep elbow close to body throughout movement"
      ],
      commonMistakes: [
        "Too wide angle - Keep close to body, don't make it a wide swing",
        "No leg drive - Power comes from legs pushing up, not just arm",
        "Overextending reach - It's a close-range punch, don't overreach",
        "Wrong target - Aim for chin/solar plexus, not forehead"
      ],
      bagWork: [
        "Short uppercuts - 3 sets x 12 punches (close range power)",
        "Uppercut to body - 3 sets x 15 punches (solar plexus target)",
        "Step-in uppercuts - 3 sets x 10 reps (close distance first)",
        "Combination finish - 3 sets x 8 (jab-cross-uppercut)"
      ],
      repsGuidelines: "Close-range technique. Practice distance control. 45s rest between sets.",
      imageUrl: "https://cdn.abacus.ai/images/4523888f-a42f-46ef-9b3b-0e07c888a95c.png",
      difficulty: 3
    },
    {
      id: '5',
      name: "Low Kick",
      nameEn: "low_kick",
      category: "KICKS" as const,
      description: "Low kick to the outer thigh. Fundamental kick in Muay Thai, designed to damage leg mobility.",
      keyPoints: [
        "Rotate torso and hips toward target",
        "Lift kicking leg with knee pointing outward",
        "Strike with shin into outer thigh",
        "Full rotation on supporting leg"
      ],
      stepByStep: [
        "Start in fighting stance, weight on supporting leg",
        "Lift kicking leg with knee pointing toward target",
        "Begin hip and torso rotation toward target side",
        "Swing leg in arc, striking with shin bone",
        "Target the outer thigh muscle (vastus lateralis)",
        "Follow through with full body rotation, return to stance"
      ],
      commonMistakes: [
        "Kicking with foot instead of shin - Use shin bone for maximum damage",
        "No hip rotation - Power comes from full body turn, not just leg",
        "Wrong target - Hit outer thigh muscle, avoid the knee joint",
        "Poor balance - Keep supporting leg stable, don't lean over"
      ],
      bagWork: [
        "Slow technique kicks - 3 sets x 10 each leg (focus on form)",
        "Power low kicks - 3 sets x 8 each leg (full power, good form)",
        "Step + low kick - 3 sets x 12 each leg (advance and kick)",
        "Low kick combinations - 3 sets x 6 (kick-punch-kick)"
      ],
      repsGuidelines: "Start light, gradually increase power. Condition shins slowly. 60s rest.",
      imageUrl: "https://cdn.abacus.ai/images/c675dbe2-533d-42d0-a75c-003d0cb0b1ef.png",
      difficulty: 2
    },
    {
      id: '6',
      name: "Middle Kick",
      nameEn: "middle_kick",
      category: "KICKS" as const,
      description: "Middle kick to the torso. Effective strike to the ribs and internal organs.",
      keyPoints: [
        "Raise knee to waist level",
        "Target ribs, liver, or spleen",
        "Strike with shin, not the foot",
        "Maintain balance through body rotation"
      ],
      stepByStep: [
        "Start in fighting stance",
        "Raise kicking leg knee to waist/chest level",
        "Point knee toward your target first",
        "Rotate supporting foot and hip toward target",
        "Extend leg horizontally, striking with shin",
        "Aim for ribs, liver (right side), or floating ribs"
      ],
      commonMistakes: [
        "Knee too low - Raise knee high enough for horizontal strike",
        "Hitting with foot - Use shin bone, toes pulled back",
        "No pivot on supporting foot - Must rotate for power and range",
        "Wrong target height - Aim for ribs/liver, not stomach"
      ],
      bagWork: [
        "Technique middle kicks - 3 sets x 8 each leg (perfect form)",
        "Power kicks to ribs - 3 sets x 6 each leg (target specific area)",
        "Fake low, kick middle - 3 sets x 10 each leg (deception drill)",
        "Kick + punch combo - 3 sets x 8 (kick then immediately punch)"
      ],
      repsGuidelines: "Requires flexibility. Warm up thoroughly. Target specific areas. 60s rest.",
      imageUrl: "https://cdn.abacus.ai/images/35cd198e-3be5-42f3-9e64-4e0164813953.png",
      difficulty: 3
    },
    {
      id: '7',
      name: "High Kick",
      nameEn: "high_kick",
      category: "KICKS" as const,
      description: "High kick to the head. Requires good flexibility and technique. Potential knockout strike.",
      keyPoints: [
        "Point knee toward target first, then upward",
        "Target head, jaw, or temple",
        "Full body rotation and momentum usage",
        "High rise on supporting leg toes"
      ],
      stepByStep: [
        "Start in fighting stance, ensure good warm-up",
        "Raise knee as high as possible toward target",
        "Point knee toward opponent's head level",
        "Rotate supporting foot 180° on ball of foot",
        "Extend leg upward in high arc",
        "Strike with shin to head/neck area"
      ],
      commonMistakes: [
        "Poor flexibility - Don't force it, build flexibility gradually",
        "Not enough rotation - Must pivot supporting foot completely",
        "Telegraphing - Don't chamber too long, be explosive",
        "Loss of balance - Keep core tight, don't overcommit"
      ],
      bagWork: [
        "Height practice - 3 sets x 5 each leg (focus on reaching height)",
        "Speed high kicks - 3 sets x 6 each leg (quick chamber and extension)",
        "Setup high kicks - 3 sets x 8 (use punches to set up kick)",
        "Flexibility drill - 2 sets x slow 5 each leg (controlled movements)"
      ],
      repsGuidelines: "Advanced technique. Requires excellent flexibility. Don't rush. 90s rest.",
      imageUrl: "https://cdn.abacus.ai/images/902c28bf-55a6-461e-8f01-d9e471f61ca9.png",
      difficulty: 4
    },
    {
      id: '8',
      name: "Front Kick (Teep)",
      nameEn: "front_kick",
      category: "KICKS" as const,
      description: "Forward kick used to control distance and push away the opponent. Essential defensive technique.",
      keyPoints: [
        "Raise knee of kicking leg toward target",
        "Extend leg with pushing motion",
        "Strike with sole or ball of foot to center of body",
        "Primarily used for distance control"
      ],
      stepByStep: [
        "Start in fighting stance",
        "Raise kicking leg knee toward your target",
        "Keep knee pointing straight toward opponent's center",
        "Extend leg forward in pushing motion (not snapping)",
        "Strike with ball of foot or heel to solar plexus/stomach",
        "Push through target, then retract quickly"
      ],
      commonMistakes: [
        "Kicking too high - Target center mass, not head",
        "Snapping instead of pushing - It's a push kick, not a snap",
        "Wrong foot position - Use ball of foot or heel, not toes",
        "No follow-through - Push through target for maximum effect"
      ],
      bagWork: [
        "Control teeps - 3 sets x 15 each leg (focus on balance and control)",
        "Power teeps - 3 sets x 10 each leg (focus on pushing power)",
        "Teep + retreat - 3 sets x 12 each leg (kick and move back)",
        "Defensive teeps - 3 sets x 10 (use when pressured)"
      ],
      repsGuidelines: "Perfect for beginners. Focus on balance and distance control. 45s rest.",
      imageUrl: "https://cdn.abacus.ai/images/0388b008-cfb5-4a04-8817-7e7e9d567ca2.png",
      difficulty: 2
    }
  ]

  useEffect(() => {
    setTechniques(mockTechniques)
    setFilteredTechniques(mockTechniques)
  }, [])

  useEffect(() => {
    let filtered = [...techniques]

    // Filter by category
    if (filters.category !== 'ALL') {
      filtered = filtered.filter(technique => technique.category === filters.category)
    }

    // Filter by difficulty
    if (filters.difficulty !== 'ALL') {
      filtered = filtered.filter(technique => technique.difficulty === parseInt(filters.difficulty))
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(technique =>
        technique.name.toLowerCase().includes(query) ||
        technique.nameEn.toLowerCase().includes(query) ||
        technique.description.toLowerCase().includes(query)
      )
    }

    setFilteredTechniques(filtered)
  }, [techniques, filters, searchQuery])

  return (
    <div className="space-y-6">
      {filteredTechniques.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12a8 8 0 01-2.083 5.344M8 12H6a8 8 0 012.917-6.656A7.962 7.962 0 0112 6a7.962 7.962 0 013.083 0A8 8 0 0118 12v0" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No techniques found</h3>
          <p className="text-gray-400">
            Try changing filters or search keywords.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTechniques.map((technique, index) => (
            <TechniqueDetailCard 
              key={technique.id}
              {...technique}
              delay={index * 100}
            />
          ))}
        </div>
      )}
    </div>
  )
}
