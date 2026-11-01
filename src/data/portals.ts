import type { PortalItem } from '../types'


export const PORTALS: PortalItem[] = [
  {
    id: 'identity',
    number: '01',
    title: 'THE IDENTITY LAB',
    description: 'Explore my profile, education, background and personal story.',
    route: '/identity',
    status: 'AVAILABLE',
    image: '/portals/portal-01-identity.svg',
    accentColor: '#06b6d4', // Cyan
    category: 'PROFILE // DOSSIER',
    telemetry: 'BIO.DATA // 9.6 CGPA'
  },
  {
    id: 'skills',
    number: '02',
    title: 'THE SKILL MATRIX',
    description: 'Explore my technical skills through an interactive technology constellation.',
    route: '/skills',
    status: 'AVAILABLE',
    image: '/portals/portal-02-skills.svg',
    accentColor: '#38bdf8', // Sky Blue
    category: 'TECH // CONSTELLATION',
    telemetry: 'SYS.ARCH // 6 DOMAINS'
  },
  {
    id: 'projects',
    number: '03',
    title: 'THE PROJECT LABS',
    description: 'Enter my engineering projects and explore their architecture and implementation.',
    route: '/projects',
    status: 'AVAILABLE',
    image: '/portals/portal-03-projects.svg',
    accentColor: '#f59e0b', // Amber
    category: 'SYSTEMS // LABS',
    telemetry: 'ENG.CORE // 4 PROTOCOLS'
  },
  {
    id: 'achievements',
    number: '04',
    title: 'THE ACHIEVEMENT VAULT',
    description: 'Discover academic milestones, NPTEL achievements, awards and presentations.',
    route: '/achievements',
    status: 'AVAILABLE',
    image: '/portals/portal-04-achievements.svg',
    accentColor: '#fbbf24', // Gold Amber
    category: 'HONORS // VERIFIED',
    telemetry: 'MERIT.REC // STATE RANK 10'
  },
  {
    id: 'journey',
    number: '05',
    title: 'THE JOURNEY ARCHIVE',
    description: 'Explore my education, Samsung Innovation Campus experience and leadership activities.',
    route: '/journey',
    status: 'AVAILABLE',
    image: '/portals/portal-05-journey.svg',
    accentColor: '#06b6d4', // Cyan
    category: 'CHRONOLOGY // LOGS',
    telemetry: 'TIMELINE // 2020 - 2027+'
  },
  {
    id: 'connect',
    number: '06',
    title: 'THE CONNECTION PORTAL',
    description: 'Connect with me through GitHub, LinkedIn and email.',
    route: '/connect',
    status: 'AVAILABLE',
    image: '/portals/portal-06-connect.svg',
    accentColor: '#f97316', // Orange
    category: 'NETWORK // DISPATCH',
    telemetry: 'COMMS.HUB // OPEN CHANNEL'
  }
]
