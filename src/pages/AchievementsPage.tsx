import React, { useEffect, useState } from 'react'
import { BackToHub } from '../components/navigation/BackToHub'
import { ACHIEVEMENTS_DATA } from '../data/achievements'
import type { AchievementItem } from '../types'
import { useExploration } from '../context/ExplorationContext'
import { Award, ChevronDown, ChevronUp, Filter, Sparkles, CheckCircle2, ShieldCheck, Search } from 'lucide-react'

export const AchievementsPage: React.FC = () => {
  const { markPortalVisited, markAchievementsInspected } = useExploration()
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Academic' | 'Technical' | 'Presentations'>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [expandedId, setExpandedId] = useState<string | null>('medal-of-merit')

  useEffect(() => {
    markPortalVisited('achievements')
  }, [markPortalVisited])

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
    markAchievementsInspected()
  }

  const filteredAchievements = ACHIEVEMENTS_DATA.filter((item) => {
    const matchesFilter = selectedFilter === 'All' || item.category === selectedFilter
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.metric && item.metric.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <div className="w-full min-h-screen bg-[#060913] text-[#f8fafc]">
      <BackToHub currentPortalName="PORTAL 04 // THE ACHIEVEMENT VAULT" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-mono-code">
        
        {/* Module Header */}
        <div className="mb-8 border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>PORTAL 04 // VERIFIED HONORS VAULT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              THE ACHIEVEMENT VAULT
            </h1>
            <p className="text-sm text-slate-400 font-sans mt-1">
              Curated, verified academic milestones, state competitive rankings, and IEEE conference presentations.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-950/30 border border-amber-500/30 px-3 py-1.5 rounded self-start md:self-auto">
            <ShieldCheck className="w-4 h-4" />
            <span>VERIFIED TEXT RECORDS ONLY // NO ATTACHMENTS</span>
          </div>
        </div>

        {/* Quick Summary Telemetry Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="p-3.5 rounded bg-[#0a0f1d] border border-slate-800">
            <span className="text-[10px] text-slate-500 block">TOTAL RECORDS</span>
            <span className="text-lg font-bold text-white">5 Verified</span>
            <span className="text-[10px] text-cyan-400 block mt-0.5">Academic &amp; Research</span>
          </div>
          <div className="p-3.5 rounded bg-[#0a0f1d] border border-slate-800">
            <span className="text-[10px] text-slate-500 block">STATE STANDING</span>
            <span className="text-lg font-bold text-amber-400">Rank 10</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Karnataka PUE Board</span>
          </div>
          <div className="p-3.5 rounded bg-[#0a0f1d] border border-slate-800">
            <span className="text-[10px] text-slate-500 block">NPTEL PERCENTILE</span>
            <span className="text-lg font-bold text-emerald-400">Top 1%</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Machine Learning Elite</span>
          </div>
          <div className="p-3.5 rounded bg-[#0a0f1d] border border-slate-800">
            <span className="text-[10px] text-slate-500 block">INSTITUTIONAL MERIT</span>
            <span className="text-lg font-bold text-cyan-400">Medal of Merit</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">3-Sem Branch Topper</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs scrollbar-none">
            <div className="flex items-center gap-1.5 text-slate-500 pr-2 border-r border-slate-800 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>CATEGORY:</span>
            </div>
            {(['All', 'Academic', 'Technical', 'Presentations'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded transition-colors cursor-pointer shrink-0 ${
                  selectedFilter === filter
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {filter} {filter === 'All' ? `(${ACHIEVEMENTS_DATA.length})` : ''}
              </button>
            ))}
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search honors..."
              className="w-full bg-[#0a0f1d] border border-slate-800 rounded pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500 font-mono-code placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* Achievements Showcase Cards */}
        <div className="space-y-4 mb-12">
          {filteredAchievements.map((item: AchievementItem) => {
            const isExpanded = expandedId === item.id
            return (
              <div
                key={item.id}
                className={`rounded-lg border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0a0f1d] border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.12)]'
                    : 'bg-[#080d1a] border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Badge Crest */}
                    <div className="p-3 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-400 shrink-0">
                      <Award className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-amber-400">
                          {item.badgeLabel}
                        </span>
                        <span className="text-[11px] text-cyan-400">
                          {item.category}
                        </span>
                        {item.metric && (
                          <span className="text-[11px] text-slate-400 font-bold">
                            · {item.metric}
                          </span>
                        )}
                      </div>

                      <h2 className="text-base sm:text-lg font-bold text-white font-sans">
                        {item.title}
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5 font-sans">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <div className="text-slate-400 shrink-0 self-center">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-amber-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expandable Details Area */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 bg-[#070b16]">
                    <p className="text-sm text-slate-200 font-sans leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="p-4 rounded bg-[#0a0f1d] border border-slate-800/80 space-y-2">
                      <span className="text-[10px] text-amber-400 font-bold block mb-1">
                        VERIFIED INSTITUTIONAL CITATION &amp; SCOPE:
                      </span>
                      <ul className="text-xs text-slate-300 space-y-1.5 font-sans">
                        {item.expandedDetails.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-400">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Certified verified text entry · No external downloads or certificate PDFs required</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Exploration Badge Telemetry Notice */}
        <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Official academic honors are strictly decoupled from gamified website discovery badges.</span>
          </div>
          <span className="text-cyan-400 font-bold hidden sm:inline">AISHWARYA.EXE</span>
        </div>
      </main>
    </div>
  )
}
