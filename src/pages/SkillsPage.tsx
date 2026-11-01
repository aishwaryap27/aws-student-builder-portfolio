import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BackToHub } from '../components/navigation/BackToHub'
import { SKILL_CATEGORIES, SKILLS_DATA } from '../data/skills'
import type { SkillItem } from '../types'
import { useExploration } from '../context/useExploration'
import { ArrowRight, Sparkles, Filter, Link as LinkIcon, CheckCircle2, Search, Network, Grid3X3 } from 'lucide-react'

// Helper to get direct project route
const getProjectRoute = (connection?: string): { route: string; label: string } => {
  if (!connection) return { route: '/projects', label: 'Launch Project Lab' }
  if (connection.includes('E-Commerce')) return { route: '/projects/ecommerce', label: 'Launch E-Commerce Lab' }
  if (connection.includes('CSV')) return { route: '/projects/csv-platform', label: 'Launch CSV Platform Lab' }
  if (connection.includes('Facial')) return { route: '/projects/facial-analysis', label: 'Launch Vision Lab' }
  if (connection.includes('EcoBand')) return { route: '/projects/ecoband', label: 'Launch EcoBand Lab' }
  if (connection.includes('Samsung')) return { route: '/journey', label: 'View Samsung IoT Milestone' }
  return { route: '/projects', label: 'Launch Project Lab' }
}

