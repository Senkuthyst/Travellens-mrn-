'use client'

import { cn } from '@/lib/utils'
import { Lock } from 'lucide-react'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  isLocked?: boolean
  onUnlock?: () => void
  hover?: boolean
}

export default function Card({ children, className, isLocked, onUnlock, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300',
        hover && 'hover:shadow-lg hover:border-gray-300',
        isLocked && 'opacity-75',
        className
      )}
    >
      {isLocked && (
        <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[2px] rounded-xl flex items-center justify-center z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900/80 mb-3">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm font-medium text-gray-900 mb-2">Locked</p>
            {onUnlock && (
              <button
                onClick={onUnlock}
                className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors"
              >
                Unlock Now
              </button>
            )}
          </div>
        </div>
      )}
      {children}
    </div>
  )
}
