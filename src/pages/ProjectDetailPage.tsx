import React, { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { BackToHub } from '../components/navigation/BackToHub'
import { PROJECTS_DATA } from '../data/projects'
import { useExploration } from '../context/useExploration'
import { ArrowLeft, CheckCircle2, AlertCircle, Cpu, Layers, Workflow, Terminal as TerminalIcon, ShieldAlert, Play, Activity } from 'lucide-react'


export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const { markProjectVisited } = useExploration()

  // Interactive state for E-Commerce simulation
  const [ecomSimulationStep, setEcomSimulationStep] = useState<number>(0)
  const [isEcomSimulating, setIsEcomSimulating] = useState(false)

  // Interactive state for CSV Platform simulation
  const [csvActiveStage, setCsvActiveStage] = useState<number>(1)

  // Interactive state for Facial Analysis simulator
  const [faceState, setFaceState] = useState<'alert' | 'blink' | 'drowsy' | 'yawn'>('alert')

  // Interactive state for EcoBand simulator
  const [binFill, setBinFill] = useState<number>(68)

  const project = PROJECTS_DATA.find((p) => p.slug === slug)

  useEffect(() => {
    if (project) {
      markProjectVisited(project.slug)
    }
  }, [project, markProjectVisited])

  const runEcomSimulation = () => {
    setIsEcomSimulating(true)
    setEcomSimulationStep(1)

    setTimeout(() => setEcomSimulationStep(2), 700)
    setTimeout(() => setEcomSimulationStep(3), 1400)
    setTimeout(() => setEcomSimulationStep(4), 2100)
    setTimeout(() => {
      setEcomSimulationStep(5)
      setIsEcomSimulating(false)
    }, 2800)
  }

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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 mb-6 gap-3">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                <Cpu className="w-4 h-4" />
                <span>INTERACTIVE MICROSERVICES ARCHITECTURE TOPOLOGY</span>
              </div>
              
              <button
                onClick={runEcomSimulation}
                disabled={isEcomSimulating}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-colors cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isEcomSimulating ? 'ROUTING TRANSACTION...' : 'SIMULATE ORDER TRANSACTION'}</span>
              </button>
            </div>

            <div className="p-4 rounded bg-[#070b16] border border-slate-800 space-y-6">
              {/* Client & Ingress */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <div className={`px-4 py-2.5 rounded border text-xs transition-all ${
                  ecomSimulationStep === 1
                    ? 'bg-cyan-500/30 border-cyan-400 text-white shadow-[0_0_15px_#22d3ee]'
                    : 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300'
                }`}>
                  <div className="font-bold">React Frontend</div>
                  <div className="text-[10px] text-slate-400">Deployed on Vercel</div>
                </div>
                <div className={`font-bold transition-colors ${ecomSimulationStep >= 1 ? 'text-amber-400' : 'text-slate-600'}`}>
                  ↓ HTTPS POST /api/orders ↓
                </div>
                <div className={`px-5 py-3 rounded border text-xs transition-all ${
                  ecomSimulationStep === 2
                    ? 'bg-amber-500/30 border-amber-400 text-white shadow-[0_0_15px_#f59e0b]'
                    : 'bg-amber-950/50 border-amber-500/50 text-amber-300'
                }`}>
                  <div className="font-bold">Spring Cloud API Gateway</div>
                  <div className="text-[10px] text-slate-400">Port 8080 · Auth &amp; URI Dispatch</div>
                </div>
              </div>

              {/* Eureka Service Registry */}
              <div className={`w-full py-2 px-4 rounded border text-center text-xs transition-all flex items-center justify-center gap-3 ${
                ecomSimulationStep === 3
                  ? 'bg-emerald-950/60 border-emerald-400 text-emerald-300 shadow-[0_0_15px_#10b981]'
                  : 'bg-slate-900 border-slate-700/80 text-slate-300'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-bold text-emerald-400">Netflix Eureka Discovery Server:</span>
                <span>Resolves dynamic service instances across container cluster</span>
              </div>

              {/* 3 Autonomous Microservice Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className={`p-3.5 rounded border text-center transition-all ${
                  ecomSimulationStep === 4
                    ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-[0_0_15px_#22d3ee]'
                    : 'bg-[#0c1426] border-cyan-500/30'
                }`}>
                  <div className="text-xs font-bold text-white mb-1">Product Service</div>
                  <div className="text-[10px] text-slate-400 mb-2">Port: 8081 · Stock Check</div>
                  <div className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] text-cyan-400">
                    Isolated MySQL DB 1
                  </div>
                </div>

                <div className={`p-3.5 rounded border text-center transition-all ${
                  ecomSimulationStep === 4
                    ? 'bg-amber-950/60 border-amber-400 text-white shadow-[0_0_15px_#f59e0b]'
                    : 'bg-[#0c1426] border-cyan-500/30'
                }`}>
                  <div className="text-xs font-bold text-white mb-1">Order Service</div>
                  <div className="text-[10px] text-slate-400 mb-2">Port: 8082 · Invoice Gen</div>
                  <div className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] text-amber-400">
                    Isolated MySQL DB 2
                  </div>
                </div>

                <div className="p-3.5 rounded bg-[#0c1426] border border-cyan-500/30 text-center">
                  <div className="text-xs font-bold text-white mb-1">User Service</div>
                  <div className="text-[10px] text-slate-400 mb-2">Port: 8083 · Session Verify</div>
                  <div className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] text-cyan-400">
                    Isolated MySQL DB 3
                  </div>
                </div>
              </div>

              {/* Live Telemetry Output */}
              {ecomSimulationStep === 5 && (
                <div className="p-3 rounded bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 text-xs flex items-center justify-between">
                  <span className="font-bold">STATUS 200 OK — Order #VTU-8921 processed in 28ms</span>
                  <span>Payload: JSON {JSON.stringify({ status: 'CONFIRMED', latency: '28ms' })}</span>
                </div>
              )}
            </div>
          </section>
        )}

        {project.slug === 'csv-platform' && (
          <section className="bg-[#0a0f1d] border border-amber-500/40 rounded-lg p-6 sm:p-8 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 mb-6 gap-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <Workflow className="w-4 h-4" />
                <span>INTERACTIVE 5-STAGE CSV DATA QUALITY PIPELINE</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono-code">CLICK ANY STAGE TO INSPECT TRANSFORM</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center mb-6">
              {[
                { stage: 1, name: 'CSV INPUT', desc: 'Raw multipart ingestion', color: 'border-amber-500' },
                { stage: 2, name: 'ANALYSIS', desc: 'Schema & type detection', color: 'border-cyan-500' },
                { stage: 3, name: 'VALIDATION', desc: 'Null & duplicate scan', color: 'border-amber-500' },
                { stage: 4, name: 'CLEANING', desc: 'Median/mode imputation', color: 'border-cyan-500' },
                { stage: 5, name: 'OUTPUT', desc: 'Clean CSV & audit log', color: 'border-emerald-500' }
              ].map((s) => (
                <button
                  key={s.stage}
                  onClick={() => setCsvActiveStage(s.stage)}
                  className={`p-3 rounded border text-left sm:text-center transition-all cursor-pointer ${
                    csvActiveStage === s.stage
                      ? 'bg-amber-950/40 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      : 'bg-[#070b16] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] text-amber-400 font-bold block mb-1">STAGE {s.stage}</span>
                  <div className="text-xs font-bold text-white mb-1">{s.name}</div>
                  <p className="text-[10px] text-slate-400 font-sans">{s.desc}</p>
                </button>
              ))}
            </div>

            {/* Stage Detail Simulation Box */}
            <div className="p-4 rounded bg-[#070b16] border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-cyan-400">
                ACTIVE STAGE {csvActiveStage} DATA SAMPLE TELEMETRY:
              </span>
              {csvActiveStage === 1 && (
                <p className="text-xs text-slate-300 font-sans">
                  Uploaded file: <code className="text-amber-300">patient_records_raw.csv</code> (12,450 rows, 14 columns). Streaming chunks into memory buffer.
                </p>
              )}
              {csvActiveStage === 2 && (
                <p className="text-xs text-slate-300 font-sans">
                  Schema analyzed: 8 numerical float columns, 4 categorical string columns, 2 datetime fields. Identifies mismatched datatypes.
                </p>
              )}
              {csvActiveStage === 3 && (
                <p className="text-xs text-slate-300 font-sans">
                  Validation detected: 48 missing values in <code className="text-amber-300">age</code>, 12 missing in <code className="text-amber-300">city</code>, and 18 duplicate ID records flagged.
                </p>
              )}
              {csvActiveStage === 4 && (
                <p className="text-xs text-slate-300 font-sans">
                  Cleaning routines: Imputed missing ages with numerical median (34.0); imputed missing cities with categorical mode ("Bangalore"); pruned 18 duplicates.
                </p>
              )}
              {csvActiveStage === 5 && (
                <p className="text-xs text-emerald-400 font-sans">
                  Output ready: Streamed clean CSV <code className="text-white">patient_records_cleaned.csv</code> with 100% data completeness and generated JSON audit certification report.
                </p>
              )}
            </div>
          </section>
        )}

        {project.slug === 'facial-analysis' && (
          <section className="bg-[#0a0f1d] border border-cyan-500/40 rounded-lg p-6 sm:p-8 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 mb-6 gap-3">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                <Cpu className="w-4 h-4" />
                <span>INTERACTIVE COMPUTER VISION GEOMETRY SIMULATOR</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono-code">SELECT SIMULATED DRIVER BEHAVIOR</span>
            </div>

            {/* State Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {[
                { id: 'alert', label: 'NORMAL ALERT' },
                { id: 'blink', label: 'BRIEF BLINK' },
                { id: 'drowsy', label: 'SUSTAINED CLOSURE' },
                { id: 'yawn', label: 'PROLONGED YAWN' }
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setFaceState(b.id as any)}
                  className={`p-2.5 rounded border text-xs font-bold transition-all cursor-pointer ${
                    faceState === b.id
                      ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                      : 'bg-[#070b16] border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>

            {/* Real-Time Mathematical Telemetry readout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded bg-[#070b16] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-400 font-bold">EYE ASPECT RATIO (EAR)</span>
                  <span className="text-white font-bold">
                    {faceState === 'alert' && '0.34 [NORMAL]'}
                    {faceState === 'blink' && '0.19 [NORMAL BLINK]'}
                    {faceState === 'drowsy' && '0.14 [BELOW THRESHOLD]'}
                    {faceState === 'yawn' && '0.28 [NOMINAL]'}
                  </span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${faceState === 'drowsy' ? 'bg-red-500' : 'bg-cyan-400'}`}
                    style={{
                      width: faceState === 'drowsy' ? '30%' : faceState === 'blink' ? '45%' : '80%'
                    }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Threshold: 0.22. Eye closure below threshold for &gt; 15 consecutive frames activates temporal drowsiness trigger.
                </p>
              </div>

              <div className="p-4 rounded bg-[#070b16] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-bold">MOUTH ASPECT RATIO (MAR)</span>
                  <span className="text-white font-bold">
                    {faceState === 'alert' && '0.14 [CLOSED/TALKING]'}
                    {faceState === 'blink' && '0.15 [NOMINAL]'}
                    {faceState === 'drowsy' && '0.16 [NOMINAL]'}
                    {faceState === 'yawn' && '0.64 [YAWN THRESHOLD EXCEEDED]'}
                  </span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${faceState === 'yawn' ? 'bg-amber-400' : 'bg-cyan-400'}`}
                    style={{
                      width: faceState === 'yawn' ? '90%' : '25%'
                    }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Threshold: 0.50. Sustained vertical opening distinguishes involuntary yawns from speech phonemes.
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 mb-6 gap-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <Activity className="w-4 h-4" />
                <span>ECOBAND INTERACTIVE SENSOR TELEMETRY SIMULATOR</span>
              </div>
              <span className="text-xs text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30">
                IEEE SASIGD 2026
              </span>
            </div>

            {/* Interactive Bin Fill Slider */}
            <div className="p-4 rounded bg-[#070b16] border border-slate-800 mb-6 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-bold">ADJUST MUNICIPAL RECEPTACLE FILL LEVEL:</span>
                <span className="text-amber-400 font-bold text-sm">{binFill}% FULL</span>
              </div>
              <input
                type="range"
                min="5"
                max="98"
                value={binFill}
                onChange={(e) => setBinFill(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <div>
                  <span className="text-slate-500 block">ULTRASONIC DISTANCE</span>
                  <span className="text-cyan-300 font-bold">{Math.round(100 - binFill * 0.8)} cm</span>
                </div>
                <div>
                  <span className="text-slate-500 block">LOAD CELL MASS</span>
                  <span className="text-amber-300 font-bold">{(binFill * 0.28).toFixed(1)} kg</span>
                </div>
                <div>
                  <span className="text-slate-500 block">EST. CALORIFIC VALUE</span>
                  <span className="text-emerald-400 font-bold">{(binFill * 0.14).toFixed(1)} MJ/kg</span>
                </div>
              </div>
            </div>

            {/* Clear Status Taxonomy Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Implemented */}
              <div className="p-4 rounded bg-emerald-950/20 border border-emerald-500/40 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>IMPLEMENTED (SOFTWARE &amp; FIRMWARE)</span>
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
              <strong>Honest Engineering Verification:</strong> Implemented features comprise ESP32 firmware routines, distance calculations, and conversion logic. Bin status updates, sensor values, and dashboard telemetry are simulated because physical hardware was unavailable. Edge image classification and physical fleet deployment are proposed conceptual extensions.
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
