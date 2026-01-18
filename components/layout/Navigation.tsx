'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Compass, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '../ui/Button'
import { useUserStore } from '@/lib/store'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { isPremium, togglePremium } = useUserStore()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Pricing' },
  ]

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Compass className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">
              Travel<span className="text-primary-600">Lens</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={togglePremium}
              className={cn(
                'px-3 py-1.5 text-sm font-medium rounded-full transition-colors',
                isPremium
                  ? 'bg-accent-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {isPremium ? '⭐ Premium' : 'Free'}
            </button>
            <Button size="sm" variant="outline">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
                <button
                  onClick={togglePremium}
                  className={cn(
                    'w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isPremium
                      ? 'bg-accent-500 text-white'
                      : 'bg-gray-100 text-gray-700'
                  )}
                >
                  {isPremium ? '⭐ Premium Active' : 'Upgrade to Premium'}
                </button>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
