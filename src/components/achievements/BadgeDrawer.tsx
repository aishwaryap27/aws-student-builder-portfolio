import React from 'react'
import { X, Award, Compass, Layers, Cpu, Terminal as TerminalIcon, CheckCircle2, Lock } from 'lucide-react'
import { DISCOVERY_BADGES } from '../../data/badges'
import { useExploration } from '../../context/useExploration'

interface BadgeDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  Terminal: <TerminalIcon className="w-5 h-5" />
}

export const BadgeDrawer: React.FC<BadgeDrawerProps> = ({ isOpen, onClose }) => {
  const { unlockedBadges, resetProgress } = useExploration()

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="badge-drawer-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative w-full max-w-xl bg-[#0a0f1d] border border-slate-700/80 rounded-lg shadow-2xl p-6 font-mono-code text-sm">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h2 id="badge-drawer-title" className="text-base font-bold text-white tracking-wider">
              WEBSITE EXPLORATION BADGES
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Badges Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice */}
        <p className="text-xs text-slate-400 my-3 font-sans">
          These badges celebrate your exploration through this digital universe. They track real client-side interactions and do not lock or restrict any professional qualifications.
        </p>

        {/* Badges List */}
        <div className="space-y-3 my-4 max-h-[60vh] overflow-y-auto pr-1">
          {DISCOVERY_BADGES.map((badge) => {
            const isUnlocked = unlockedBadges.includes(badge.id)
            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded border transition-all ${
                  isUnlocked
                    ? 'bg-amber-950/20 border-amber-500/40 text-slate-200'
                    : 'bg-slate-900/50 border-slate-800/80 text-slate-500'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded border ${
                        isUnlocked
                          ? 'bg-amber-500/15 border-amber-500/50 text-amber-400'
                          : 'bg-slate-800/60 border-slate-700 text-slate-600'
                      }`}
                    >
                      {ICON_MAP[badge.iconName] || <Award className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs tracking-wider text-white">
                          {badge.title}
                        </span>
                        <span className="text-[10px] text-slate-500">{badge.code}</span>
                      </div>
                      <p className="text-xs text-slate-300 font-sans mt-0.5">
                        {badge.description}
                      </p>
                      {!isUnlocked && (
                        <p className="text-[11px] text-amber-500/80 font-mono-code mt-1">
                          Hint: {badge.hint}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    {isUnlocked ? (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold whitespace-nowrap bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" />
                        UNLOCKED
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] text-slate-500 whitespace-nowrap bg-slate-800/60 px-2 py-0.5 rounded">
                        <Lock className="w-3 h-3" />
                        LOCKED
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
          <button
            onClick={resetProgress}
            className="text-slate-500 hover:text-red-400 transition-colors"
          >
            Reset Progress
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
