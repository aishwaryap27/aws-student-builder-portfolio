import React, { useEffect, useState } from 'react'
import { BackToHub } from '../components/navigation/BackToHub'
import { JOURNEY_DATA } from '../data/journey'
import { useExploration } from '../context/useExploration'
import { ChevronDown, ChevronUp, Clock, Filter } from 'lucide-react'


export const JourneyPage: React.FC = () => {
  const { markPortalVisited } = useExploration()
  const [expandedTitles, setExpandedTitles] = useState<string[]>(() => [
    JOURNEY_DATA[0]?.title || '',
    JOURNEY_DATA[1]?.title || '',
    JOURNEY_DATA[2]?.title || ''
  ])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  useEffect(() => {
    markPortalVisited('journey')
  }, [markPortalVisited])

  const toggleMilestone = (title: string) => {
    setExpandedTitles((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    )
  }

  const toggleAll = () => {
    if (expandedTitles.length === JOURNEY_DATA.length) {
      setExpandedTitles([])
    } else {
      setExpandedTitles(JOURNEY_DATA.map((m) => m.title))
    }
  }

  const filteredData = JOURNEY_DATA.filter((m) => {
    if (selectedCategory === 'All') return true
    if (selectedCategory === 'Education') return m.period?.includes('Education') || m.period?.includes('School') || m.period?.includes('Engineering')
    if (selectedCategory === 'Industry IoT') return m.title.includes('Samsung')
    if (selectedCategory === 'Leadership & Clubs') return m.title.includes('IEEE') || m.title.includes('Club')
    return true
  })

  return (
    <div className="w-full min-h-screen bg-[#060913] text-[#f8fafc]">
      <BackToHub currentPortalName="PORTAL 05 // THE JOURNEY ARCHIVE" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-mono-code">
        
        {/* Module Header */}
        <div className="mb-8 border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>PORTAL 05 // CHRONOLOGICAL LOGS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              THE JOURNEY ARCHIVE
            </h1>
            <p className="text-sm text-slate-400 font-sans mt-1">
              A chronological trajectory tracing education, Samsung Innovation Campus, leadership, and technical milestones.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={toggleAll}
              className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {expandedTitles.length === JOURNEY_DATA.length ? 'Collapse All' : 'Expand All'}
            </button>

            <div className="flex items-center gap-2 text-xs text-cyan-400 bg-cyan-950/30 border border-cyan-500/30 px-3 py-1.5 rounded">
              <Clock className="w-4 h-4" />
              <span>2020 — 2027+</span>
            </div>
          </div>
        </div>

        {/* Milestone Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 text-xs scrollbar-none">
          <div className="flex items-center gap-1.5 text-slate-500 pr-2 border-r border-slate-800 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </div>
          {['All', 'Education', 'Industry IoT', 'Leadership & Clubs'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded transition-colors shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Vector Spine */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8 my-6">
          {filteredData.map((milestone, idx) => {
            const isExpanded = expandedTitles.includes(milestone.title)
            return (
              <div key={idx} className="relative group">
                
                {/* Checkpoint Node Marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#060913] border-2 border-cyan-400 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-amber-400 transition-colors"></span>
                </div>

                {/* Card Container */}
                <div
                  className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'bg-[#0a0f1d] border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                      : 'bg-[#080d1a] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleMilestone(milestone.title)}
                    className="w-full p-5 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    aria-expanded={isExpanded}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                          {milestone.year}
                        </span>
                        {milestone.score && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-950/50 border border-amber-500/30 text-amber-300">
                            {milestone.score}
                          </span>
                        )}
                        <span className="text-[11px] text-slate-500 font-sans">
                          {milestone.period}
                        </span>
                      </div>

                      <h2 className="text-base sm:text-lg font-bold text-white font-sans">
                        {milestone.title}
                      </h2>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        {milestone.subtitle} · {milestone.institution}
                      </p>
                    </div>

                    <div className="text-slate-400 shrink-0 self-center">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Body */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-800/80 bg-[#070b16] space-y-4">
                      <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed pt-2">
                        {milestone.description}
                      </p>

                      <div className="p-3.5 rounded bg-[#0a0f1d] border border-slate-800 space-y-2">
                        <span className="text-[10px] text-cyan-400 font-bold block mb-1">
                          KEY HIGHLIGHTS &amp; RESPONSIBILITIES:
                        </span>
                        <ul className="text-xs text-slate-300 space-y-1.5 font-sans">
                          {milestone.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-cyan-400">▹</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {milestone.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[10px]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Status Card */}
        <div className="mt-12 p-6 rounded-lg bg-[#0a0f1d] border border-slate-800 text-center space-y-2">
          <span className="text-xs font-bold text-amber-400 tracking-wider">
            SYSTEM STATUS: ALWAYS LEARNING
          </span>
          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl mx-auto">
            "Every project and academic milestone is a building block toward designing intelligent, distributed, and resilient systems."
          </p>
          <span className="text-[11px] text-slate-500 block">
            Aishwarya Pramod · Computer Science &amp; Engineering 2027
          </span>
        </div>
      </main>
    </div>
  )
}