export const SkillsPage: React.FC = () => {
  const { markPortalVisited, markSkillsInteracted } = useExploration()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [viewMode, setViewMode] = useState<'grid' | 'constellation'>('grid')
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILLS_DATA[0]!)

  useEffect(() => {
    markPortalVisited('skills')
  }, [markPortalVisited])

  const handleSelectSkill = (skill: SkillItem) => {
    setActiveSkill(skill)
    markSkillsInteracted()
  }

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.tags && skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())))
    return matchesCategory && matchesSearch
  })

  // Constellation interactive nodes mapping
  const constellationNodes = [
    { name: 'Java', cx: 160, cy: 120, cat: 'Programming' },
    { name: 'Spring Boot', cx: 300, cy: 140, cat: 'Backend' },
    { name: 'Microservices', cx: 460, cy: 110, cat: 'Backend' },
    { name: 'MySQL', cx: 340, cy: 260, cat: 'Database' },
    { name: 'Python', cx: 180, cy: 300, cat: 'Programming' },
    { name: 'FastAPI', cx: 320, cy: 370, cat: 'Backend' },
    { name: 'Docker', cx: 490, cy: 340, cat: 'Tools' },
    { name: 'ESP32', cx: 620, cy: 200, cat: 'IoT Hardware' },
    { name: 'Ultrasonic Sensors', cx: 700, cy: 120, cat: 'IoT Hardware' },
    { name: 'Load Cell', cx: 720, cy: 280, cat: 'IoT Hardware' },
  ]

  return (
    <div className="w-full min-h-screen bg-[#060913] text-[#f8fafc]">
      <BackToHub currentPortalName="PORTAL 02 // THE SKILL MATRIX" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-mono-code">
        
        {/* Module Header */}
        <div className="mb-8 border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>PORTAL 02 // ARCHITECTURAL CONSTELLATION</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              THE SKILL MATRIX
            </h1>
            <p className="text-sm text-slate-400 font-sans mt-1">
              Explore interconnected technology nodes, runtime environments, and authentic project mappings.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded p-1 text-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid Matrix View"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('constellation')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
                  viewMode === 'constellation' ? 'bg-amber-500/20 text-amber-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Constellation Graph View"
              >
                <Network className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Graph</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-950/30 border border-amber-500/30 px-3 py-1.5 rounded">
              <Sparkles className="w-4 h-4" />
              <span>INTERACTIVE</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            <div className="flex items-center gap-1.5 text-slate-500 pr-2 border-r border-slate-800 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>FILTER:</span>
            </div>
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded transition-colors shrink-0 cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              All ({SKILLS_DATA.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded transition-colors shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Query skills (e.g. Spring, Docker)..."
              className="w-full bg-[#0a0f1d] border border-slate-800 rounded pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono-code placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* View Mode 1: Constellation Topology Visualizer */}
        {viewMode === 'constellation' && (
          <div className="mb-8 p-6 rounded-lg bg-[#0a0f1d] border border-cyan-500/40 relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs">
              <span className="text-cyan-400 font-bold flex items-center gap-2">
                <Network className="w-4 h-4" />
                <span>INTERACTIVE TOPOLOGY GRAPH // CLICK ANY NODE TO INSPECT</span>
              </span>
              <span className="text-slate-500 hidden sm:inline">NODAL CLUSTERS</span>
            </div>

            <div className="w-full overflow-x-auto">
              <svg viewBox="0 0 850 440" className="w-full min-w-[700px] h-72">
                {/* Background Grid */}
                <defs>
                  <pattern id="graph-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeOpacity="0.4" />
                  </pattern>
                </defs>
                <rect width="850" height="440" fill="url(#graph-grid)" />

                {/* Circuit Links between Nodes */}
                <line x1="160" y1="120" x2="300" y2="140" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="300" y1="140" x2="460" y2="110" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="300" y1="140" x2="340" y2="260" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="180" y1="300" x2="320" y2="370" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="320" y1="370" x2="490" y2="340" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="460" y1="110" x2="620" y2="200" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.4" />
                <line x1="620" y1="200" x2="700" y2="120" stroke="#f59e0b" strokeWidth="1.8" strokeOpacity="0.6" />
                <line x1="620" y1="200" x2="720" y2="280" stroke="#f59e0b" strokeWidth="1.8" strokeOpacity="0.6" />

                {/* Interactive SVG Nodes */}
                {constellationNodes.map((n) => {
                  const matchingSkill = SKILLS_DATA.find((s) => s.name === n.name)
                  const isSelected = activeSkill.name === n.name
                  return (
                    <g
                      key={n.name}
                      transform={`translate(${n.cx}, ${n.cy})`}
                      className="cursor-pointer"
                      onClick={() => matchingSkill && handleSelectSkill(matchingSkill)}
                    >
                      <circle
                        r={isSelected ? 26 : 20}
                        fill={isSelected ? '#0c1a36' : '#081024'}
                        stroke={isSelected ? '#f59e0b' : '#0284c7'}
                        strokeWidth={isSelected ? 2.5 : 1.5}
                      />
                      <circle
                        r={4}
                        fill={isSelected ? '#f59e0b' : '#38bdf8'}
                      />
                      <text
                        y={32}
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="10"
                        fill={isSelected ? '#fbbf24' : '#f8fafc'}
                        fontWeight={isSelected ? 'bold' : 'normal'}
                      >
                        {n.name}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>
        )}

        {/* 2-Column Split: Node Constellation Grid + Detail Telemetry Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: Skill Nodes Grid */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filteredSkills.map((skill) => {
                const isSelected = activeSkill.name === skill.name
                return (
                  <button
                    key={skill.name}
                    onClick={() => handleSelectSkill(skill)}
                    className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer relative group flex flex-col justify-between min-h-[96px] ${
                      isSelected
                        ? 'bg-amber-950/20 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.15)] ring-1 ring-amber-500'
                        : 'bg-[#0a0f1d] border-slate-800/90 hover:border-cyan-500/50 hover:bg-[#0c1427]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                        <span className="truncate">{skill.category}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>}
                      </div>
                      <h3 className={`text-sm font-bold ${isSelected ? 'text-amber-400' : 'text-slate-100 group-hover:text-cyan-400'}`}>
                        {skill.name}
                      </h3>
                    </div>

                    {skill.projectConnection && (
                      <span className="text-[10px] text-cyan-400/80 truncate mt-1 flex items-center gap-1">
                        <LinkIcon className="w-2.5 h-2.5 shrink-0" />
                        <span className="truncate">{skill.projectConnection.split(' ')[0]}</span>
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            {filteredSkills.length === 0 && (
              <div className="p-8 rounded-lg bg-[#0a0f1d] border border-slate-800 text-center text-slate-500 text-xs">
                No matching technologies found for "{searchQuery}".
              </div>
            )}
          </div>

          {/* Right Column: Node Inspector Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-[#0a0f1d] border border-cyan-500/40 rounded-lg p-6 shadow-[0_0_25px_rgba(6,182,212,0.1)]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-[10px] text-cyan-400 tracking-widest uppercase">
                  NODE TELEMETRY // INSPECTOR
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-[10px]">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-slate-500 block mb-0.5">TECHNOLOGY NAME</span>
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {activeSkill.name}
                  </h3>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded bg-slate-800 text-amber-400 text-xs font-semibold">
                    {activeSkill.category}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 block mb-1">ROLE &amp; FUNCTION</span>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {activeSkill.description}
                  </p>
                </div>

                {activeSkill.tags && (
                  <div>
                    <span className="text-[10px] text-slate-500 block mb-1.5">DOMAIN TAGS</span>
                    <div className="flex flex-wrap gap-1">
                      {activeSkill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeSkill.projectConnection && (
                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-[10px] text-cyan-400 block mb-1">RELEVANT PROJECT APPLICATION:</span>
                    <p className="text-xs font-semibold text-white font-sans mb-3">
                      {activeSkill.projectConnection}
                    </p>
                    {(() => {
                      const link = getProjectRoute(activeSkill.projectConnection)
                      return (
                        <Link
                          to={link.route}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )
                    })()}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified resume skill node</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
