import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function calculateReadinessScore(
  completedQuizzes: number,
  totalQuizzes: number
): number {
  if (totalQuizzes === 0) return 0
  return Math.round((completedQuizzes / totalQuizzes) * 100)
}
