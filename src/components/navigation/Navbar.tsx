import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Terminal as TerminalIcon, Sparkles, RotateCw } from 'lucide-react'
import { useExploration } from '../../context/useExploration'

interface NavbarProps {
  onOpenTerminal?: () => void
  onOpenBadges?: () => void
  onReplayBoot?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenBadges, onReplayBoot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { unlockedBadgesCount, totalBadgesCount } = useExploration()

  const navLinks = [
    { name: 'PROFILE', path: '/identity' },
    { name: 'SKILLS', path: '/skills' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'ACHIEVEMENTS', path: '/achievements' },
    { name: 'JOURNEY', path: '/journey' },
    { name: 'CONTACT', path: '/connect' },
  ]

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#060913]/90 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
          aria-label="AISHWARYA.EXE Home"
        >
          <div className="w-8 h-8 rounded border border-cyan-500/40 bg-cyan-950/30 flex items-center justify-center text-cyan-400 font-mono-code text-xs font-bold shadow-[0_0_12px_rgba(6,182,212,0.2)] group-hover:border-amber-500/70 group-hover:text-amber-400 transition-colors">
            A:
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono-code font-bold text-sm tracking-wider text-slate-100 group-hover:text-amber-400 transition-colors">
                AISHWARYA.EXE
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono-code px-1.5 py-0.2 bg-slate-800/90 text-cyan-400 border border-cyan-500/30 rounded">
                v2.6
              </span>
            </div>
            <span className="text-[10px] text-slate-400 tracking-tight hidden sm:block">
              Continuous Evolution
            </span>
          </div>
        </Link>

        {/* Centre: Main Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono-code text-xs tracking-wider" aria-label="Main Navigation">
          {navLinks.map((link, index) => {
            const active = isActive(link.path)
            return (
              <React.Fragment key={link.path}>
                <Link
                  to={link.path}
                  className={`px-3 py-1.5 rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    active
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30 font-semibold shadow-[0_0_10px_rgba(245,158,11,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="text-slate-600 select-none px-0.5">|</span>
                )}
              </React.Fragment>
            )
          })}
        </nav>

        {/* Right: Telemetry & Interactive Actions */}
        <div className="flex items-center gap-3">
          
          {/* Quick Badges Counter */}
          <button
            onClick={onOpenBadges}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700/60 hover:border-amber-500/40 text-slate-300 hover:text-amber-300 text-xs font-mono-code transition-colors"
            title="Discovery Badges"
            aria-label={`Discovery Badges (${unlockedBadgesCount} of ${totalBadgesCount} unlocked)`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{unlockedBadgesCount}/{totalBadgesCount}</span>
          </button>

          {/* Quick Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700/60 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs font-mono-code transition-colors cursor-pointer"
            title="Open Interactive Terminal (Ctrl + K)"
            aria-label="Open Interactive CLI Terminal"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] text-slate-400">Ctrl+K</span>
          </button>

          {/* Replay Cinematic Boot Sequence Trigger */}
          {onReplayBoot && (
            <button
              onClick={onReplayBoot}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700/60 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 text-xs font-mono-code transition-colors cursor-pointer"
              title="Replay Cinematic Boot Sequence"
              aria-label="Replay Cinematic Boot Sequence"
            >
              <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
              <span>Boot</span>
            </button>
          )}

          {/* Glowing Green Indicator: SYSTEM ONLINE */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono-code">
            <span className="relative flex h-2 w-2">
              <span className="beacon-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wider text-[11px] font-semibold whitespace-nowrap">SYSTEM ONLINE</span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 font-mono-code text-sm">
          {navLinks.map((link) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded transition-colors ${
                  active
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenBadges?.()
              }}
              className="flex items-center gap-1.5 text-amber-400"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Badges: {unlockedBadgesCount}/{totalBadgesCount}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenTerminal?.()
              }}
              className="flex items-center gap-1.5 text-cyan-400"
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>Open CLI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
