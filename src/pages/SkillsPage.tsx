import React, { useEffect, useState } from 'react'
import { BackToHub } from '../components/navigation/BackToHub'
import { SKILL_CATEGORIES, SKILLS_DATA } from '../data/skills'
import type { SkillItem } from '../types'
import { useExploration } from '../context/ExplorationContext'
import { ArrowRight, Sparkles, Filter, Link as LinkIcon, CheckCircle2 } from 'lucide-react'

import { Link } from 'react-router-dom'

export const SkillsPage: React.FC = () => {
  const { markPortalVisited, markSkillsInteracted } = useExploration()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILLS_DATA[0]!)

  useEffect(() => {
    markPortalVisited('skills')
  }, [markPortalVisited])

  const handleSelectSkill = (skill: SkillItem) => {
    setActiveSkill(skill)
    markSkillsInteracted()
  }

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory)

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
              Explore interconnected technology nodes, runtime environments, and project mappings.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-950/30 border border-amber-500/30 px-3 py-1.5 rounded self-start md:self-auto">
            <Sparkles className="w-4 h-4" />
            <span>INTERACTIVE NODE INSPECTOR</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 text-xs scrollbar-none">
          <div className="flex items-center gap-1.5 text-slate-500 pr-2 border-r border-slate-800 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>CATEGORY:</span>
          </div>
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 rounded transition-colors shrink-0 cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            All Domains ({SKILLS_DATA.length})
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
                    className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer relative group flex flex-col justify-between min-h-[92px] ${
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
          </div>

          {/* Right Column: Node Inspector Inspector Panel */}
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
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline"
                    >
                      <span>Inspect in Project Labs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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
