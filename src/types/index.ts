export interface PortalItem {
  id: string
  number: string
  title: string
  description: string
  route: string
  status: 'AVAILABLE' | 'INITIALIZING'
  image: string
  accentColor: string
  category: string
  telemetry: string
}

export interface SkillItem {
  name: string
  category: 'Programming' | 'Backend' | 'Database' | 'Tools' | 'Core Computer Science' | 'IoT Hardware'
  description: string
  projectConnection?: string
  tags?: string[]
}

export interface ProjectItem {
  id: string
  slug: string
  title: string
  subtitle: string
  route: string
  technologies: string[]
  overview: string
  problemStatement: string
  architectureDescription: string
  workflowSteps: string[]
  implementationDetails: string[]
  learningOutcomes: string[]
  githubUrl?: string
  deploymentUrl?: string
  // For EcoBand specifically:
  implementedComponents?: string[]
  simulatedComponents?: string[]
  proposedComponents?: string[]
  conferencePresentation?: string
}

export interface AchievementItem {
  id: string
  title: string
  badgeLabel: string
  category: 'Academic' | 'Technical' | 'Presentations'
  institution: string
  description: string
  expandedDetails: string[]
  metric?: string
}

export interface JourneyMilestone {
  year: string
  period?: string
  title: string
  subtitle: string
  institution: string
  score?: string
  description: string
  tags: string[]
  details: string[]
}

export interface DiscoveryBadge {
  id: string
  title: string
  code: string
  description: string
  iconName: string
  unlocked: boolean
  unlockedAt?: string
  hint: string
}
