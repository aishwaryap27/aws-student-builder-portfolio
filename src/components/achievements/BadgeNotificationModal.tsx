import React, { useEffect } from 'react'
import { Sparkles, X, Award } from 'lucide-react'
import { useExploration } from '../../context/useExploration'

export const BadgeNotificationModal: React.FC = () => {
  const { latestBadge, dismissNotification } = useExploration()

  useEffect(() => {
    if (latestBadge) {
      const timer = setTimeout(() => {
        dismissNotification()
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [latestBadge, dismissNotification])

  if (!latestBadge) return null

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#0d1424] border-2 border-amber-500 rounded-lg p-4 shadow-[0_0_30px_rgba(245,158,11,0.25)] font-mono-code animate-bounce-subtle"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-amber-500/20 border border-amber-500/50 text-amber-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>DISCOVERY UNLOCKED!</span>
            </div>
            <h4 className="text-sm font-bold text-white mt-0.5">
              {latestBadge.title}
            </h4>
            <p className="text-xs text-slate-300 font-sans mt-1">
              {latestBadge.description}
            </p>
          </div>
        </div>

        <button
          onClick={dismissNotification}
          className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Dismiss badge notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
