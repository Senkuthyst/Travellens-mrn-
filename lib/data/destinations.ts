export interface CulturalAlert {
  id: string
  type: 'critical' | 'warning' | 'info'
  category: 'clothing' | 'photography' | 'behavior' | 'religious' | 'social'
  title: string
  description: string
  context: string
}

export interface QuizQuestion {
  id: string
  scenario: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Quiz {
  id: string
  title: string
  description: string
  userType?: 'traveler' | 'teacher' | 'pilgrim'
  questions: QuizQuestion[]
  passingScore: number
  reward: string
  unlocks?: string
}

export interface VRScene {
  id: string
  name: string
  thumbnail: string
  timeOfDay: string[]
  hasFestival: boolean
  crowdLevel: 'low' | 'medium' | 'high'
  hotspots: {
    id: string
    x: number
    y: number
    title: string
    description: string
  }[]
}

export interface LocalPhrase {
  phrase: string
  pronunciation: string
  meaning: string
}

export interface Accommodation {
  name: string
  type: string
  priceRange: string
  communityBenefit: string
  ecoFriendly: boolean
}

export interface Transport {
  type: string
  description: string
  cost: string
  ecoFriendly: boolean
}

export interface DosDonts {
  category: string
  dos: string[]
  donts: string[]
}

export interface Destination {
  id: string
  name: string
  region: string
  country: string
  coordinates: { lat: number; lng: number }
  images: {
    hero: string
    gallery: string[]
    reality: string
    instagram: string
  }
  description: string
  historicalSignificance: string
  culturalSignificance: string
  bestSeason: string
  visitingRules: string[]
  commonMistakes: string[]
  culturalAlerts: CulturalAlert[]
  vrScenes: VRScene[]
  quizzes: Quiz[]
  localPhrases: LocalPhrase[]
  accommodations: Accommodation[]
  transport: Transport[]
  dosAndDonts: DosDonts[]
  crowdLevel: 'low' | 'medium' | 'high'
  unlockRequirement: number
  festivals: string[]
  endangeredTraditions: string[]
}

export const destinations: Destination[] = [
  {
    id: 'lumbini',
    name: 'Lumbini',
    region: 'Lumbini Province',
    country: 'Nepal',
    coordinates: { lat: 27.4833, lng: 83.2833 },
    images: {
      hero: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
        'https://images.unsplash.com/photo-1590503513023-e6f0074b0de3?w=800',
      ],
      reality: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
      instagram: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    },
    description:
      'The birthplace of Lord Buddha, Lumbini is one of the most sacred pilgrimage sites for Buddhists worldwide. This UNESCO World Heritage Site offers profound spiritual experiences and archaeological treasures.',
    historicalSignificance:
      'In 623 BCE, Queen Maya Devi gave birth to Siddhartha Gautama under a sal tree in Lumbini. This event marked the beginning of Buddhism. The site was lost for centuries until its rediscovery in 1896.',
    culturalSignificance:
      'Lumbini represents the birthplace of compassion and non-violence. Over 25 international monasteries represent different Buddhist traditions, creating a unique global spiritual community.',
    bestSeason: 'October to March (mild weather, clear skies)',
    visitingRules: [
      'Dress modestly covering shoulders and knees',
      'Remove shoes before entering temple areas',
      'Maintain silence in meditation zones',
      'No pointing feet toward Buddha statues',
      'Photography restrictions in some monastery interiors',
    ],
    commonMistakes: [
      'Wearing revealing clothing',
      'Taking photos during prayer ceremonies',
      'Stepping over prayer items',
      'Loud conversations in sacred areas',
      'Not respecting monastery-specific rules',
    ],
    culturalAlerts: [
      {
        id: 'lumbini-alert-1',
        type: 'critical',
        category: 'religious',
        title: 'Sacred Ground Protocol',
        description:
          'The Maya Devi Temple and surrounding areas are deeply sacred. Remove shoes, maintain silence, and avoid any disrespectful behavior.',
        context:
          'This is not just a tourist site - it\'s an active pilgrimage destination where devotees come for life-changing spiritual experiences. What might seem like "just rules" are fundamental expressions of respect for 2,500 years of Buddhist tradition.',
      },
      {
        id: 'lumbini-alert-2',
        type: 'warning',
        category: 'clothing',
        title: 'Modest Dress Required',
        description:
          'Cover shoulders, chest, and knees. Lightweight, breathable modest clothing works best in the heat.',
        context:
          'Many monasteries are run by monks who have taken vows of celibacy. Modest dress helps maintain the sanctity of their practice and shows cultural awareness.',
      },
      {
        id: 'lumbini-alert-3',
        type: 'warning',
        category: 'photography',
        title: 'Photography Restrictions',
        description:
          'Some monastery interiors prohibit photography. Always ask permission before photographing monks.',
        context:
          'Monks are not "attractions" - they are practitioners on a spiritual path. Unauthorized photos can be invasive and disrespectful to their practice.',
      },
      {
        id: 'lumbini-alert-4',
        type: 'info',
        category: 'behavior',
        title: 'Meditation Etiquette',
        description:
          'Many visitors come for meditation and contemplation. Keep voices low and phones silent.',
        context:
          'Lumbini attracts serious practitioners from around the world. The peaceful atmosphere is part of what makes this place special.',
      },
    ],
    vrScenes: [
      {
        id: 'lumbini-mayadevi',
        name: 'Maya Devi Temple',
        thumbnail: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400',
        timeOfDay: ['morning', 'afternoon', 'evening'],
        hasFestival: true,
        crowdLevel: 'medium',
        hotspots: [
          {
            id: 'marker-stone',
            x: 45,
            y: 60,
            title: 'Marker Stone',
            description: 'Exact birthplace of Buddha, marked by Emperor Ashoka in 249 BCE',
          },
          {
            id: 'sacred-pond',
            x: 70,
            y: 40,
            title: 'Puskarini Pond',
            description: 'Where Queen Maya Devi bathed before giving birth',
          },
          {
            id: 'bodhi-tree',
            x: 30,
            y: 50,
            title: 'Sacred Bodhi Tree',
            description: 'Descendant of the original tree under which Buddha was born',
          },
        ],
      },
      {
        id: 'lumbini-monasteries',
        name: 'International Monasteries',
        thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400',
        timeOfDay: ['morning', 'afternoon', 'evening', 'night'],
        hasFestival: false,
        crowdLevel: 'low',
        hotspots: [
          {
            id: 'thai-monastery',
            x: 50,
            y: 30,
            title: 'Thai Monastery',
            description: 'Golden architecture showcasing Theravada tradition',
          },
          {
            id: 'chinese-monastery',
            x: 65,
            y: 55,
            title: 'Chinese Monastery',
            description: 'Mahayana Buddhist temple with intricate artwork',
          },
        ],
      },
    ],
    quizzes: [
      {
        id: 'lumbini-quiz-1',
        title: 'Buddhist Etiquette Basics',
        description: 'Learn essential respectful behaviors for Lumbini',
        userType: 'traveler',
        passingScore: 80,
        reward: '10% readiness increase',
        questions: [
          {
            id: 'lumbini-q1',
            scenario:
              'You arrive at the Maya Devi Temple wearing shorts and a tank top. What should you do?',
            options: [
              'Enter anyway, it\'s too hot to change',
              'Find a shop to buy/rent appropriate clothing',
              'Only visit from outside the temple',
              'Take photos quickly and leave',
            ],
            correctAnswer: 1,
            explanation:
              'Modest dress is non-negotiable at sacred Buddhist sites. Many visitors rent wraps or buy appropriate clothing at nearby shops. This shows respect for the sacred space and its practitioners.',
          },
          {
            id: 'lumbini-q2',
            scenario:
              'You see monks meditating in a monastery. What\'s the appropriate action?',
            options: [
              'Take photos for Instagram',
              'Sit quietly nearby if you wish to meditate',
              'Ask them questions about Buddhism',
              'Walk around them while talking on the phone',
            ],
            correctAnswer: 1,
            explanation:
              'Meditation is a serious practice. If you wish to participate, sit quietly. Otherwise, observe silently from a respectful distance or move to another area.',
          },
          {
            id: 'lumbini-q3',
            scenario:
              'When sitting near a Buddha statue, where should you position your feet?',
            options: [
              'Pointed toward the statue for better photos',
              'Crossed under you or pointed away from the statue',
              'It doesn\'t matter',
              'Propped up on a nearby bench',
            ],
            correctAnswer: 1,
            explanation:
              'Pointing feet at Buddha images is considered disrespectful in Buddhist culture. Always keep feet tucked under you or pointed away when sitting.',
          },
        ],
      },
      {
        id: 'lumbini-quiz-2',
        title: 'Cultural Depth Understanding',
        description: 'Understand the deeper meaning behind Buddhist traditions',
        passingScore: 70,
        reward: '15% readiness increase',
        questions: [
          {
            id: 'lumbini-q4',
            scenario:
              'Why is Lumbini considered sacred by multiple Buddhist traditions?',
            options: [
              'It has the oldest temples',
              'It\'s where Buddha was born',
              'It has the most monasteries',
              'It\'s the largest Buddhist site',
            ],
            correctAnswer: 1,
            explanation:
              'Lumbini is sacred because it\'s the birthplace of Siddhartha Gautama, who became the Buddha. This makes it a pilgrimage site for Buddhists of all traditions worldwide.',
          },
          {
            id: 'lumbini-q5',
            scenario:
              'What does the presence of monasteries from different countries signify?',
            options: [
              'Tourism competition',
              'Unity of Buddhist traditions honoring the birthplace',
              'Political alliances',
              'Architectural showcase',
            ],
            correctAnswer: 1,
            explanation:
              'The international monasteries represent how Buddhism spread globally while maintaining Lumbini as the common spiritual origin point for all traditions.',
          },
          {
            id: 'lumbini-q6',
            scenario: 'Why might locals seem protective of certain areas?',
            options: [
              'They want to charge fees',
              'Protecting sacred spaces from disrespect',
              'They\'re unfriendly to tourists',
              'Following outdated rules',
            ],
            correctAnswer: 1,
            explanation:
              'Local guardians protect these spaces because they hold deep spiritual significance. They\'ve seen disrespectful behavior damage the sanctity of the site.',
          },
        ],
      },
      {
        id: 'lumbini-quiz-3',
        title: 'Practical Pilgrimage Knowledge',
        description: 'Master the logistics of a meaningful visit',
        passingScore: 75,
        reward: '20% readiness increase',
        unlocks: 'smart-travel-plan',
        questions: [
          {
            id: 'lumbini-q7',
            scenario: 'What\'s the best time to visit for a peaceful experience?',
            options: [
              'Midday when it\'s hottest',
              'Early morning (6-8 AM)',
              'During major festivals',
              'Late evening after closing',
            ],
            correctAnswer: 1,
            explanation:
              'Early morning offers cool weather, fewer crowds, and the chance to observe morning prayers and meditation. The atmosphere is most serene at sunrise.',
          },
          {
            id: 'lumbini-q8',
            scenario:
              'How should you approach monks if you have questions?',
            options: [
              'Call out to them from a distance',
              'Wait for them to finish prayers, then ask politely if they have time',
              'Interrupt their meditation',
              'Follow them until they acknowledge you',
            ],
            correctAnswer: 1,
            explanation:
              'Monks have schedules for teaching and interaction. Wait for appropriate moments, approach respectfully, and accept if they\'re busy. Many monasteries have designated times for visitor questions.',
          },
          {
            id: 'lumbini-q9',
            scenario:
              'What should you do if you accidentally commit a cultural faux pas?',
            options: [
              'Ignore it and move on quickly',
              'Apologize sincerely and ask how to correct it',
              'Defend your actions',
              'Leave immediately',
            ],
            correctAnswer: 1,
            explanation:
              'Buddhist culture values sincere intention. An honest apology and willingness to learn is appreciated. Most locals and monks are understanding of genuine mistakes.',
          },
        ],
      },
    ],
    localPhrases: [
      { phrase: 'Namaste', pronunciation: 'nah-mah-stay', meaning: 'Hello/Goodbye (respectful greeting)' },
      { phrase: 'Dhanyabad', pronunciation: 'dhan-ya-baad', meaning: 'Thank you' },
      { phrase: 'Namo Buddhaya', pronunciation: 'nah-mo boo-dha-ya', meaning: 'Buddhist greeting (I bow to Buddha)' },
      { phrase: 'Kripaya', pronunciation: 'kri-pa-ya', meaning: 'Please' },
      { phrase: 'Maf garnuhos', pronunciation: 'maaf gar-nu-hos', meaning: 'Excuse me/Sorry' },
    ],
    accommodations: [
      {
        name: 'Lumbini Village Lodge',
        type: 'Community-run guesthouse',
        priceRange: '$15-30/night',
        communityBenefit: '60% of profits fund local school',
        ecoFriendly: true,
      },
      {
        name: 'Buddha Maya Garden Hotel',
        type: 'Mid-range hotel',
        priceRange: '$40-70/night',
        communityBenefit: 'Employs 80% local staff',
        ecoFriendly: true,
      },
      {
        name: 'Monastery Guest Houses',
        type: 'Budget accommodation',
        priceRange: '$5-15/night (donation-based)',
        communityBenefit: 'Supports monastery operations',
        ecoFriendly: true,
      },
    ],
    transport: [
      {
        type: 'Bicycle Rental',
        description: 'Best way to explore the sacred garden area',
        cost: '$3-5/day',
        ecoFriendly: true,
      },
      {
        type: 'Electric Rickshaw',
        description: 'For longer distances within Lumbini',
        cost: '$1-3 per trip',
        ecoFriendly: true,
      },
      {
        type: 'Bus from Bhairahawa',
        description: 'Nearest airport, 22km away',
        cost: '$2-5',
        ecoFriendly: false,
      },
    ],
    dosAndDonts: [
      {
        category: 'Dress Code',
        dos: [
          'Wear clothes covering shoulders and knees',
          'Bring a light shawl for temple visits',
          'Choose breathable, modest fabrics',
        ],
        donts: [
          'Wear shorts, tank tops, or revealing clothing',
          'Wear shoes inside temple areas',
          'Wear clothing with offensive graphics',
        ],
      },
      {
        category: 'Behavior',
        dos: [
          'Maintain respectful silence in sacred areas',
          'Ask permission before taking photos',
          'Follow the clockwise direction around stupas',
          'Join meditation sessions if welcomed',
        ],
        donts: [
          'Point feet at Buddha images',
          'Touch religious artifacts without permission',
          'Interrupt prayers or ceremonies',
          'Make loud noises in meditation areas',
        ],
      },
      {
        category: 'Photography',
        dos: [
          'Ask monks for permission before photographing',
          'Respect "no photography" signs',
          'Focus on architecture from respectful angles',
        ],
        donts: [
          'Use flash photography inside temples',
          'Photograph people praying without consent',
          'Take selfies in inappropriate locations',
        ],
      },
    ],
    crowdLevel: 'medium',
    unlockRequirement: 0,
    festivals: [
      'Buddha Jayanti (April/May) - Buddha\'s birthday celebration',
      'Lumbini Festival (December) - Cultural performances and exhibitions',
    ],
    endangeredTraditions: [
      'Traditional Newari stone carving techniques',
      'Ancient Buddhist chanting practices',
      'Traditional monastery construction methods',
    ],
  },
  {
    id: 'patan',
    name: 'Patan Durbar Square',
    region: 'Lalitpur, Kathmandu Valley',
    country: 'Nepal',
    coordinates: { lat: 27.6722, lng: 85.3256 },
    images: {
      hero: 'https://images.unsplash.com/photo-1571768092782-af206f004526?w=1200',
      gallery: [
        'https://images.unsplash.com/photo-1571768092782-af206f004526?w=800',
        'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
      ],
      reality: 'https://images.unsplash.com/photo-1571768092782-af206f004526?w=800',
      instagram: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    },
    description:
      'Known as the "City of Fine Arts," Patan Durbar Square showcases the finest Newari architecture, metalwork, and wood carving. This UNESCO World Heritage Site is a living museum of medieval Nepali craftsmanship.',
    historicalSignificance:
      'Founded in the 3rd century BCE, Patan was one of three royal cities in the Kathmandu Valley. The square features palaces and temples dating from the 16th-18th centuries, representing the pinnacle of Newari architecture.',
    culturalSignificance:
      'Patan remains a center for traditional Newari culture, metalworking, and Buddhist learning. Local artisans still practice centuries-old techniques, and the city hosts important Hindu and Buddhist festivals.',
    bestSeason: 'October to March (festivals like Rato Machhindranath in April-May)',
    visitingRules: [
      'Entry fee required (keep ticket for same-day re-entry)',
      'Respect temple entry restrictions',
      'No climbing on monuments',
      'Be mindful during religious ceremonies',
      'Support local artisans by buying authentic crafts',
    ],
    commonMistakes: [
      'Buying mass-produced "handicrafts" from tourist shops',
      'Entering temples during prayer times',
      'Haggling too aggressively with artisans',
      'Missing the courtyards behind main square',
      'Not visiting the Patan Museum',
    ],
    culturalAlerts: [
      {
        id: 'patan-alert-1',
        type: 'critical',
        category: 'religious',
        title: 'Active Hindu Temples',
        description:
          'Many temples are active worship sites, not museums. Non-Hindus may be restricted from entering certain temples.',
        context:
          'The 2015 earthquake damaged these temples, making their religious and cultural preservation even more critical. Locals are protective of sacred spaces during reconstruction.',
      },
      {
        id: 'patan-alert-2',
        type: 'warning',
        category: 'social',
        title: 'Artisan Respect',
        description:
          'Metalworkers and craftspeople are masters of dying traditions. Don\'t just photograph them - engage respectfully and consider purchasing their work.',
        context:
          'These artisans maintain skills passed down for generations. Tourism should support, not exploit, their livelihoods. Many struggle as cheaper imports undercut traditional crafts.',
      },
      {
        id: 'patan-alert-3',
        type: 'warning',
        category: 'behavior',
        title: 'Earthquake Sensitivity',
        description:
          'Many structures are earthquake-damaged and under restoration. Don\'t touch fragile carvings or enter restricted areas.',
        context:
          'The 2015 earthquake killed nearly 9,000 people. Reconstruction is ongoing and emotionally significant. Treat restoration efforts with respect.',
      },
      {
        id: 'patan-alert-4',
        type: 'info',
        category: 'social',
        title: 'Living Heritage',
        description:
          'This is not a theme park - people live, work, and worship here. Be a respectful guest in their community.',
        context:
          'Tourism provides income but also disrupts daily life. Balancing preservation with livability is an ongoing challenge.',
      },
    ],
    vrScenes: [
      {
        id: 'patan-main-square',
        name: 'Main Durbar Square',
        thumbnail: 'https://images.unsplash.com/photo-1571768092782-af206f004526?w=400',
        timeOfDay: ['morning', 'afternoon', 'evening'],
        hasFestival: true,
        crowdLevel: 'high',
        hotspots: [
          {
            id: 'krishna-temple',
            x: 50,
            y: 45,
            title: 'Krishna Mandir',
            description: '17th-century temple with intricate stone carvings depicting Ramayana and Mahabharata',
          },
          {
            id: 'golden-temple',
            x: 35,
            y: 60,
            title: 'Hiranya Varna Mahavihar',
            description: 'Golden Temple - 12th-century Buddhist monastery with gilded facade',
          },
          {
            id: 'royal-palace',
            x: 70,
            y: 35,
            title: 'Royal Palace Complex',
            description: 'Former residence of Malla kings, now housing the Patan Museum',
          },
        ],
      },
      {
        id: 'patan-courtyards',
        name: 'Hidden Courtyards',
        thumbnail: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400',
        timeOfDay: ['morning', 'afternoon'],
        hasFestival: false,
        crowdLevel: 'low',
        hotspots: [
          {
            id: 'artisan-workshop',
            x: 40,
            y: 50,
            title: 'Traditional Workshop',
            description: 'Watch metalworkers practicing ancient repoussé techniques',
          },
          {
            id: 'monastery-courtyard',
            x: 60,
            y: 40,
            title: 'Buddhist Courtyard',
            description: 'Peaceful monastery courtyard away from tourist crowds',
          },
        ],
      },
    ],
    quizzes: [
      {
        id: 'patan-quiz-1',
        title: 'Newari Culture Basics',
        description: 'Learn about the unique Newari traditions of Patan',
        userType: 'traveler',
        passingScore: 80,
        reward: '10% readiness increase',
        questions: [
          {
            id: 'patan-q1',
            scenario:
              'You want to photograph a metalworker at work. What\'s the right approach?',
            options: [
              'Take photos from a distance without asking',
              'Approach, greet them, ask permission, and offer to buy something',
              'Pay them a small fee for photos',
              'Just take quick photos and leave',
            ],
            correctAnswer: 1,
            explanation:
              'Respectful engagement means treating artisans as skilled professionals, not tourist attractions. Purchasing their work supports dying traditions.',
          },
          {
            id: 'patan-q2',
            scenario:
              'You see a temple ceremony in progress. What should you do?',
            options: [
              'Push forward to get better photos',
              'Observe quietly from the edge unless invited closer',
              'Leave immediately',
              'Ask questions during the ceremony',
            ],
            correctAnswer: 1,
            explanation:
              'Religious ceremonies are for devotees first, observers second. Respectful observation from a distance is appropriate unless you\'re invited to participate.',
          },
          {
            id: 'patan-q3',
            scenario:
              'A shopkeeper offers you a "handmade" statue for a very low price. What should you consider?',
            options: [
              'Buy it immediately - great deal!',
              'Question if it\'s actually handmade or mass-produced',
              'Haggle for an even lower price',
              'Buy several to resell',
            ],
            correctAnswer: 1,
            explanation:
              'Authentic Newari metalwork takes weeks to create and costs accordingly. Very cheap items are likely mass-produced imports, not supporting local artisans.',
          },
        ],
      },
      {
        id: 'patan-quiz-2',
        title: 'Post-Earthquake Sensitivity',
        description: 'Understand the ongoing reconstruction challenges',
        passingScore: 70,
        reward: '15% readiness increase',
        questions: [
          {
            id: 'patan-q4',
            scenario:
              'Why should you be extra careful around damaged structures?',
            options: [
              'They might collapse',
              'Locals are still grieving losses and fighting for proper restoration',
              'To avoid fines',
              'Better photo opportunities elsewhere',
            ],
            correctAnswer: 1,
            explanation:
              'The earthquake was traumatic and reconstruction involves complex cultural and political issues. Treat damaged sites with the respect you\'d show any disaster area.',
          },
          {
            id: 'patan-q5',
            scenario:
              'How can tourists best support earthquake recovery?',
            options: [
              'Take photos to raise awareness',
              'Buy from local artisans, stay in local accommodations, respect reconstruction efforts',
              'Donate to international NGOs only',
              'Avoid the area entirely',
            ],
            correctAnswer: 1,
            explanation:
              'Direct economic support to locals and respecting ongoing restoration work helps sustainable recovery more than charity alone.',
          },
          {
            id: 'patan-q6',
            scenario:
              'A guide offers to sneak you into a restricted temple. What should you do?',
            options: [
              'Accept - unique experience!',
              'Decline respectfully and report if it seems they do this regularly',
              'Negotiate a higher price',
              'Go but don\'t take photos',
            ],
            correctAnswer: 1,
            explanation:
              'Restricted areas are off-limits for safety, preservation, or religious reasons. Violating these restrictions undermines conservation efforts.',
          },
        ],
      },
      {
        id: 'patan-quiz-3',
        title: 'Cultural Depth & Hidden Gems',
        description: 'Discover the real Patan beyond tourist basics',
        passingScore: 75,
        reward: '20% readiness increase',
        unlocks: 'smart-travel-plan',
        questions: [
          {
            id: 'patan-q7',
            scenario:
              'What makes Newari architecture unique?',
            options: [
              'It\'s colorful',
              'Integration of Hindu and Buddhist elements with intricate wood/metal work',
              'It\'s very old',
              'It uses special paint',
            ],
            correctAnswer: 1,
            explanation:
              'Newari architecture represents centuries of cultural synthesis, blending Hindu and Buddhist traditions with exceptional craftsmanship in multiple materials.',
          },
          {
            id: 'patan-q8',
            scenario:
              'Why is supporting authentic artisans important?',
            options: [
              'Gets you better souvenirs',
              'Preserves endangered traditional skills and provides sustainable livelihoods',
              'Impresses friends back home',
              'Gets you discounts',
            ],
            correctAnswer: 1,
            explanation:
              'Traditional Newari crafts are endangered by mass production. Supporting authentic artisans maintains cultural heritage and provides dignified livelihoods.',
          },
          {
            id: 'patan-q9',
            scenario:
              'What\'s the best way to experience Patan\'s living culture?',
            options: [
              'Quick tour of main square',
              'Explore courtyards, workshops, museums, and engage with locals over multiple visits',
              'Hire expensive guide',
              'Watch YouTube videos',
            ],
            correctAnswer: 1,
            explanation:
              'Patan\'s depth reveals itself slowly. The hidden courtyards, workshops, and local interactions provide richer experiences than surface-level sightseeing.',
          },
        ],
      },
    ],
    localPhrases: [
      { phrase: 'Ju ju bhae', pronunciation: 'joo joo bay', meaning: 'Hello (Newari)' },
      { phrase: 'Dhanyabad', pronunciation: 'dhan-ya-baad', meaning: 'Thank you' },
      { phrase: 'Ji gu daya', pronunciation: 'jee goo dah-ya', meaning: 'How much? (Newari)' },
      { phrase: 'Thata', pronunciation: 'thah-tah', meaning: 'Good/OK (Newari)' },
      { phrase: 'Jyapu', pronunciation: 'jya-poo', meaning: 'Farmer (Newari caste/identity)' },
    ],
    accommodations: [
      {
        name: 'Traditional Inn Patan',
        type: 'Heritage guesthouse',
        priceRange: '$25-50/night',
        communityBenefit: 'Family-run, supports courtyard restoration',
        ecoFriendly: true,
      },
      {
        name: 'Summit Hotel',
        type: 'Mid-range hotel',
        priceRange: '$60-100/night',
        communityBenefit: 'Trains local youth in hospitality',
        ecoFriendly: true,
      },
      {
        name: 'Local Homestays',
        type: 'Budget homestay',
        priceRange: '$15-30/night',
        communityBenefit: 'Direct family income, cultural exchange',
        ecoFriendly: true,
      },
    ],
    transport: [
      {
        type: 'Walking',
        description: 'Best way to explore the compact old city',
        cost: 'Free',
        ecoFriendly: true,
      },
      {
        type: 'Local Bus from Kathmandu',
        description: 'Cheap and authentic local experience',
        cost: '$0.25',
        ecoFriendly: false,
      },
      {
        type: 'Taxi/Rideshare',
        description: 'From Kathmandu (20-30 minutes)',
        cost: '$5-10',
        ecoFriendly: false,
      },
    ],
    dosAndDonts: [
      {
        category: 'Temple Etiquette',
        dos: [
          'Remove shoes before entering temple courtyards',
          'Ask permission before photographing religious ceremonies',
          'Respect "Hindus only" signs at certain temples',
          'Make offerings respectfully if you choose to',
        ],
        donts: [
          'Enter temples during private ceremonies',
          'Touch religious objects or bells unnecessarily',
          'Wear leather items in some Hindu temples',
          'Step over religious offerings on the ground',
        ],
      },
      {
        category: 'Artisan Interactions',
        dos: [
          'Greet artisans before photographing',
          'Ask about their craft and training',
          'Purchase authentic items at fair prices',
          'Recommend their work to others',
        ],
        donts: [
          'Treat artisans like tourist attractions',
          'Aggressively haggle over handmade items',
          'Buy obvious mass-produced fakes',
          'Disturb them while working without permission',
        ],
      },
      {
        category: 'General Behavior',
        dos: [
          'Explore the hidden courtyards',
          'Visit the excellent Patan Museum',
          'Support local restaurants',
          'Learn some Newari phrases',
        ],
        donts: [
          'Rush through just taking photos',
          'Touch earthquake-damaged structures',
          'Litter in the ancient streets',
          'Make loud noises in residential areas',
        ],
      },
    ],
    crowdLevel: 'high',
    unlockRequirement: 30,
    festivals: [
      'Rato Machhindranath (April-May) - Chariot festival, most important Newari festival',
      'Matya (August-September) - Festival of lights in Patan',
      'Indra Jatra (September) - Eight-day festival with masked dances',
    ],
    endangeredTraditions: [
      'Repoussé metalwork technique',
      'Traditional Newari wood carving',
      'Lost-wax bronze casting',
      'Ancient stone carving methods',
    ],
  },
]

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find((d) => d.id === id)
}

export function getUnlockedDestinations(readinessScore: number): Destination[] {
  return destinations.filter((d) => d.unlockRequirement <= readinessScore)
}
