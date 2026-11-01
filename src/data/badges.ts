import type { DiscoveryBadge } from '../types'


export const DISCOVERY_BADGES: DiscoveryBadge[] = [
  {
    id: 'universe_explorer',
    title: 'UNIVERSE EXPLORER',
    code: 'BADGE // 01',
    description: 'Unlocked by discovering all six primary portals in the digital universe.',
    iconName: 'Compass',
    unlocked: false,
    hint: 'Enter all 6 command portals on the dashboard.'
  },
  {
    id: 'project_investigator',
    title: 'PROJECT INVESTIGATOR',
    code: 'BADGE // 02',
    description: 'Unlocked by inspecting all four engineering laboratory project briefs.',
    iconName: 'Layers',
    unlocked: false,
    hint: 'Deep-dive into all 4 project detail environments.'
  },
  {
    id: 'tech_explorer',
    title: 'TECH EXPLORER',
    code: 'BADGE // 03',
    description: 'Unlocked by querying technologies inside the interactive Skill Matrix.',
    iconName: 'Cpu',
    unlocked: false,
    hint: 'Select and explore technology nodes in Portal 02.'
  },
  {
    id: 'milestone_hunter',
    title: 'MILESTONE HUNTER',
    code: 'BADGE // 04',
    description: 'Unlocked by examining verified academic and research milestones in the Vault.',
    iconName: 'Award',
    unlocked: false,
    hint: 'Expand and review achievement records in Portal 04.'
  },
  {
    id: 'secret_developer',
    title: 'SECRET DEVELOPER',
    code: 'BADGE // 05',
    description: 'Unlocked by accessing the hidden terminal easter egg and uncovering the personal developer log.',
    iconName: 'Terminal',
    unlocked: false,
    hint: 'Open the CLI terminal (Ctrl + K) and execute the secret command.'
  }
]
