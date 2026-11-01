import React from 'react'
import { PortalGrid } from '../components/portals/PortalGrid'
import { ExplorationProgress } from '../components/portals/ExplorationProgress'
import { ProblemSolverScanner } from '../components/features/ProblemSolverScanner'
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react'

interface HomePageProps {
  onOpenTerminal: () => void
  onOpenBadges: () => void
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenTerminal, onOpenBadges }) => {
  return (
    <main className="w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl mx-auto">
      
      {/* SECTION B: WELCOME SECTION */}
      <section className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        
        {/* Futuristic Sub-header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 font-mono-code text-xs mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="tracking-widest uppercase">SYSTEM IDENTIFICATION // AISHWARYA.EXE</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
          WELCOME TO MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">UNIVERSE.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto">
          Select a portal to explore my engineering journey.
        </p>

        {/* Additional Small Line */}
        <p className="text-xs sm:text-sm text-slate-400 font-mono-code mt-2 tracking-wide">
          A personal collection of ideas, systems, experiments and milestones.
        </p>

        {/* Fast Utility Shortcuts */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-700/80 hover:border-cyan-500 text-slate-300 hover:text-cyan-300 text-xs font-mono-code transition-colors cursor-pointer"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>CLI Diagnostic [Ctrl+K]</span>
          </button>

          <button
            onClick={onOpenBadges}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-700/80 hover:border-amber-500 text-slate-300 hover:text-amber-300 text-xs font-mono-code transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Exploration Badges</span>
          </button>
        </div>
      </section>

      {/* SECTION C: SIX LARGE PORTAL CARDS (2 Columns x 3 Rows on Desktop) */}
      <section className="w-full mb-12">
        <PortalGrid />
      </section>

      {/* Featured Problem Solver Engine */}
      <section className="w-full max-w-6xl mx-auto mb-8">
        <ProblemSolverScanner />
      </section>

      {/* SECTION E: EXPLORATION PROGRESS */}
      <ExplorationProgress onOpenBadges={onOpenBadges} />
    </main>
  )
}
