import React, { useEffect, useState, useCallback, type ReactNode } from 'react'
import { DISCOVERY_BADGES } from '../data/badges'
import type { DiscoveryBadge } from '../types'
import {
  ExplorationContext,
  ALL_PORTALS,
  ALL_PROJECTS
} from './explorationContextDef'

const STORAGE_KEY = 'aishwarya_exe_exploration_state_v1'

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
      if (saved) return JSON.parse(saved)

      // Fallback: populate unlocked badges from saved interaction state
      const portals: string[] = JSON.parse(localStorage.getItem(`${STORAGE_KEY}_portals`) || '[]')
      const projects: string[] = JSON.parse(localStorage.getItem(`${STORAGE_KEY}_projects`) || '[]')
      const skills = localStorage.getItem(`${STORAGE_KEY}_skills`) === 'true'
      const achievements = localStorage.getItem(`${STORAGE_KEY}_achievements`) === 'true'
      const secret = localStorage.getItem(`${STORAGE_KEY}_secret`) === 'true'

      const initialBadges: string[] = []
      if (ALL_PORTALS.every((p) => portals.includes(p))) initialBadges.push('universe_explorer')
      if (ALL_PROJECTS.every((p) => projects.includes(p))) initialBadges.push('project_investigator')
      if (skills) initialBadges.push('tech_explorer')
      if (achievements) initialBadges.push('milestone_hunter')
      if (secret) initialBadges.push('secret_developer')
      return initialBadges
    } catch {
      return []
    }
  })

  const [latestBadge, setLatestBadge] = useState<DiscoveryBadge | null>(null)

  // Sync state to localStorage safely
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
  const unlockBadge = useCallback((badgeId: string) => {
    setUnlockedBadges((prev) => {
      if (prev.includes(badgeId)) return prev
      const badge = DISCOVERY_BADGES.find((b) => b.id === badgeId)
      if (badge) {
        setLatestBadge(badge)
      }
      return [...prev, badgeId]
    })
  }, [])

  const markPortalVisited = useCallback((portalId: string) => {
    setVisitedPortals((prev) => {
      if (prev.includes(portalId)) return prev
      const updated = [...prev, portalId]
      if (ALL_PORTALS.every((p) => updated.includes(p))) {
        unlockBadge('universe_explorer')
      }
      return updated
    })
  }, [unlockBadge])

  const markProjectVisited = useCallback((projectId: string) => {
    setVisitedProjects((prev) => {
      if (prev.includes(projectId)) return prev
      const updated = [...prev, projectId]
      if (ALL_PROJECTS.every((p) => updated.includes(p))) {
        unlockBadge('project_investigator')
      }
      return updated
    })
  }, [unlockBadge])

  const markSkillsInteracted = useCallback(() => {
    setInteractedSkills((prev) => {
      if (!prev) {
        unlockBadge('tech_explorer')
        return true
      }
      return prev
    })
  }, [unlockBadge])

  const markAchievementsInspected = useCallback(() => {
    setInspectedAchievements((prev) => {
      if (!prev) {
        unlockBadge('milestone_hunter')
        return true
      }
      return prev
    })
  }, [unlockBadge])

  const markSecretDiscovered = useCallback(() => {
    setDiscoveredSecret((prev) => {
      if (!prev) {
        unlockBadge('secret_developer')
        return true
      }
      return prev
    })
  }, [unlockBadge])

  const dismissNotification = useCallback(() => {
    setLatestBadge(null)
  }, [])

  const isPortalVisited = useCallback(
    (portalId: string) => visitedPortals.includes(portalId),
    [visitedPortals]
  )

  const resetProgress = useCallback(() => {
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
  }, [])

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
