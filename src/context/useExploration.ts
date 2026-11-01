import { useContext } from 'react'
import { ExplorationContext } from './explorationContextDef'

export const useExploration = () => {
  const context = useContext(ExplorationContext)
  if (!context) {
    throw new Error('useExploration must be used within an ExplorationProvider')
  }
  return context
}
