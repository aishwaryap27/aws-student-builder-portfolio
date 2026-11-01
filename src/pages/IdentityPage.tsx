import React, { useEffect, useState } from 'react'
import { BackToHub } from '../components/navigation/BackToHub'
import { PROFILE_DATA } from '../data/profile'
import { useExploration } from '../context/useExploration'
import { User, Award, GraduationCap, ChevronDown, ChevronUp, Cpu, Copy, Check, Server, Eye, FileSpreadsheet, ShieldCheck } from 'lucide-react'


export const IdentityPage: React.FC = () => {
  const { markPortalVisited } = useExploration()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)
  const [copiedBio, setCopiedBio] = useState(false)
  const [activeDomain, setActiveDomain] = useState<'backend' | 'iot' | 'data' | 'cv'>('backend')

  useEffect(() => {
    markPortalVisited('identity')
  }, [markPortalVisited])

  const toggleEducation = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx)
  }

  const copyProfileSummary = () => {
    const text = `${PROFILE_DATA.fullName} — ${PROFILE_DATA.tagline}\n\n${PROFILE_DATA.summary}\n\nEducation: BE CSE at RNS Institute of Technology (VTU) · CGPA: 9.6/10 · State Rank: 10\nEmail: ${PROFILE_DATA.email}`
    navigator.clipboard.writeText(text)
    setCopiedBio(true)
    setTimeout(() => setCopiedBio(false), 2000)
  }

  const domainBriefs = {
    backend: {
      title: 'Backend Engineering & Distributed Architectures',
      icon: <Server className="w-4 h-4 text-cyan-400" />,
      desc: 'Building autonomous, decoupled microservices in Java and Spring Boot. Leveraging Spring Data JPA, Hibernate, and independent MySQL instances to enforce strict domain boundaries, with Spring Cloud Gateway and Eureka for resilient inter-service routing.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'Spring Data JPA', 'Hibernate', 'Microservices', 'MySQL']
    },
    iot: {
      title: 'IoT & Hardware-Software Interfacing',
      icon: <Cpu className="w-4 h-4 text-amber-400" />,
      desc: 'Developing embedded firmware logic on ESP32 microcontrollers with simulated sensor telemetry. Experienced in sensor interfacing concepts (HC-SR04 ultrasonic, strain-gauge load cells with HX711), and participating in the hands-on Samsung Innovation Campus IoT Program.',
      technologies: ['ESP32', 'ESP32-CAM', 'Ultrasonic Sensors', 'Load Cell (HX711)', 'DHT11', 'Hardware Interfacing']
    },
    data: {
      title: 'Data Quality & Pipeline Engineering',
      icon: <FileSpreadsheet className="w-4 h-4 text-emerald-400" />,
      desc: 'Constructing automated data profiling and validation backends in Python and FastAPI. Implementing deterministic missing-value detection, statistical median/mode imputation, and duplicate removal containerized inside Docker for consistent cloud deployment.',
      technologies: ['Python', 'FastAPI', 'Pandas', 'NumPy', 'Docker', 'Render']
    },
    cv: {
      title: 'Computer Vision & Landmark Geometry',
      icon: <Eye className="w-4 h-4 text-cyan-300" />,
      desc: 'Extracting 3D facial mesh geometries using OpenCV and MediaPipe. Computing ocular and oral aspect ratios (EAR & MAR) over temporal sliding windows to analyze behavioral patterns such as sustained eye closure and yawning.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'EAR Geometry', 'MAR Metrics', 'Temporal Algorithms']
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#060913] text-[#f8fafc]">
      <BackToHub currentPortalName="PORTAL 01 // THE IDENTITY LAB" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-mono-code">
        
        {/* Module Header */}
        <div className="mb-8 border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>PORTAL 01 // PERSONAL IDENTITY DOSSIER</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              THE IDENTITY LAB
            </h1>
            <p className="text-sm text-slate-400 font-sans mt-1">
              Authoritative background, academic statistics, and engineering philosophy.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={copyProfileSummary}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-white text-xs transition-colors cursor-pointer"
              title="Copy Briefing to Clipboard"
            >
              {copiedBio ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Briefing Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Copy Candidate Brief</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-950/30 border border-amber-500/30 px-3 py-1.5 rounded">
              <ShieldCheck className="w-4 h-4" />
              <span>VERIFIED DOSSIER</span>
            </div>
          </div>
        </div>

        {/* Primary Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Left Column: Holographic ID Card */}
          <div className="lg:col-span-1 bg-[#0a0f1d] border border-cyan-500/30 rounded-lg p-6 flex flex-col justify-between shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <div>
              <div className="w-full aspect-[4/3] rounded border border-slate-800 overflow-hidden mb-5 bg-[#070b16] relative flex items-center justify-center">
                <img
                  src="/portals/portal-01-identity.svg"
                  alt="Biometric Identity Interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[10px] text-cyan-300 font-mono-code border border-cyan-500/30">
                  ID: AP-2027-VTU
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-cyan-400 tracking-wider">FULL NAME</span>
                <h2 className="text-xl font-bold text-white tracking-wide">
                  {PROFILE_DATA.fullName}
                </h2>
                <p className="text-xs text-amber-400 font-mono-code">
                  "{PROFILE_DATA.tagline}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 text-xs space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">Program:</span>
                  <span className="text-white font-medium">BE CSE (Full-time)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Institution:</span>
                  <span className="text-white font-medium text-right">RNSIT, Bangalore</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Affiliation:</span>
                  <span className="text-white font-medium">VTU</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Expected Grad:</span>
                  <span className="text-amber-400 font-bold">2027</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-[10px] text-slate-500 block mb-2">COMMUNICATION CODES:</span>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="text-xs text-cyan-400 hover:underline block truncate"
              >
                {PROFILE_DATA.email}
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Verified Statistics HUD */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Professional Introduction Panel */}
            <div className="bg-[#0a0f1d] border border-slate-800 rounded-lg p-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-3">
                <User className="w-4 h-4" />
                <span>EXECUTIVE BRIEFING</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
                {PROFILE_DATA.summary}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mt-3">
                {PROFILE_DATA.extendedBio}
              </p>

              {/* Engineering Interests */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-2.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>CORE ENGINEERING INTERESTS</span>
                </div>
                <div className="flex flex-wrap gap-2 font-mono-code text-xs">
                  {PROFILE_DATA.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700/80 text-slate-200 hover:border-amber-500/50 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Statistics Telemetry HUD */}
            <div className="bg-[#0a0f1d] border border-slate-800 rounded-lg p-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-4">
                <Award className="w-4 h-4" />
                <span>VERIFIED ACADEMIC TELEMETRY</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PROFILE_DATA.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded bg-[#070b16] border border-slate-800/80 flex flex-col justify-between"
                  >
                    <span className="text-[10px] text-slate-400">{stat.label}</span>
                    <span className="text-lg font-bold text-amber-400 my-1">{stat.value}</span>
                    <span className="text-[10px] text-slate-400 truncate">{stat.highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Domain Architecture Focus Switcher */}
        <section className="bg-[#0a0f1d] border border-slate-800 rounded-lg p-6 sm:p-8 mb-10">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
              <Cpu className="w-4 h-4" />
              <span>CORE ARCHITECTURAL DOMAIN PROFILES</span>
            </div>
            <span className="text-[11px] text-slate-500">SELECT TO EXPLORE PILLARS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {(['backend', 'iot', 'data', 'cv'] as const).map((key) => {
              const d = domainBriefs[key]
              const isSelected = activeDomain === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveDomain(key)}
                  className={`p-3 rounded border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                      : 'bg-[#070b16] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {d.icon}
                  <span className="text-xs font-bold uppercase truncate">{key}</span>
                </button>
              )
            })}
          </div>

          <div className="p-5 rounded bg-[#070b16] border border-cyan-500/30 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
              {domainBriefs[activeDomain].icon}
              <span>{domainBriefs[activeDomain].title}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {domainBriefs[activeDomain].desc}
            </p>
            <div>
              <span className="text-[11px] text-slate-500 block mb-2 font-mono-code">REPRESENTATIVE TECHNOLOGIES:</span>
              <div className="flex flex-wrap gap-1.5">
                {domainBriefs[activeDomain].technologies.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Education Timeline */}
        <section className="bg-[#0a0f1d] border border-slate-800 rounded-lg p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC FOUNDATION &amp; TIMELINE</span>
            </div>
            <span className="text-[11px] text-slate-500">CLICK TO EXPAND DETAILS</span>
          </div>

          <div className="space-y-4">
            {PROFILE_DATA.education.map((edu, idx) => {
              const isExpanded = expandedIndex === idx
              return (
                <div
                  key={edu.institution}
                  className={`rounded-lg border transition-all ${
                    isExpanded
                      ? 'bg-[#080d1a] border-cyan-500/40'
                      : 'bg-[#070b16] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleEducation(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <span className="text-xs text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30 w-fit">
                        {edu.period}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-white font-sans">
                          {edu.institution}
                        </h3>
                        <p className="text-xs text-slate-400">
                          {edu.degree} · <span className="text-cyan-400 font-semibold">{edu.score}</span>
                        </p>
                      </div>
                    </div>

                    <div className="text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-800/80 text-xs text-slate-300 font-sans space-y-2">
                      <div className="flex flex-wrap gap-4 text-slate-400 pt-2 font-mono-code text-[11px]">
                        <span>University: {edu.university}</span>
                        <span>Location: {edu.location}</span>
                        <span>Format: {edu.type}</span>
                      </div>
                      <div className="p-3 rounded bg-amber-950/20 border border-amber-500/30 text-amber-300 text-xs mt-2">
                        <strong>Honors Distinction:</strong> {edu.distinction}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
