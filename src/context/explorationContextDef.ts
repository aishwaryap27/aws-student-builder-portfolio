import { createContext } from 'react'
import type { DiscoveryBadge } from '../types'

export interface ExplorationState {
  visitedPortals: string[]
  visitedProjects: string[]
  interactedSkills: boolean
  inspectedAchievements: boolean
  discoveredSecret: boolean
  unlockedBadges: string[]
  latestBadge: DiscoveryBadge | null
  dismissNotification: () => void
  markPortalVisited: (portalId: string) => void
  markProjectVisited: (projectId: string) => void
  markSkillsInteracted: () => void
  markAchievementsInspected: () => void
  markSecretDiscovered: () => void
  resetProgress: () => void
  isPortalVisited: (portalId: string) => boolean
  discoveredPortalsCount: number
  totalPortalsCount: number
  unlockedBadgesCount: number
  totalBadgesCount: number
}

export const ALL_PORTALS = ['identity', 'skills', 'projects', 'achievements', 'journey', 'connect']
export const ALL_PROJECTS = ['ecommerce', 'csv-platform', 'facial-analysis', 'ecoband']

export const ExplorationContext = createContext<ExplorationState | undefined>(undefined)
