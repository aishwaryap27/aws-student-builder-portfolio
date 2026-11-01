import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react'
import { useExploration } from '../../context/ExplorationContext'
import { PROFILE_DATA } from '../../data/profile'

interface TerminalModalProps {
  isOpen: boolean
  onClose: () => void
}

interface CommandHistoryItem {
  id: string
  command: string
  output: React.ReactNode
  isError?: boolean
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'welcome-1',
      command: 'sys --status',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-emerald-400 font-bold">AISHWARYA.EXE TERMINAL [OS v2.6.0-ONLINE]</p>
          <p>Type <span className="text-amber-400 font-bold">help</span> to view available system diagnostic commands.</p>
          <p className="text-slate-500 text-xs">AWS Student Builder Challenge Build Environment.</p>
        </div>
      )
    }
  ])
  const [historyIndex, setHistoryIndex] = useState<number>(-1)
  const [commandList, setCommandList] = useState<string[]>([])
  
  const { markSecretDiscovered } = useExploration()
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Focus on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  // Global Ctrl + K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        } else {
          // If parent is managing state, handled outside
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim()
    if (!trimmed) return

    setCommandList((prev) => [...prev, trimmed])
    setHistoryIndex(-1)

    const cmd = trimmed.toLowerCase()
    let output: React.ReactNode = null
    let isError = false

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-amber-400 font-bold mb-1">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
              <div><span className="text-cyan-400 font-bold">about</span> : Candidate introduction &amp; summary</div>
              <div><span className="text-cyan-400 font-bold">projects</span> : List core engineering projects</div>
              <div><span className="text-cyan-400 font-bold">skills</span> : Show technical skill domains</div>
              <div><span className="text-cyan-400 font-bold">achievements</span> : View academic honors &amp; ranks</div>
              <div><span className="text-cyan-400 font-bold">journey</span> : Inspect chronological timeline</div>
              <div><span className="text-cyan-400 font-bold">contact</span> : View communication channels</div>
              <div><span className="text-cyan-400 font-bold">clear</span> : Clear terminal history</div>
              <div><span className="text-slate-500 italic">[secret]</span> : Discoverable engineer log</div>
            </div>
          </div>
        )
        break

      case 'about':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="font-bold text-white">{PROFILE_DATA.fullName} — {PROFILE_DATA.tagline}</p>
            <p className="text-xs text-slate-300">{PROFILE_DATA.summary}</p>
            <div className="text-xs text-cyan-400 flex flex-wrap gap-2 pt-1">
              <span>CGPA: 9.6/10</span> • 
              <span>State Rank: 10</span> • 
              <span>RNSIT BE CSE (2027)</span>
            </div>
            <button
              onClick={() => {
                onClose()
                navigate('/identity')
              }}
              className="text-amber-400 hover:underline text-xs block mt-1"
            >
              → Navigate to /identity
            </button>
          </div>
        )
        break

      case 'projects':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="font-bold text-amber-400">CORE ENGINEERING PROJECTS:</p>
            <ul className="text-xs space-y-1 text-slate-300">
              <li>1. <span className="text-white font-semibold">E-Commerce Microservices</span> (Java, Spring Boot, MySQL, Eureka, Gateway)</li>
              <li>2. <span className="text-white font-semibold">CSV Data Quality Platform</span> (Python, FastAPI, Docker, 5-stage cleaning)</li>
              <li>3. <span className="text-white font-semibold">Real-Time Facial Behavior Analysis</span> (Python, OpenCV, MediaPipe, EAR/MAR)</li>
              <li>4. <span className="text-white font-semibold">EcoBand: Smart IoT Waste System</span> (ESP32, Load Cell, Sensors, IEEE SASIGD 2026)</li>
            </ul>
            <button
              onClick={() => {
                onClose()
                navigate('/projects')
              }}
              className="text-cyan-400 hover:underline text-xs block mt-1"
            >
              → Open Project Labs (/projects)
            </button>
          </div>
        )
        break

      case 'skills':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="font-bold text-cyan-400">TECHNICAL SKILL CONSTELLATION:</p>
            <div className="text-xs space-y-1 text-slate-300">
              <p><span className="text-amber-400">Languages:</span> Java, Python, SQL</p>
              <p><span className="text-amber-400">Backend:</span> Spring Boot, REST APIs, Spring Data JPA, Hibernate, Microservices</p>
              <p><span className="text-amber-400">Database:</span> MySQL</p>
              <p><span className="text-amber-400">Tools:</span> Git, GitHub, Docker, Postman, IntelliJ, VS Code, MySQL Workbench, Jira, Vercel, Railway</p>
              <p><span className="text-amber-400">Hardware:</span> ESP32, ESP32-CAM, Ultrasonic Sensors, Load Cell, DHT11</p>
            </div>
            <button
              onClick={() => {
                onClose()
                navigate('/skills')
              }}
              className="text-amber-400 hover:underline text-xs block mt-1"
            >
              → Open Skill Matrix (/skills)
            </button>
          </div>
        )
        break

      case 'achievements':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="font-bold text-amber-400">VERIFIED ACADEMIC &amp; RESEARCH ACHIEVEMENTS:</p>
            <ul className="text-xs space-y-1 text-slate-300">
              <li>• <span className="text-amber-300 font-semibold">Medal of Merit:</span> CSE Branch Topper across 3 semesters</li>
              <li>• <span className="text-amber-300 font-semibold">Karnataka State PUE:</span> 10th Rank in State Examination (98.16%)</li>
              <li>• <span className="text-amber-300 font-semibold">NPTEL Intro to Machine Learning:</span> Top 1%</li>
              <li>• <span className="text-amber-300 font-semibold">NPTEL Demystifying Networks:</span> Top 5%</li>
              <li>• <span className="text-amber-300 font-semibold">IEEE SASIGD 2026:</span> Presented EcoBand Smart Waste System</li>
            </ul>
            <button
              onClick={() => {
                onClose()
                navigate('/achievements')
              }}
              className="text-cyan-400 hover:underline text-xs block mt-1"
            >
              → Open Achievement Vault (/achievements)
            </button>
          </div>
        )
        break

      case 'journey':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="font-bold text-cyan-400">CHRONOLOGICAL MILESTONES:</p>
            <ul className="text-xs space-y-1 text-slate-300">
              <li>• 2020: Class X (CBSE 89.6%) · Little Rock Indian School</li>
              <li>• 2022: PUC II (Karnataka State Rank 10, 98.16%) · MGM College</li>
              <li>• 2023-2027: BE CSE (CGPA 9.6/10) · RNS Institute of Technology</li>
              <li>• 2024-2025: IEEE CTSOC Treasurer &amp; Club Leadership</li>
              <li>• Jan-Jun 2026: Samsung Innovation Campus IoT Program</li>
            </ul>
            <button
              onClick={() => {
                onClose()
                navigate('/journey')
              }}
              className="text-amber-400 hover:underline text-xs block mt-1"
            >
              → Open Journey Archive (/journey)
            </button>
          </div>
        )
        break

      case 'contact':
      case 'connect':
        output = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="font-bold text-white">COMMUNICATION COORDINATES:</p>
            <p>Email: <a href="mailto:aishwaryapramod23cs@rnsit.ac.in" className="text-cyan-400 hover:underline">aishwaryapramod23cs@rnsit.ac.in</a></p>
            <p>GitHub: <a href="https://github.com/aishwaryap27" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">github.com/aishwaryap27</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/aishwarya-pramod-79066433b" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">linkedin.com/in/aishwarya-pramod-79066433b</a></p>
          </div>
        )
        break

      case 'clear':
        setHistory([])
        setInput('')
        return

      case 'evolve':
      case 'secret':
      case 'matrix':
      case 'superpower':
        markSecretDiscovered()
        output = (
          <div className="p-3 rounded bg-amber-950/40 border border-amber-500/60 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>EASTER EGG UNLOCKED // DEVELOPER NOTE</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              "Engineering is not about knowing every answer on day one; it's about having the relentless curiosity to break systems down to first principles and reconstruct them stronger. Thank you for taking the time to explore AISHWARYA.EXE!"
            </p>
            <p className="text-[11px] text-cyan-400 font-mono-code">
              — Aishwarya Pramod · AWS Student Builder Challenge 2026
            </p>
            <p className="text-[10px] text-emerald-400 font-mono-code font-bold">
              [ACHIEVEMENT UNLOCKED: SECRET DEVELOPER BADGE]
            </p>
          </div>
        )
        break

      default:
        isError = true
        output = (
          <p className="text-red-400 text-xs">
            Command not recognized: "{rawCmd}". Type <span className="text-amber-400 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for valid diagnostic commands.
          </p>
        )
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: rawCmd,
        output,
        isError
      }
    ])
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandList.length === 0) return
      const nextIndex = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(nextIndex)
      setInput(commandList[nextIndex] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === -1) return
      const nextIndex = historyIndex + 1
      if (nextIndex >= commandList.length) {
        setHistoryIndex(-1)
        setInput('')
      } else {
        setHistoryIndex(nextIndex)
        setInput(commandList[nextIndex] || '')
      }
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terminal-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#070b16] border border-cyan-500/40 rounded-lg shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col h-[520px] max-h-[85vh] font-mono-code text-sm overflow-hidden">
        
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-[#0c1224] border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={onClose}></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div className="ml-2 flex items-center gap-1 text-xs text-slate-300">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span id="terminal-modal-title" className="font-bold">aishwarya.exe // interactive-cli</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 hidden sm:inline">Press ESC to exit</span>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Command Output Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono-code text-xs">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyan-400">aishwarya@universe:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Active Command Input Line */}
        <div className="p-3 bg-[#0a0f1d] border-t border-slate-800 flex items-center gap-2">
          <span className="text-cyan-400 font-bold text-xs whitespace-nowrap">
            aishwarya@universe:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (e.g. help, about, evolve)..."
            className="flex-1 bg-transparent text-white font-mono-code text-xs focus:outline-none placeholder:text-slate-600"
            aria-label="Terminal Command Input"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            onClick={() => handleCommand(input)}
            className="p-1.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-900/60 hover:text-white transition-colors"
            title="Execute Command"
            aria-label="Execute Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
