import React, { useState, useRef } from 'react'
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

  const cardRef = useRef<HTMLAnchorElement | null>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Center coordinates (-1 to 1)
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const percentX = (x - centerX) / centerX
    const percentY = (y - centerY) / centerY

    // Restrained 3D tilt (max 5 degrees)
    setRotate({
      x: -percentY * 5,
      y: percentX * 5
    })

    setGlowPos({
      x,
      y
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  const handleClick = () => {
    markPortalVisited(portal.id)
  }

  return (
    <div className="card-perspective-container w-full">
      <Link
        ref={cardRef}
        to={portal.route}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`Enter ${portal.title} portal`}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-4px)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
        }}
        className="group relative flex flex-col justify-end min-h-[310px] sm:min-h-[350px] lg:min-h-[370px] rounded-lg overflow-hidden border border-slate-800/90 bg-[#0a0f1d] transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 card-perspective-inner"
      >
        {/* Background Artwork */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={portal.image}
            alt=""
            loading="eager"
            className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 ease-out"
          />
          {/* Dark Vignette Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/75 to-transparent transition-opacity duration-300 group-hover:via-[#060913]/60" />
        </div>

        {/* Cursor-Following Holographic Spotlight */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 280px at ${glowPos.x}px ${glowPos.y}px, rgba(56, 189, 248, 0.18), transparent 70%)`
            }}
          />
        )}

        {/* Top HUD Telemetry Bar */}
        <div className="relative z-20 p-5 pb-0 flex items-center justify-between text-xs font-mono-code mb-auto">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-slate-900/90 border border-slate-700/80 text-cyan-400 font-bold tracking-wider shadow-sm">
              PORTAL {portal.number}
            </span>
            {visited && (
              <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded">
                <CheckCircle2 className="w-3 h-3" />
                <span className="hidden sm:inline font-semibold">DISCOVERED</span>
              </span>
            )}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/60 text-slate-300 group-hover:border-emerald-500/60 group-hover:text-emerald-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] group-hover:bg-emerald-300 transition-colors" />
            <span className="text-[11px] font-semibold tracking-wider">{portal.status}</span>
          </div>
        </div>

        {/* Main Content Info Area */}
        <div className="relative z-20 p-5 sm:p-6 flex flex-col">
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
            <span className="tracking-wider group-hover:text-amber-400 transition-colors font-medium">
              ENTER PORTAL
            </span>
            <div className="flex items-center gap-1.5 text-cyan-400 group-hover:text-amber-400 transition-colors">
              <span className="text-[11px] font-semibold">INITIALIZE</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </div>
          </div>
        </div>

        {/* Corner HUD Reticle Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/60 group-hover:border-amber-400 transition-colors pointer-events-none z-20" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/60 group-hover:border-amber-400 transition-colors pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500/60 group-hover:border-amber-400 transition-colors pointer-events-none z-20" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/60 group-hover:border-amber-400 transition-colors pointer-events-none z-20" />
      </Link>
    </div>
  )
}
