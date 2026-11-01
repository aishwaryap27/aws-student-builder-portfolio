import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, LayoutGrid } from 'lucide-react'

interface BackToHubProps {
  currentPortalName?: string
}

export const BackToHub: React.FC<BackToHubProps> = ({ currentPortalName }) => {
  return (
    <div className="w-full bg-[#080d1a] border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-mono-code text-xs">
        <Link
          to="/"
          className="flex items-center gap-2 text-cyan-400 hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded px-1"
          aria-label="Return to Command Hub"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold tracking-wider">RETURN TO COMMAND HUB</span>
        </Link>

        {currentPortalName && (
          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <LayoutGrid className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-slate-300 font-bold">{currentPortalName}</span>
          </div>
        )}
      </div>
    </div>
  )
}
