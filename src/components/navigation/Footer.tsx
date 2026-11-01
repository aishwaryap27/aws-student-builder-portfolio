import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Terminal as TerminalIcon, RotateCw } from 'lucide-react'

interface FooterProps {
  onOpenTerminal?: () => void
  onOpenBadges?: () => void
  onReplayBoot?: () => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onOpenBadges, onReplayBoot }) => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#060913] py-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono-code text-xs text-slate-400">
        
        {/* Left: System Status & Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-slate-200 tracking-wider">AISHWARYA.EXE</span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <div className="flex items-center gap-2 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span className="tracking-wide">SYSTEM STATUS: ALWAYS LEARNING.</span>
          </div>
        </div>

        {/* Right: Challenge Metadata & Quick Utilities */}
        <div className="flex items-center gap-4 text-slate-500">
          <span className="hidden lg:inline text-[11px]">AWS Student Builder Challenge · Nov 2026</span>
          <button
            onClick={onOpenBadges}
            className="hover:text-amber-400 transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Badges</span>
          </button>
          <button
            onClick={onOpenTerminal}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 cursor-pointer"
          >
            <TerminalIcon className="w-3 h-3 text-cyan-400" />
            <span>Terminal</span>
          </button>
          {onReplayBoot && (
            <button
              onClick={onReplayBoot}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 cursor-pointer"
            >
              <RotateCw className="w-3 h-3 text-cyan-400" />
              <span>Replay Boot</span>
            </button>
          )}
          <Link
            to="/connect"
            className="hover:text-white transition-colors text-slate-400"
          >
            Connect
          </Link>
        </div>
      </div>
    </footer>
  )
}
