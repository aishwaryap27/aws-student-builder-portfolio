import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BackToHub } from '../components/navigation/BackToHub'
import { PROJECTS_DATA } from '../data/projects'
import { useExploration } from '../context/ExplorationContext'
import { ProblemSolverScanner } from '../components/features/ProblemSolverScanner'
import { ArrowRight, Cpu, Server, FileSpreadsheet, Eye, CheckCircle2 } from 'lucide-react'

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  ecommerce: <Server className="w-5 h-5 text-cyan-400" />,
  'csv-platform': <FileSpreadsheet className="w-5 h-5 text-amber-400" />,
  'facial-analysis': <Eye className="w-5 h-5 text-cyan-400" />,
  ecoband: <Cpu className="w-5 h-5 text-amber-400" />
}

export const ProjectsPage: React.FC = () => {
  const { markPortalVisited, visitedProjects } = useExploration()

  useEffect(() => {
    markPortalVisited('projects')
  }, [markPortalVisited])

  return (
    <div className="w-full min-h-screen bg-[#060913] text-[#f8fafc]">
      <BackToHub currentPortalName="PORTAL 03 // THE PROJECT LABS" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-mono-code">
        
        {/* Module Header */}
        <div className="mb-8 border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>PORTAL 03 // ENGINEERING HANGAR</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              THE PROJECT LABS
            </h1>
            <p className="text-sm text-slate-400 font-sans mt-1">
              Deep-dive into architectural schematics, workflows, and implementation details across 4 engineering systems.
            </p>
          </div>

          <div className="text-xs text-amber-400 font-mono-code bg-amber-950/30 border border-amber-500/30 px-3 py-1.5 rounded self-start md:self-auto">
            {visitedProjects.length} / 4 CHAMBERS INSPECTED
          </div>
        </div>

        {/* 4 Project Hangar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PROJECTS_DATA.map((project, idx) => {
            const isVisited = visitedProjects.includes(project.slug)
            return (
              <Link
                key={project.id}
                to={project.route}
                className="group p-6 rounded-lg bg-[#0a0f1d] border border-slate-800/90 hover:border-amber-500/60 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-300 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                        {PROJECT_ICONS[project.slug] || <Server className="w-5 h-5" />}
                      </div>
                      <span className="text-xs text-slate-500">
                        CHAMBER 0{idx + 1}
                      </span>
                    </div>

                    {isVisited ? (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" />
                        INSPECTED
                      </span>
                    ) : (
                      <span className="text-[11px] text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded">
                        AVAILABLE
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    {project.subtitle}
                  </p>

                  {/* Overview */}
                  <p className="text-xs text-slate-300 mt-3 font-sans line-clamp-3 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-900/60 text-slate-500 text-[10px]">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-400 transition-colors">
                  <span className="font-semibold tracking-wider">ENTER CHAMBER</span>
                  <div className="flex items-center gap-1 text-cyan-400 group-hover:text-amber-400">
                    <span>EXPLORE ARCHITECTURE</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Embedded Problem Solver Section */}
        <section className="mt-8">
          <ProblemSolverScanner />
        </section>
      </main>
    </div>
  )
}
