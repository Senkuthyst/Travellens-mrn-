'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Compass,
  BookOpen,
  Trophy,
  Unlock,
  MapPin,
  Plane,
  Eye,
  MessageCircle,
  GraduationCap,
  Shield,
  Heart,
  Users,
  TrendingUp,
  Award,
  Check,
  ArrowRight,
  Globe,
  Sparkles,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { destinations } from '@/lib/data/destinations'
import { useUserStore } from '@/lib/store'
import ProgressBar from '@/components/ui/ProgressBar'

export default function HomePage() {
  const { unlockedDestinations, readinessScores, isPremium } = useUserStore()

  const journeySteps = [
    { icon: Compass, title: 'Explore', description: 'Browse destinations with VR previews' },
    { icon: BookOpen, title: 'Learn', description: 'Understand culture & etiquette' },
    { icon: Trophy, title: 'Prove', description: 'Pass quizzes to show readiness' },
    { icon: Unlock, title: 'Unlock', description: 'Earn access to more destinations' },
    { icon: MapPin, title: 'Plan', description: 'Get ethical travel recommendations' },
    { icon: Plane, title: 'Go', description: 'Travel with confidence & respect' },
  ]

  const features = [
    {
      icon: Eye,
      title: 'VR 360° Previews',
      description: 'Explore destinations in immersive virtual reality before you go',
    },
    {
      icon: MessageCircle,
      title: 'AI Local Guides',
      description: 'Chat with AI personas: monks, elders, and local experts',
    },
    {
      icon: GraduationCap,
      title: 'Interactive Quizzes',
      description: 'Test your cultural knowledge and unlock new destinations',
    },
    {
      icon: Shield,
      title: 'Cultural Risk Alerts',
      description: 'Real-time warnings about etiquette mistakes before you make them',
    },
    {
      icon: Heart,
      title: 'Ethical Accommodations',
      description: 'Stay at places that benefit local communities',
    },
    {
      icon: Users,
      title: 'Social Impact Tracking',
      description: 'See how your travel supports cultural preservation',
    },
    {
      icon: Award,
      title: 'Travel Readiness Score',
      description: 'Know exactly how prepared you are for each destination',
    },
    {
      icon: Globe,
      title: 'Reality vs Instagram',
      description: 'See authentic experiences, not just picture-perfect moments',
    },
  ]

  const userModes = [
    {
      title: 'Independent Traveler',
      description: 'Earn your way to destinations through cultural learning',
      price: 'Free + Premium options',
    },
    {
      title: 'Teacher/School',
      description: 'Use as educational tool before school trips',
      price: 'Custom institutional pricing',
    },
    {
      title: 'Pilgrim',
      description: 'Deep spiritual preparation for sacred journeys',
      price: 'Free tier available',
    },
    {
      title: 'Cultural Preservation',
      description: 'Support endangered traditions through informed tourism',
      price: 'All tiers contribute',
    },
  ]

  const pricingTiers = [
    {
      name: 'Free (Earn-to-Unlock)',
      price: '$0',
      period: 'forever',
      features: [
        'Access to 1 unlocked destination',
        'Basic VR previews',
        'Standard quizzes',
        'AI guide: Local Guide',
        'Earn unlocks through learning',
        'Community forums',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: 'per month',
      features: [
        'Instant access to all destinations',
        'Full VR 360° experiences',
        'Advanced quizzes with scenarios',
        'All AI guide personas',
        'Smart travel planning',
        'Offline mode',
        'Priority support',
        'No ads',
      ],
      cta: 'Go Premium',
      popular: true,
    },
    {
      name: 'Institutional',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Premium',
        'Bulk licenses for schools/groups',
        'Teacher dashboard & analytics',
        'Custom learning paths',
        'White-label options',
        'Dedicated support',
        'Training sessions',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  const stats = [
    { value: '10,000+', label: 'Cultural Learners' },
    { value: '50+', label: 'Sacred Sites' },
    { value: '95%', label: 'Positive Local Impact' },
    { value: '$500K+', label: 'To Local Communities' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge variant="success" size="lg" className="mb-6 bg-white/20 text-white">
              ✨ Starting with Nepal - More regions coming soon
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Explore. Learn. Experience.
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-90">
              Turn tourism into learning. Turn learning into journeys.
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
              Master cultural intelligence before you travel. Unlock destinations through knowledge.
              Support communities through informed tourism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/explore">
                <Button size="lg" variant="secondary" className="shadow-lg">
                  Start Exploring
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>

            {/* Journey Steps Preview */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {journeySteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">{step.title}</h3>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How TravelLens Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A revolutionary 6-step journey that transforms tourists into culturally-aware travelers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeySteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={step.title} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-semibold text-primary-600 mr-2">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-xl text-gray-600">
              Start with Nepal's most sacred sites
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {destinations.map((destination) => {
              const isUnlocked = unlockedDestinations.includes(destination.id)
              const readiness = readinessScores[destination.id] || 0

              return (
                <Card
                  key={destination.id}
                  isLocked={!isUnlocked && !isPremium}
                  className="overflow-hidden"
                >
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.images.hero})` }}
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                        <p className="text-gray-600">{destination.region}</p>
                      </div>
                      {destination.unlockRequirement > 0 && !isPremium && (
                        <Badge variant="warning">
                          {destination.unlockRequirement}% required
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-700 mb-4">{destination.description}</p>
                    {!isUnlocked && !isPremium && (
                      <div className="mb-4">
                        <ProgressBar
                          value={readiness}
                          label="Your Readiness"
                          color={readiness >= destination.unlockRequirement ? 'success' : 'primary'}
                        />
                      </div>
                    )}
                    <Link href={`/explore/${destination.id}`}>
                      <Button variant="primary" className="w-full">
                        {isUnlocked || isPremium ? 'Explore Destination' : 'Learn More'}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600">
              Everything you need for culturally-aware travel
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* User Modes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">For Every Type of Traveler</h2>
            <p className="text-xl text-gray-600">
              Tailored experiences for different travel purposes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userModes.map((mode) => (
              <Card key={mode.title} className="p-6">
                <Sparkles className="w-10 h-10 text-accent-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{mode.title}</h3>
                <p className="text-gray-600 mb-4">{mode.description}</p>
                <Badge variant="info">{mode.price}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works for you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  'p-8 relative',
                  tier.popular && 'ring-2 ring-primary-600'
                )}
              >
                {tier.popular && (
                  <Badge
                    variant="success"
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white"
                  >
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-600">/{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">
              Building a community of responsible travelers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business/Investor Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Revenue Model</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Freemium Subscriptions</h3>
                    <p className="text-gray-600">Earn-to-unlock model with premium upgrades</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Institutional Licenses</h3>
                    <p className="text-gray-600">Schools, universities, and travel companies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Ethical Partnerships</h3>
                    <p className="text-gray-600">Commissions from vetted accommodations & tours</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Growth Metrics</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">User Engagement</span>
                    <span className="text-primary-600">85%</span>
                  </div>
                  <ProgressBar value={85} color="primary" showPercentage={false} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Quiz Completion Rate</span>
                    <span className="text-primary-600">92%</span>
                  </div>
                  <ProgressBar value={92} color="success" showPercentage={false} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Premium Conversion</span>
                    <span className="text-primary-600">18%</span>
                  </div>
                  <ProgressBar value={18} color="warning" showPercentage={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Travel with Purpose?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of travelers who are making a positive impact through cultural intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/explore">
              <Button size="lg" className="shadow-lg">
                Start Learning Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
