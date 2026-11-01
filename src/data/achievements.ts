import type { AchievementItem } from '../types'


export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'medal-of-merit',
    title: 'Medal of Merit — Branch Topper in Engineering',
    badgeLabel: 'MEDAL OF MERIT',
    category: 'Academic',
    institution: 'RNS Institute of Technology (VTU)',
    description: 'Awarded Medal of Merit for securing Branch Topper position in Computer Science and Engineering across three academic semesters.',
    metric: 'Branch Topper · 3 Semesters',
    expandedDetails: [
      'Recognized for academic excellence across consecutive semesters in the Computer Science and Engineering department.',
      'Maintained consistent high performance culminating in a cumulative CGPA of 9.6 / 10.',
      'Honored with the official institutional Medal of Merit at RNSIT.'
    ]
  },
  {
    id: 'karnataka-state-rank',
    title: '10th Rank in Karnataka State Pre-University Examination',
    badgeLabel: 'STATE RANK 10',
    category: 'Academic',
    institution: 'Karnataka State Pre-University Education Board / MGM College',
    description: 'Secured 10th rank statewide in the Karnataka Pre-University Course (PUC II) examination with a 98.16% overall score.',
    metric: '98.16% · State Rank 10',
    expandedDetails: [
      'Represented MGM College, Udupi in the 2022 Karnataka State Pre-University Board examinations.',
      'Achieved a statewide rank of 10 among hundreds of thousands of candidates statewide.',
      'Demonstrated academic rigor across Mathematics, Physics, Chemistry, and core curricula.'
    ]
  },
  {
    id: 'ieee-sasigd-2026',
    title: 'IEEE SASIGD 2026 Conference Presentation — EcoBand',
    badgeLabel: 'IEEE SASIGD 2026',
    category: 'Presentations',
    institution: 'IEEE SASIGD 2026, Hyderabad',
    description: 'Presented "EcoBand: Smart Waste Management System", a retrofit IoT band concept for real-time waste monitoring and calorific value estimation.',
    metric: 'IEEE Conference Presenter',
    expandedDetails: [
      'Selected and presented research at the IEEE SASIGD 2026 conference held in Hyderabad.',
      'Delivered presentation on smart city sustainability focusing on retrofit IoT architectural design, simulated sensor fusion modeling (ultrasonic + load-cell), and calorific waste-to-energy estimation.',
      'Defended methodology before academic reviewers and industry professionals.'
    ]
  },
  {
    id: 'nptel-machine-learning',
    title: 'NPTEL Introduction to Machine Learning — Top 1%',
    badgeLabel: 'TOP 1% ELITE',
    category: 'Technical',
    institution: 'NPTEL / IIT',
    description: 'Completed comprehensive course in Machine Learning and achieved Top 1% national candidate percentile.',
    metric: 'Top 1% Percentile',
    expandedDetails: [
      'Rigorous curriculum covering supervised learning, regression, classification, neural networks, decision trees, and model evaluation.',
      'Completed proctored certification exam achieving rank among the Top 1% nationwide candidates.'
    ]
  },
  {
    id: 'nptel-networks',
    title: 'NPTEL Demystifying Networks — Top 5%',
    badgeLabel: 'TOP 5% ELITE',
    category: 'Technical',
    institution: 'NPTEL / IIT',
    description: 'Completed Demystifying Networks certification exam with Top 5% candidate standing.',
    metric: 'Top 5% Percentile',
    expandedDetails: [
      'In-depth study of computer network protocols, socket architecture, TCP/IP, OSI layers, routing mechanisms, and network security.',
      'Earned Top 5% candidate distinction in proctored national examination.'
    ]
  }
]
