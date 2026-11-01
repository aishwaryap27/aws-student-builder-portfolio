import React, { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { BackToHub } from '../components/navigation/BackToHub'
import { PROJECTS_DATA } from '../data/projects'
import { useExploration } from '../context/ExplorationContext'
import { ArrowLeft, CheckCircle2, AlertCircle, Cpu, Layers, Workflow, Terminal as TerminalIcon, ShieldAlert } from 'lucide-react'


export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const { markProjectVisited } = useExploration()

  const project = PROJECTS_DATA.find((p) => p.slug === slug)

  useEffect(() => {
    if (project) {
      markProjectVisited(project.slug)
    }
  }, [project, markProjectVisited])

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="w-full min-h-screen bg-[#060913] text-[#f8fafc]">
      <BackToHub currentPortalName={`PROJECT LAB // ${project.title.toUpperCase()}`} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-mono-code">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link to="/projects" className="text-cyan-400 hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ALL PROJECT LABS</span>
          </Link>
          <span>/</span>
          <span className="text-slate-300 truncate">{project.title}</span>
        </div>

        {/* Project Header Banner */}
        <div className="mb-10 bg-[#0a0f1d] border border-slate-800 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-[11px] text-cyan-400 font-bold tracking-widest uppercase mb-1 block">
                ENGINEERING SPECIFICATION // {project.slug.toUpperCase()}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h1>
              <p className="text-sm text-slate-300 font-sans mt-2">
                {project.subtitle}
              </p>
            </div>

            {project.conferencePresentation && (
              <div className="p-3 rounded bg-amber-950/30 border border-amber-500/40 text-amber-300 text-xs self-start md:self-auto max-w-xs">
                <strong>Conference:</strong> {project.conferencePresentation}
              </div>
            )}
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-6">
            <span className="text-[11px] text-slate-400 block mb-2 font-semibold">
              TECHNOLOGIES DEPLOYED:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#070b16] border border-cyan-500/30 text-cyan-300 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Overview & Problem Statement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Overview */}
          <div className="bg-[#0a0f1d] border border-slate-800 rounded-lg p-6">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-3">
              <Layers className="w-4 h-4" />
              <span>PROJECT OVERVIEW</span>
            </div>
            <p className="text-sm text-slate-200 font-sans leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem Statement */}
          <div className="bg-[#0a0f1d] border border-slate-800 rounded-lg p-6">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-3">
              <AlertCircle className="w-4 h-4" />
              <span>PROBLEM STATEMENT</span>
            </div>
            <p className="text-sm text-slate-200 font-sans leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        </div>

        {/* Bespoke Interactive Visualizations per Project */}
        {project.slug === 'ecommerce' && (
          <section className="bg-[#0a0f1d] border border-cyan-500/40 rounded-lg p-6 sm:p-8 mb-10">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                <Cpu className="w-4 h-4" />
                <span>INTERACTIVE MICROSERVICES ARCHITECTURE TOPOLOGY</span>
              </div>
              <span className="text-[11px] text-slate-500">SPRING BOOT + EUREKA</span>
            </div>

            <div className="p-4 rounded bg-[#070b16] border border-slate-800 space-y-6">
              {/* Client & Ingress */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <div className="px-4 py-2.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs">
                  <div className="font-bold">React Frontend</div>
                  <div className="text-[10px] text-slate-400">Deployed on Vercel</div>
                </div>
                <div className="text-slate-500 font-bold">↓ REST HTTPS ↓</div>
                <div className="px-5 py-3 rounded bg-amber-950/50 border border-amber-500/50 text-amber-300 text-xs">
                  <div className="font-bold">Spring Cloud API Gateway</div>
                  <div className="text-[10px] text-slate-400">Dynamic Routing &amp; Perimeter Security</div>
                </div>
              </div>

              {/* Eureka Service Registry */}
              <div className="w-full py-2 px-4 rounded bg-slate-900 border border-slate-700/80 text-center text-xs text-slate-300 flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="font-bold text-emerald-400">Netflix Eureka Discovery Server:</span>
                <span>Heartbeat health registration &amp; load balancing</span>
              </div>

              {/* 3 Autonomous Microservice Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded bg-[#0c1426] border border-cyan-500/30 text-center">
                  <div className="text-xs font-bold text-white mb-1">Product Microservice</div>
                  <div className="text-[10px] text-slate-400 mb-2">Port: 8081 · Spring Boot</div>
                  <div className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] text-cyan-400">
                    Isolated MySQL DB 1
                  </div>
                </div>

                <div className="p-3.5 rounded bg-[#0c1426] border border-cyan-500/30 text-center">
                  <div className="text-xs font-bold text-white mb-1">Order Microservice</div>
                  <div className="text-[10px] text-slate-400 mb-2">Port: 8082 · Spring Boot</div>
                  <div className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] text-cyan-400">
                    Isolated MySQL DB 2
                  </div>
                </div>

                <div className="p-3.5 rounded bg-[#0c1426] border border-cyan-500/30 text-center">
                  <div className="text-xs font-bold text-white mb-1">User Microservice</div>
                  <div className="text-[10px] text-slate-400 mb-2">Port: 8083 · Spring Boot</div>
                  <div className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] text-cyan-400">
                    Isolated MySQL DB 3
                  </div>
                </div>
              </div>

              <div className="text-center text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                Backend Services Containerized &amp; Hosted on Railway Cloud
              </div>
            </div>
          </section>
        )}

        {project.slug === 'csv-platform' && (
          <section className="bg-[#0a0f1d] border border-amber-500/40 rounded-lg p-6 sm:p-8 mb-10">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <Workflow className="w-4 h-4" />
                <span>INTERACTIVE 5-STAGE CSV DATA QUALITY PIPELINE</span>
              </div>
              <span className="text-[11px] text-slate-500">FASTAPI + DOCKER</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
              <div className="p-3 rounded bg-[#070b16] border border-slate-800">
                <span className="text-[10px] text-amber-400 font-bold block mb-1">STAGE 1</span>
                <div className="text-xs font-bold text-white mb-1">CSV INPUT</div>
                <p className="text-[10px] text-slate-400 font-sans">Multipart upload ingestion</p>
              </div>

              <div className="p-3 rounded bg-[#070b16] border border-slate-800">
                <span className="text-[10px] text-cyan-400 font-bold block mb-1">STAGE 2</span>
                <div className="text-xs font-bold text-white mb-1">ANALYSIS</div>
                <p className="text-[10px] text-slate-400 font-sans">Schema &amp; type profiling</p>
              </div>

              <div className="p-3 rounded bg-[#070b16] border border-slate-800">
                <span className="text-[10px] text-amber-400 font-bold block mb-1">STAGE 3</span>
                <div className="text-xs font-bold text-white mb-1">VALIDATION</div>
                <p className="text-[10px] text-slate-400 font-sans">Missing values &amp; duplicate check</p>
              </div>

              <div className="p-3 rounded bg-[#070b16] border border-slate-800">
                <span className="text-[10px] text-cyan-400 font-bold block mb-1">STAGE 4</span>
                <div className="text-xs font-bold text-white mb-1">CLEANING</div>
                <p className="text-[10px] text-slate-400 font-sans">Median/mode imputation &amp; prune</p>
              </div>

              <div className="p-3 rounded bg-emerald-950/40 border border-emerald-500/40">
                <span className="text-[10px] text-emerald-400 font-bold block mb-1">STAGE 5</span>
                <div className="text-xs font-bold text-emerald-300 mb-1">OUTPUT</div>
                <p className="text-[10px] text-slate-400 font-sans">Sanitized CSV + Audit log</p>
              </div>
            </div>
          </section>
        )}

        {project.slug === 'facial-analysis' && (
          <section className="bg-[#0a0f1d] border border-cyan-500/40 rounded-lg p-6 sm:p-8 mb-10">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                <Cpu className="w-4 h-4" />
                <span>COMPUTER VISION GEOMETRIC TELEMETRY (EAR &amp; MAR)</span>
              </div>
              <span className="text-[11px] text-slate-500">MEDIAPIPE + OPENCV</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded bg-[#070b16] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-400 font-bold">EYE ASPECT RATIO (EAR)</span>
                  <span className="text-slate-400">Formula: (||p2-p6|| + ||p3-p5||) / (2||p1-p4||)</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">
                  Monitors eye closure intervals. When EAR drops below threshold for a continuous temporal window, it signals sustained blink or drowsiness rather than a standard rapid blink.
                </p>
              </div>

              <div className="p-4 rounded bg-[#070b16] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-bold">MOUTH ASPECT RATIO (MAR)</span>
                  <span className="text-slate-400">Formula: ||upper_lip - lower_lip|| / ||corner_dist||</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">
                  Measures mouth vertical opening duration. Distinguishes natural conversational movements from prolonged yawning indicators.
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 rounded bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Scope notice: This system is an algorithmic computer vision exploration and does not claim medical or clinical validation.</span>
            </div>
          </section>
        )}

        {project.slug === 'ecoband' && (
          <section className="bg-[#0a0f1d] border border-amber-500/40 rounded-lg p-6 sm:p-8 mb-10">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <Cpu className="w-4 h-4" />
                <span>ECOBAND ARCHITECTURAL TAXONOMY &amp; STATUS</span>
              </div>
              <span className="text-[11px] text-amber-400 font-bold">IEEE SASIGD 2026</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Implemented */}
              <div className="p-4 rounded bg-emerald-950/20 border border-emerald-500/40 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>IMPLEMENTED IN HARDWARE</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 font-sans">
                  {project.implementedComponents?.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span className="text-emerald-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Simulated */}
              <div className="p-4 rounded bg-cyan-950/20 border border-cyan-500/40 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                  <Workflow className="w-4 h-4" />
                  <span>SIMULATED COMPONENTS</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 font-sans">
                  {project.simulatedComponents?.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span className="text-cyan-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proposed */}
              <div className="p-4 rounded bg-amber-950/20 border border-amber-500/40 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                  <Layers className="w-4 h-4" />
                  <span>PROPOSED EXTENSIONS</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 font-sans">
                  {project.proposedComponents?.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span className="text-amber-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              <strong>Honest Engineering Verification:</strong> Only bench-tested microcontroller sensor telemetry is claimed as implemented; image classification and fleetwide dispatch are presented as simulated/proposed conceptual extensions.
            </div>
          </section>
        )}

        {/* Implementation Details & Workflow */}
        <section className="bg-[#0a0f1d] border border-slate-800 rounded-lg p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold pb-4 border-b border-slate-800 mb-6">
            <Workflow className="w-4 h-4" />
            <span>OPERATIONAL WORKFLOW &amp; EXECUTION PHASES</span>
          </div>

          <div className="space-y-3">
            {project.workflowSteps.map((step, idx) => (
              <div
                key={step}
                className="p-3.5 rounded bg-[#070b16] border border-slate-800/80 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm text-slate-200 font-sans mt-0.5">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Implementation Breakdown */}
        <section className="bg-[#0a0f1d] border border-slate-800 rounded-lg p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold pb-4 border-b border-slate-800 mb-6">
            <TerminalIcon className="w-4 h-4" />
            <span>TECHNICAL IMPLEMENTATION HIGHLIGHTS</span>
          </div>

          <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-300">
            {project.implementationDetails.map((detail) => (
              <li key={detail} className="flex items-start gap-2.5">
                <span className="text-amber-400 mt-1">▹</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Learning Outcomes */}
        <section className="bg-[#0a0f1d] border border-slate-800 rounded-lg p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold pb-4 border-b border-slate-800 mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span>ENGINEERING LEARNING OUTCOMES</span>
          </div>

          <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-300">
            {project.learningOutcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs">
          <Link
            to="/projects"
            className="text-cyan-400 hover:text-white flex items-center gap-1.5 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>
          <Link
            to="/"
            className="text-slate-400 hover:text-amber-400 font-bold"
          >
            RETURN TO COMMAND HUB →
          </Link>
        </div>
      </main>
    </div>
  )
}
