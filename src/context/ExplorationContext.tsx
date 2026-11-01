import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { DISCOVERY_BADGES } from '../data/badges'
import type { DiscoveryBadge } from '../types'


interface ExplorationState {
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

const STORAGE_KEY = 'aishwarya_exe_exploration_state_v1'

const ExplorationContext = createContext<ExplorationState | undefined>(undefined)

const ALL_PORTALS = ['identity', 'skills', 'projects', 'achievements', 'journey', 'connect']
const ALL_PROJECTS = ['ecommerce', 'csv-platform', 'facial-analysis', 'ecoband']

export const ExplorationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [visitedPortals, setVisitedPortals] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_portals`)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [visitedProjects, setVisitedProjects] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_projects`)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [interactedSkills, setInteractedSkills] = useState<boolean>(() => {
    try {
      return localStorage.getItem(`${STORAGE_KEY}_skills`) === 'true'
    } catch {
      return false
    }
  })

  const [inspectedAchievements, setInspectedAchievements] = useState<boolean>(() => {
    try {
      return localStorage.getItem(`${STORAGE_KEY}_achievements`) === 'true'
    } catch {
      return false
    }
  })

  const [discoveredSecret, setDiscoveredSecret] = useState<boolean>(() => {
    try {
      return localStorage.getItem(`${STORAGE_KEY}_secret`) === 'true'
    } catch {
      return false
    }
  })

  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_badges`)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [latestBadge, setLatestBadge] = useState<DiscoveryBadge | null>(null)

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_portals`, JSON.stringify(visitedPortals))
    } catch {
      // ignore storage errors
    }
  }, [visitedPortals])

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_projects`, JSON.stringify(visitedProjects))
    } catch {
      // ignore
    }
  }, [visitedProjects])

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_skills`, String(interactedSkills))
    } catch {
      // ignore
    }
  }, [interactedSkills])

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_achievements`, String(inspectedAchievements))
    } catch {
      // ignore
    }
  }, [inspectedAchievements])

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_secret`, String(discoveredSecret))
    } catch {
      // ignore
    }
  }, [discoveredSecret])

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_badges`, JSON.stringify(unlockedBadges))
    } catch {
      // ignore
    }
  }, [unlockedBadges])

  // Badge trigger helper
  const unlockBadge = (badgeId: string) => {
    if (!unlockedBadges.includes(badgeId)) {
      setUnlockedBadges((prev) => [...prev, badgeId])
      const badge = DISCOVERY_BADGES.find((b) => b.id === badgeId)
      if (badge) {
        setLatestBadge(badge)
      }
    }
  }

  // Check UNIVERSE EXPLORER (all 6 portals visited)
  useEffect(() => {
    const hasAllPortals = ALL_PORTALS.every((p) => visitedPortals.includes(p))
    if (hasAllPortals) {
      unlockBadge('universe_explorer')
    }
  }, [visitedPortals])

  // Check PROJECT INVESTIGATOR (all 4 projects visited)
  useEffect(() => {
    const hasAllProjects = ALL_PROJECTS.every((p) => visitedProjects.includes(p))
    if (hasAllProjects) {
      unlockBadge('project_investigator')
    }
  }, [visitedProjects])

  // Check TECH EXPLORER
  useEffect(() => {
    if (interactedSkills) {
      unlockBadge('tech_explorer')
    }
  }, [interactedSkills])

  // Check MILESTONE HUNTER
  useEffect(() => {
    if (inspectedAchievements) {
      unlockBadge('milestone_hunter')
    }
  }, [inspectedAchievements])

  // Check SECRET DEVELOPER
  useEffect(() => {
    if (discoveredSecret) {
      unlockBadge('secret_developer')
    }
  }, [discoveredSecret])

  const markPortalVisited = (portalId: string) => {
    if (!visitedPortals.includes(portalId)) {
      setVisitedPortals((prev) => [...prev, portalId])
    }
  }

  const markProjectVisited = (projectId: string) => {
    if (!visitedProjects.includes(projectId)) {
      setVisitedProjects((prev) => [...prev, projectId])
    }
  }

  const markSkillsInteracted = () => {
    setInteractedSkills(true)
  }

  const markAchievementsInspected = () => {
    setInspectedAchievements(true)
  }

  const markSecretDiscovered = () => {
    setDiscoveredSecret(true)
  }

  const dismissNotification = () => {
    setLatestBadge(null)
  }

  const isPortalVisited = (portalId: string) => visitedPortals.includes(portalId)

  const resetProgress = () => {
    setVisitedPortals([])
    setVisitedProjects([])
    setInteractedSkills(false)
    setInspectedAchievements(false)
    setDiscoveredSecret(false)
    setUnlockedBadges([])
    setLatestBadge(null)
    try {
      localStorage.removeItem(`${STORAGE_KEY}_portals`)
      localStorage.removeItem(`${STORAGE_KEY}_projects`)
      localStorage.removeItem(`${STORAGE_KEY}_skills`)
      localStorage.removeItem(`${STORAGE_KEY}_achievements`)
      localStorage.removeItem(`${STORAGE_KEY}_secret`)
      localStorage.removeItem(`${STORAGE_KEY}_badges`)
    } catch {
      // ignore
    }
  }

  return (
    <ExplorationContext.Provider
      value={{
        visitedPortals,
        visitedProjects,
        interactedSkills,
        inspectedAchievements,
        discoveredSecret,
        unlockedBadges,
        latestBadge,
        dismissNotification,
        markPortalVisited,
        markProjectVisited,
        markSkillsInteracted,
        markAchievementsInspected,
        markSecretDiscovered,
        resetProgress,
        isPortalVisited,
        discoveredPortalsCount: visitedPortals.length,
        totalPortalsCount: ALL_PORTALS.length,
        unlockedBadgesCount: unlockedBadges.length,
        totalBadgesCount: DISCOVERY_BADGES.length
      }}
    >
      {children}
    </ExplorationContext.Provider>
  )
}

export const useExploration = () => {
  const context = useContext(ExplorationContext)
  if (!context) {
    throw new Error('useExploration must be used within an ExplorationProvider')
  }
  return context
}
