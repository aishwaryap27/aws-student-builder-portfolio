import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cpu, Server, FileSpreadsheet, Eye, ArrowRight, CheckCircle2, Loader2, Sparkles } from 'lucide-react'

interface ProblemOption {
  id: string
  label: string
  icon: React.ReactNode
  projectTitle: string
  projectRoute: string
  skills: string[]
  explanation: string
  domain: string
}

const OPTIONS: ProblemOption[] = [
  {
    id: 'iot',
    label: 'Build an intelligent IoT solution.',
    icon: <Cpu className="w-4 h-4 text-amber-400" />,
    projectTitle: 'EcoBand: Smart IoT-Based Waste Management System',
    projectRoute: '/projects/ecoband',
    skills: ['ESP32', 'ESP32-CAM', 'Ultrasonic Sensors', 'Load Cell', 'IoT Hardware', 'Calorific Estimation'],
    explanation: 'Combines retrofit hardware telemetry with sensor fusion (ultrasonic fill-level + load-cell weight estimation) for real-time municipal resource monitoring. Presented at IEEE SASIGD 2026.',
    domain: 'EMBEDDED IoT // SENSOR TELEMETRY'
  },
  {
    id: 'backend',
    label: 'Develop a scalable backend.',
    icon: <Server className="w-4 h-4 text-cyan-400" />,
    projectTitle: 'E-Commerce Microservices Platform',
    projectRoute: '/projects/ecommerce',
    skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Eureka Discovery', 'API Gateway', 'Docker'],
    explanation: 'Architected decoupled microservices (Product, Order, User) with independent database schemas, Eureka dynamic service registry, and resilient API routing deployed across Railway and Vercel.',
    domain: 'DISTRIBUTED SYSTEMS // CLOUD BACKEND'
  },
  {
    id: 'data',
    label: 'Analyse and clean data.',
    icon: <FileSpreadsheet className="w-4 h-4 text-amber-400" />,
    projectTitle: 'CSV Data Quality & Processing Platform',
    projectRoute: '/projects/csv-platform',
    skills: ['Python', 'FastAPI', 'Data Quality Checks', 'Imputation Engine', 'Docker', 'Render'],
    explanation: 'Engineered an automated 5-stage data validation pipeline: structural analysis, missing-value detection, statistical median/mode imputation, and duplicate removal containerized with Docker.',
    domain: 'DATA PROCESSING // PIPELINE AUTOMATION'
  },
  {
    id: 'cv',
    label: 'Explore computer vision.',
    icon: <Eye className="w-4 h-4 text-cyan-400" />,
    projectTitle: 'Real-Time Facial Behavior Analysis and Monitoring',
    projectRoute: '/projects/facial-analysis',
    skills: ['Python', 'OpenCV', 'MediaPipe', 'Eye Aspect Ratio (EAR)', 'Mouth Aspect Ratio (MAR)', 'Temporal Thresholds'],
    explanation: 'Calculates real-time facial landmark geometry via MediaPipe and OpenCV to measure EAR (blinking/eye closure) and MAR (yawning), evaluating fatigue through temporal threshold algorithms.',
    domain: 'COMPUTER VISION // REAL-TIME ANALYTICS'
  }
]

export const ProblemSolverScanner: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isScanning, setIsScanning] = useState(false)

  const handleSelect = (id: string) => {
    if (selectedId === id) return
    setIsScanning(true)
    setSelectedId(id)

    setTimeout(() => {
      setIsScanning(false)
    }, 600)
  }

  const selectedOption = OPTIONS.find((o) => o.id === selectedId)

  return (
    <div className="w-full bg-[#0a0f1d] border border-slate-800 rounded-lg p-5 sm:p-7 font-mono-code relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>ENGINEERING DNA PROBLEM SOLVER</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mt-1">
            WHAT KIND OF PROBLEM ARE YOU TRYING TO SOLVE?
          </h3>
        </div>
        <span className="text-[11px] text-slate-500 self-start sm:self-auto px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
          INTERACTIVE SCANNER
        </span>
      </div>

      {/* 4 Interactive Option Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
        {OPTIONS.map((option) => {
          const isSelected = selectedId === option.id
          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`p-3.5 rounded text-left transition-all flex items-center justify-between gap-3 border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isSelected
                  ? 'bg-amber-950/30 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                  : 'bg-slate-900/60 border-slate-800/90 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-slate-800/80 border border-slate-700/60">
                  {option.icon}
                </div>
                <span className="text-xs sm:text-sm font-sans font-medium text-slate-100">
                  {option.label}
                </span>
              </div>
              {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
            </button>
          )
        })}
      </div>

      {/* Scanning Animation State */}
      {isScanning && (
        <div className="p-6 rounded bg-[#080d1a] border border-cyan-500/40 flex items-center justify-center gap-3 text-cyan-400 text-xs">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="tracking-wider animate-pulse">SCANNING ARCHITECTURAL REPOSITORIES &amp; SKILL GRAPHS...</span>
        </div>
      )}

      {/* Discovered Match Result Box */}
      {!isScanning && selectedOption && (
        <div className="p-5 rounded bg-[#070c18] border border-amber-500/40 mt-4 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase">
                {selectedOption.domain}
              </span>
              <h4 className="text-base font-bold text-amber-400 mt-0.5">
                {selectedOption.projectTitle}
              </h4>
            </div>
            <Link
              to={selectedOption.projectRoute}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors self-start sm:self-auto shrink-0"
            >
              <span>OPEN PROJECT BRIEF</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Explanation */}
          <div>
            <span className="text-[11px] text-slate-400 block mb-1">ARCHITECTURAL CONNECTION:</span>
            <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
              {selectedOption.explanation}
            </p>
          </div>

          {/* Associated Skills */}
          <div>
            <span className="text-[11px] text-slate-400 block mb-2">RELEVANT TECH STACK:</span>
            <div className="flex flex-wrap gap-1.5">
              {selectedOption.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-cyan-300 text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
