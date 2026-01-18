import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface UserProgress {
  completedQuizzes: string[]
  unlockedDestinations: string[]
  unlockedFeatures: string[]
  readinessScores: Record<string, number>
  isPremium: boolean
  exploredDestinations: string[]
  savedPlans: string[]
  badges: string[]
}

interface UserStore extends UserProgress {
  completeQuiz: (quizId: string, destinationId: string) => void
  unlockDestination: (destinationId: string) => void
  unlockFeature: (featureId: string) => void
  updateReadinessScore: (destinationId: string, score: number) => void
  togglePremium: () => void
  addExploredDestination: (destinationId: string) => void
  addSavedPlan: (planId: string) => void
  addBadge: (badgeId: string) => void
  reset: () => void
}

const initialState: UserProgress = {
  completedQuizzes: [],
  unlockedDestinations: ['lumbini'], // Lumbini is unlocked by default
  unlockedFeatures: [],
  readinessScores: {},
  isPremium: false,
  exploredDestinations: [],
  savedPlans: [],
  badges: [],
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      ...initialState,
      completeQuiz: (quizId, destinationId) =>
        set((state) => {
          const newCompleted = [...new Set([...state.completedQuizzes, quizId])]
          const destinationQuizzes = newCompleted.filter((id) =>
            id.startsWith(destinationId)
          )
          const score = Math.round((destinationQuizzes.length / 3) * 100)
          return {
            completedQuizzes: newCompleted,
            readinessScores: {
              ...state.readinessScores,
              [destinationId]: Math.min(score, 100),
            },
          }
        }),
      unlockDestination: (destinationId) =>
        set((state) => ({
          unlockedDestinations: [...new Set([...state.unlockedDestinations, destinationId])],
        })),
      unlockFeature: (featureId) =>
        set((state) => ({
          unlockedFeatures: [...new Set([...state.unlockedFeatures, featureId])],
        })),
      updateReadinessScore: (destinationId, score) =>
        set((state) => ({
          readinessScores: {
            ...state.readinessScores,
            [destinationId]: score,
          },
        })),
      togglePremium: () => set((state) => ({ isPremium: !state.isPremium })),
      addExploredDestination: (destinationId) =>
        set((state) => ({
          exploredDestinations: [...new Set([...state.exploredDestinations, destinationId])],
        })),
      addSavedPlan: (planId) =>
        set((state) => ({
          savedPlans: [...new Set([...state.savedPlans, planId])],
        })),
      addBadge: (badgeId) =>
        set((state) => ({
          badges: [...new Set([...state.badges, badgeId])],
        })),
      reset: () => set(initialState),
    }),
    {
      name: 'travellens-user-storage',
    }
  )
)
