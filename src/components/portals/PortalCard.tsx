import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { PortalItem } from '../../types'
import { useExploration } from '../../context/ExplorationContext'

interface PortalCardProps {
  portal: PortalItem
  index: number
}

export const PortalCard: React.FC<PortalCardProps> = ({ portal }) => {
  const { markPortalVisited, isPortalVisited } = useExploration()
  const visited = isPortalVisited(portal.id)

  const handleClick = () => {
    markPortalVisited(portal.id)
  }

  return (
    <Link
      to={portal.route}
      onClick={handleClick}
      aria-label={`Enter ${portal.title} portal`}
      className="group relative flex flex-col justify-end min-h-[300px] sm:min-h-[340px] lg:min-h-[360px] rounded-lg overflow-hidden border border-slate-800/90 bg-[#0a0f1d] transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
    >
      {/* Background Illustration / Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={portal.image}
          alt=""
          loading="eager"
          className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 ease-out"
        />
        {/* Dark Vignette Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/75 to-transparent transition-opacity duration-300 group-hover:via-[#060913]/65" />
      </div>

      {/* Top HUD Telemetry Bar */}
      <div className="relative z-10 p-5 pb-0 flex items-center justify-between text-xs font-mono-code mb-auto">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700/80 text-cyan-400 font-bold tracking-wider">
            PORTAL {portal.number}
          </span>
          {visited && (
            <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
              <CheckCircle2 className="w-3 h-3" />
              <span className="hidden sm:inline">DISCOVERED</span>
            </span>
          )}
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700/60 text-slate-300 group-hover:border-emerald-500/50 group-hover:text-emerald-300 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] group-hover:bg-emerald-300 transition-colors" />
          <span className="text-[11px] font-semibold tracking-wider">{portal.status}</span>
        </div>
      </div>

      {/* Main Content Info Area */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-col">
        {/* Category Header */}
        <div className="text-[11px] font-mono-code text-cyan-400/90 tracking-widest uppercase mb-1 flex items-center gap-2">
          <span>{portal.category}</span>
          <span className="text-slate-600">//</span>
          <span className="text-slate-400">{portal.telemetry}</span>
        </div>

        {/* Large Uppercase Title */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-amber-400 transition-colors duration-200">
          {portal.number} — {portal.title}
        </h2>

        {/* Short Description */}
        <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal line-clamp-2">
          {portal.description}
        </p>

        {/* Bottom Action Row with Animated Arrow */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono-code text-slate-400 group-hover:text-white transition-colors">
          <span className="tracking-wider group-hover:text-amber-400 transition-colors">
            ENTER PORTAL
          </span>
          <div className="flex items-center gap-1 text-cyan-400 group-hover:text-amber-400 transition-colors">
            <span className="text-[11px] font-semibold">INITIALIZE</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
          </div>
        </div>
      </div>

      {/* Subtle Corner HUD Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500/50 group-hover:border-amber-400 transition-colors pointer-events-none" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500/50 group-hover:border-amber-400 transition-colors pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500/50 group-hover:border-amber-400 transition-colors pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500/50 group-hover:border-amber-400 transition-colors pointer-events-none" />
    </Link>
  )
}
