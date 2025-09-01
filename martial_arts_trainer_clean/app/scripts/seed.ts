
import { PrismaClient, TechniqueCategory, CombinationCategory } from '@prisma/client'

const prisma = new PrismaClient()

const techniques = [
  // Uderzenia rękami
  {
    name: "Jab",
    nameEn: "jab",
    category: TechniqueCategory.PUNCHES,
    description: "Prosty cios przednią ręką. Najszybszy i najbardziej podstawowy cios w sportach walki.",
    keyPoints: [
      "Wyprzedź nogę w lekkim wykroku",
      "Uderz prosto do przodu, obracając lekko nadgarstek",
      "Zaciśnij pięść w ostatniej chwili przed uderzeniem",
      "Szybko wróć do pozycji obronnej"
    ],
    imageUrl: "https://i.ytimg.com/vi/nadVy866Gss/maxresdefault.jpg",
    difficulty: 1
  },
  {
    name: "Cross",
    nameEn: "cross",
    category: TechniqueCategory.PUNCHES,
    description: "Prosty cios tylną ręką. Najmocniejszy prosty cios, wykorzystujący pełny obrót ciała.",
    keyPoints: [
      "Wykonaj mocny obrót bioder i pleców",
      "Tylną rękę wyprowadź prosto do celu",
      "Przeciągnij ciężar ciała z tylnej nogi na przednią",
      "Szybki powrót do pozycji obronnej"
    ],
    imageUrl: "https://i.ytimg.com/vi/k4gudMyiddI/maxresdefault.jpg",
    difficulty: 2
  },
  {
    name: "Hook",
    nameEn: "hook",
    category: TechniqueCategory.PUNCHES,
    description: "Cios sierpowy. Uderzenie okrężne celujące w bok głowy lub korpusu.",
    keyPoints: [
      "Ugnij łokieć pod kątem około 90 stopni",
      "Wykonaj obrót bioder i tułowia",
      "Uderzenie wykonaj ruchem okrężnym",
      "Zachowaj poziome położenie pięści"
    ],
    imageUrl: "https://i.ytimg.com/vi/ywzNGhZi3hg/maxresdefault.jpg",
    difficulty: 3
  },
  {
    name: "Uppercut",
    nameEn: "uppercut",
    category: TechniqueCategory.PUNCHES,
    description: "Cios z dołu. Krótki cios pionowy skierowany w podbródek przeciwnika.",
    keyPoints: [
      "Lekko ugnij kolana i obniż ramię uderzające",
      "Wykonaj ruch wyprostowujący z nóg w górę",
      "Pięść prowadź pionowo w górę, celując w podbródek",
      "Synchronizuj obrót bioder z wyprostowaniem nóg"
    ],
    imageUrl: "https://i.ytimg.com/vi/VcXq8TJbOE8/hq720.jpg",
    difficulty: 3
  },
  // Kopnięcia
  {
    name: "Low Kick",
    nameEn: "low_kick",
    category: TechniqueCategory.KICKS,
    description: "Kopnięcie niskie w zewnętrzną część uda. Podstawowe kopnięcie w Muay Thai.",
    keyPoints: [
      "Obróć tułów i biodra w kierunku celu",
      "Unieś kopającą nogę z kolanem skierowanym na zewnątrz",
      "Uderz goleniem w zewnętrzną część uda",
      "Pełny obrót na nodze podporowej"
    ],
    imageUrl: "https://i.ytimg.com/vi/mXb5Nolg30Y/maxresdefault.jpg",
    difficulty: 2
  },
  {
    name: "Middle Kick",
    nameEn: "middle_kick",
    category: TechniqueCategory.KICKS,
    description: "Kopnięcie środkowe w tułów. Skuteczne kopnięcie w żebra i organy wewnętrzne.",
    keyPoints: [
      "Unieś kolano do poziomu pasa",
      "Celuj w żebra, wątrobę lub śledzionę",
      "Uderz goleniem, nie podbiciem",
      "Utrzymuj równowagę przez obrót ciała"
    ],
    imageUrl: "https://i.ytimg.com/vi/qZg4afd93wM/maxresdefault.jpg",
    difficulty: 3
  },
  {
    name: "High Kick",
    nameEn: "high_kick",
    category: TechniqueCategory.KICKS,
    description: "Kopnięcie wysokie w głowę. Wymaga dobrej elastyczności i techniki.",
    keyPoints: [
      "Kolano skieruj najpierw w stronę celu, potem w górę",
      "Celuj w głowę, szczękę lub skroń",
      "Pełny obrót ciała i wykorzystanie momentum",
      "Wysokie podniesienie nogi podporowej na palcach"
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Muay_Thai_high_kick.jpg",
    difficulty: 4
  },
  {
    name: "Front Kick (Teep)",
    nameEn: "front_kick",
    category: TechniqueCategory.KICKS,
    description: "Kopnięcie frontalne służące do kontroli dystansu i odpychania przeciwnika.",
    keyPoints: [
      "Unieś kolano kopającej nogi w kierunku celu",
      "Wyprostuj nogę ruchem podobnym do pchnięcia",
      "Uderz podeszwą lub podbiciem w środek ciała",
      "Głównie służy do kontroli dystansu"
    ],
    imageUrl: "https://i.ytimg.com/vi/_oZ9_3FFnZs/maxresdefault.jpg",
    difficulty: 2
  }
]

const combinations = [
  {
    name: "Jab - Cross",
    nameEn: "jab_cross",
    techniques: ["jab", "cross"],
    difficulty: 1,
    description: "Najprostsza i najefektywniejsza kombinacja. Szybki jab otwiera obronę, mocny cross kończy akcję.",
    tips: [
      "Jab ma otworzyć obronę przeciwnika",
      "Cross wyprowadzaj z pełną mocą",
      "Utrzymuj gwardię po każdym uderzeniu"
    ],
    category: CombinationCategory.HAND_ONLY
  },
  {
    name: "Jab - Cross - Hook",
    nameEn: "jab_cross_hook",
    techniques: ["jab", "cross", "hook"],
    difficulty: 2,
    description: "Klasyczna kombinacja trzech uderzeń. Hook lewy po cross prawym dla prawszów.",
    tips: [
      "Każde uderzenie otwiera drogę do następnego",
      "Hook wyprowadzaj po stronie przeciwnej niż cross",
      "Kontroluj dystans podczas kombinacji"
    ],
    category: CombinationCategory.HAND_ONLY
  },
  {
    name: "Jab - Cross - Low Kick",
    nameEn: "jab_cross_low_kick",
    techniques: ["jab", "cross", "low_kick"],
    difficulty: 2,
    description: "Kombinacja ręce + nogi. Ciosy otwierają obronę górną, kopnięcie atakuje dolną część.",
    tips: [
      "Po cross natychmiast przejdź do kopnięcia",
      "Low kick po przeciwnej stronie niż cross",
      "Naturalna sekwencja ruchu"
    ],
    category: CombinationCategory.MIXED
  },
  {
    name: "Low Kick - Cross",
    nameEn: "low_kick_cross",
    techniques: ["low_kick", "cross"],
    difficulty: 2,
    description: "Kopnięcie osłabia mobilność, cios kończy akcję. Skuteczne przeciwko agresywnym przeciwnikom.",
    tips: [
      "Low kick ma spowolnić przeciwnika",
      "Cross natychmiast po kopnięciu",
      "Wykorzystaj osłabioną mobilność przeciwnika"
    ],
    category: CombinationCategory.MIXED
  },
  {
    name: "Cross - Middle Kick",
    nameEn: "cross_middle_kick",
    techniques: ["cross", "middle_kick"],
    difficulty: 3,
    description: "Cios otwiera obronę boczną, kopnięcie w niezabezpieczone żebra. Potężna kombinacja nokautowa.",
    tips: [
      "Cross ma odwrócić uwagę od kopnięcia",
      "Middle kick po tej samej stronie co cross",
      "Jeden z najmocniejszych finishy"
    ],
    category: CombinationCategory.MIXED
  }
]

async function main() {
  console.log('Rozpoczynam seedowanie bazy danych...')

  // Wyczyść istniejące dane
  await prisma.techniqueProgress.deleteMany()
  await prisma.technique.deleteMany()
  await prisma.combination.deleteMany()

  // Dodaj techniki
  for (const technique of techniques) {
    await prisma.technique.create({
      data: technique
    })
  }
  console.log(`Dodano ${techniques.length} technik`)

  // Dodaj kombinacje
  for (const combination of combinations) {
    await prisma.combination.create({
      data: combination
    })
  }
  console.log(`Dodano ${combinations.length} kombinacji`)

  console.log('Seedowanie zakończone pomyślnie!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
