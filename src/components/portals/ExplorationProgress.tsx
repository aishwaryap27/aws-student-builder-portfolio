import React from 'react'
import { Sparkles, RotateCcw } from 'lucide-react'
import { useExploration } from '../../context/ExplorationContext'

interface ExplorationProgressProps {
  onOpenBadges?: () => void
}

export const ExplorationProgress: React.FC<ExplorationProgressProps> = ({ onOpenBadges }) => {
  const {
    discoveredPortalsCount,
    totalPortalsCount,
    unlockedBadgesCount,
    totalBadgesCount,
    resetProgress,
  } = useExploration()

  const progressPercentage = Math.round((discoveredPortalsCount / totalPortalsCount) * 100)

  return (
    <section className="w-full mt-12 pt-8 pb-4 border-t border-slate-800/80 font-mono-code" aria-label="Exploration Progress">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header telemetry row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-semibold tracking-wider text-xs">
              EXPLORATION PROGRESS
            </span>
            <span className="text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30">
              {discoveredPortalsCount} / {totalPortalsCount} DISCOVERED
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenBadges}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{unlockedBadgesCount} / {totalBadgesCount} BADGES UNLOCKED</span>
            </button>

            {discoveredPortalsCount > 0 && (
              <button
                onClick={resetProgress}
                className="flex items-center gap-1 text-slate-500 hover:text-slate-300 text-[11px] transition-colors cursor-pointer"
                title="Reset local discovery state"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Thin Horizontal Progress Bar */}
        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-amber-500 transition-all duration-700 ease-out shadow-[0_0_8px_rgba(6,182,212,0.5)]"
            style={{ width: `${progressPercentage}%` }}
            role="progressbar"
            aria-valuenow={discoveredPortalsCount}
            aria-valuemin={0}
            aria-valuemax={totalPortalsCount}
            aria-label="Portal discovery progress"
          />
        </div>

        <div className="flex items-center justify-between mt-2 text-[10px] text-slate-500">
          <span>INITIALIZED: 0%</span>
          <span className="text-slate-400">{progressPercentage}% SYSTEM DISCOVERY COMPLETE</span>
          <span>MAX: 100%</span>
        </div>
      </div>
    </section>
  )
}
