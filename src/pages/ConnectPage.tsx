import React, { useEffect, useState } from 'react'
import { BackToHub } from '../components/navigation/BackToHub'
import { PROFILE_DATA } from '../data/profile'
import { useExploration } from '../context/ExplorationContext'
import { Mail, Copy, Check, ExternalLink, Send, MessageSquare } from 'lucide-react'


export const ConnectPage: React.FC = () => {
  const { markPortalVisited } = useExploration()
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    markPortalVisited('connect')
  }, [markPortalVisited])

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open default email client with formatted message
    const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
    window.location.href = mailtoUrl
    setSubmitted(true)
  }

  return (
    <div className="w-full min-h-screen bg-[#060913] text-[#f8fafc]">
      <BackToHub currentPortalName="PORTAL 06 // THE CONNECTION PORTAL" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-mono-code">
        
        {/* Module Header */}
        <div className="mb-10 border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
              <span>PORTAL 06 // COMMUNICATION TELEMETRY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              THE CONNECTION PORTAL
            </h1>
            <p className="text-sm text-slate-400 font-sans mt-1">
              Direct channels for engineering collaboration, project inquiries, and academic networking.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 px-3 py-1.5 rounded self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>CHANNELS OPEN // RESPONSE TIME &lt; 24H</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Direct Coordinate Cards */}
          <div className="lg:col-span-1 space-y-4">
            
            {/* Primary Email Card */}
            <div className="bg-[#0a0f1d] border border-cyan-500/30 rounded-lg p-6 space-y-4 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-cyan-500/15 border border-cyan-500/40 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block">OFFICIAL EMAIL</span>
                  <h3 className="text-sm font-bold text-white">Direct Inbox</h3>
                </div>
              </div>

              <div className="p-3 rounded bg-[#070b16] border border-slate-800 text-xs text-cyan-300 break-all select-all font-mono-code">
                {PROFILE_DATA.email}
              </div>

              <div className="flex gap-2">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="flex-1 py-2 px-3 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="py-2 px-3 rounded bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="group block bg-[#0a0f1d] border border-slate-800 hover:border-amber-500/50 rounded-lg p-5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">SOURCE CODE // REPOS</span>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      github.com/aishwaryap27
                    </h3>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group block bg-[#0a0f1d] border border-slate-800 hover:border-cyan-500/50 rounded-lg p-5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">PROFESSIONAL NETWORK</span>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/aishwarya-pramod
                    </h3>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
            </a>

            {/* Privacy notice */}
            <div className="p-3 rounded bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-500 font-sans">
              Privacy Standard: In accordance with public communication protocols, phone numbers are kept private.
            </div>
          </div>

          {/* Right Column: Dispatch Message Console */}
          <div className="lg:col-span-2">
            <div className="bg-[#0a0f1d] border border-slate-800 rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold pb-4 border-b border-slate-800 mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>COMMUNICATION DISPATCH CONSOLE</span>
              </div>

              {submitted ? (
                <div className="p-6 rounded bg-emerald-950/20 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    MESSAGE PREPARED IN DISPATCH BUFFER
                  </h3>
                  <p className="text-xs text-slate-300 font-sans max-w-md mx-auto">
                    Your email client has been launched with your drafted message to {PROFILE_DATA.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="mt-3 px-4 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white"
                  >
                    Draft Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">
                        YOUR NAME / ORGANIZATION:
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. AWS Evaluator / Engineer"
                        className="w-full p-2.5 rounded bg-[#070b16] border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">
                        RETURN EMAIL ADDRESS:
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. colleague@organization.com"
                        className="w-full p-2.5 rounded bg-[#070b16] border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">
                      SUBJECT:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AWS Student Builder Challenge / Collaboration"
                      className="w-full p-2.5 rounded bg-[#070b16] border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">
                      TRANSMISSION MESSAGE:
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter inquiry, discussion topic, or project feedback..."
                      className="w-full p-2.5 rounded bg-[#070b16] border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <Send className="w-4 h-4" />
                    <span>DISPATCH MESSAGE VIA EMAIL CLIENT</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
