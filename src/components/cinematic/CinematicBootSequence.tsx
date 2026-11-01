import React, { useState, useEffect, useRef } from 'react'
import { Sparkles, Terminal as TerminalIcon, FastForward } from 'lucide-react'

interface CinematicBootSequenceProps {
  onComplete: () => void
  isReplay?: boolean
}

const BOOT_MESSAGES = [
  'INITIALIZING AISHWARYA.EXE...',
  'LOADING CORE SYSTEMS...',
  'VERIFYING ENGINEERING DATABASE...',
  'CONNECTING PROJECT MODULES...',
  'CALIBRATING INTERACTIVE INTERFACE...',
  'SYNCHRONIZING KNOWLEDGE NETWORK...',
  'ALL SYSTEMS OPERATIONAL.'
]

const SYSTEM_MODULES = [
  { name: 'BACKEND_CORE', status: 'ONLINE', color: 'text-cyan-400' },
  { name: 'MICROSERVICES_REGISTRY', status: 'SYNCHRONIZED', color: 'text-amber-400' },
  { name: 'IoT_TELEMETRY', status: 'ACTIVE', color: 'text-emerald-400' },
  { name: 'ACADEMIC_VAULT', status: 'VERIFIED', color: 'text-cyan-300' }
]

export const CinematicBootSequence: React.FC<CinematicBootSequenceProps> = ({ onComplete, isReplay = false }) => {
  const [step, setStep] = useState<number>(1)
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0)
  const [activeModulesCount, setActiveModulesCount] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const [isGlitching, setIsGlitching] = useState<boolean>(false)
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false)

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const addTimer = (fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms)
    timersRef.current.push(t)
    return t
  }

  const handleFinish = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      try {
        sessionStorage.setItem('aishwarya_boot_seen', 'true')
      } catch {
        // ignore
      }
      onComplete()
    }, 600)
  }

  // Check prefers-reduced-motion
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && !isReplay) {
      handleFinish()
      return
    }

    // Step 1 -> Step 2 (Node expansion): 400ms
    addTimer(() => setStep(2), 400)

    // Step 2 -> Step 3 (Terminal initialization start): 800ms
    addTimer(() => setStep(3), 800)

    // Stream messages progressively
    BOOT_MESSAGES.forEach((_, idx) => {
      addTimer(() => {
        setCurrentMessageIndex(idx + 1)
        setProgress(Math.round(((idx + 1) / BOOT_MESSAGES.length) * 100))
        if (idx % 2 === 0) {
          setActiveModulesCount((prev) => Math.min(prev + 1, SYSTEM_MODULES.length))
        }
      }, 900 + idx * 380)
    })

    const totalMessageTime = 900 + BOOT_MESSAGES.length * 380

    // Step 4 & 5: Modules and Progress reach 100%
    addTimer(() => {
      setStep(4)
      setActiveModulesCount(SYSTEM_MODULES.length)
      setProgress(100)
    }, totalMessageTime + 200)

    // Step 6: Glitch effect and logo materialization
    addTimer(() => {
      setStep(6)
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 450)
    }, totalMessageTime + 500)

    // Step 7: Display SYSTEM STATUS: ONLINE & CONTINUOUS EVOLUTION
    addTimer(() => {
      setStep(7)
    }, totalMessageTime + 900)

    // Step 8: Cinematic transition into homepage
    addTimer(() => {
      setStep(8)
      handleFinish()
    }, totalMessageTime + 2000)

    // Keyboard listener to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleFinish()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      timersRef.current.forEach(clearTimeout)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isReplay])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-6 sm:p-12 bg-[#040711] text-[#f8fafc] font-mono-code transition-opacity duration-700 select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="System Initialization Sequence"
    >
      {/* Top Telemetry Header */}
      <div className="w-full max-w-4xl flex items-center justify-between text-xs text-slate-500 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-300 tracking-wider">AISHWARYA.EXE // BOOT.DIAGNOSTICS</span>
        </div>

        {/* Skip button */}
        <button
          onClick={handleFinish}
          className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 border border-slate-700/80 hover:border-amber-500 text-slate-300 hover:text-amber-400 transition-colors text-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Skip Boot Sequence"
        >
          <span>SKIP SEQUENCE</span>
          <FastForward className="w-3.5 h-3.5" />
          <span className="text-[10px] text-slate-500 hidden sm:inline">[ESC]</span>
        </button>
      </div>

      {/* Center Cinematic Stage */}
      <div className="w-full max-w-2xl flex flex-col items-center justify-center my-auto text-center space-y-6">
        
        {/* STEP 1 & 2: Center Glowing Reticle */}
        <div className="relative flex items-center justify-center w-36 h-36">
          {/* Outer rotating telemetry ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-2 rounded-full border border-dashed border-amber-500/30 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />

          {/* Central expanding node */}
          <div className={`rounded-full bg-cyan-400 transition-all duration-700 ${
            step === 1 ? 'w-2 h-2 shadow-[0_0_15px_#22d3ee]' : 'w-16 h-16 bg-cyan-950/40 border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center justify-center'
          }`}>
            {step >= 2 && (
              <span className="text-xs font-bold text-cyan-300 tracking-widest animate-pulse">
                SYS
              </span>
            )}
          </div>
        </div>

        {/* STEP 6 & 7: Logo Materialization with Glitch */}
        <div className="space-y-2">
          <h1
            className={`text-3xl sm:text-5xl font-extrabold tracking-wider text-white transition-all duration-300 ${
              isGlitching ? 'glitch-active text-amber-400' : 'text-white'
            }`}
          >
            AISHWARYA.EXE
          </h1>
          <p className="text-xs sm:text-sm text-cyan-400 tracking-widest uppercase">
            CONTINUOUS EVOLUTION
          </p>
          {step >= 7 && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-bold mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SYSTEM STATUS: ONLINE</span>
            </div>
          )}
        </div>

        {/* STEP 3: Terminal Stream Box */}
        <div className="w-full bg-[#070b16] border border-slate-800 rounded-lg p-4 text-left font-mono-code text-xs space-y-1.5 h-36 overflow-y-auto shadow-inner">
          {BOOT_MESSAGES.slice(0, currentMessageIndex).map((msg, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-cyan-400">❯</span>
              <span className={i === currentMessageIndex - 1 ? 'text-amber-300 font-bold' : 'text-slate-400'}>
                {msg}
              </span>
            </div>
          ))}
          {currentMessageIndex < BOOT_MESSAGES.length && (
            <div className="flex items-center gap-2 text-cyan-400 animate-pulse">
              <span>❯</span>
              <span className="inline-block w-2 h-3 bg-cyan-400"></span>
            </div>
          )}
        </div>

        {/* STEP 4: Illuminated System Modules */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full text-[11px]">
          {SYSTEM_MODULES.map((mod, idx) => {
            const isLit = idx < activeModulesCount
            return (
              <div
                key={mod.name}
                className={`p-2 rounded border text-center transition-all duration-300 ${
                  isLit
                    ? 'bg-[#0c162c] border-cyan-500/40 text-slate-200 shadow-[0_0_10px_rgba(6,182,212,0.15)]'
                    : 'bg-slate-950 border-slate-900 text-slate-700'
                }`}
              >
                <div className="truncate text-[10px] text-slate-400">{mod.name}</div>
                <div className={`font-bold mt-0.5 ${isLit ? mod.color : 'text-slate-800'}`}>
                  {isLit ? mod.status : 'WAIT'}
                </div>
              </div>
            )
          })}
        </div>

        {/* STEP 5: Horizontal Progress Bar */}
        <div className="w-full space-y-1">
          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-amber-400 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-500">
            <span>CORE LOAD: {progress}%</span>
            <span>AWS CHALLENGE 2026 // READY</span>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="w-full max-w-4xl flex items-center justify-between text-[11px] text-slate-600 border-t border-slate-800/80 pt-3">
        <span>MEM: 9.6 CGPA · SEC: VERIFIED</span>
        <span className="flex items-center gap-1.5 text-cyan-400/70">
          <Sparkles className="w-3 h-3" />
          <span>INITIALIZING DIGITAL UNIVERSE</span>
        </span>
        <span className="hidden sm:inline">VTU // BANGALORE</span>
      </div>
    </div>
  )
}
