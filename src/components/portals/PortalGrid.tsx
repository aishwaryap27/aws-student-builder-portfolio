import React from 'react'
import { PortalCard } from './PortalCard'
import { PORTALS } from '../../data/portals'

export const PortalGrid: React.FC = () => {
  return (
    <div className="w-full">
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        role="region"
        aria-label="Six Command Portals"
      >
        {PORTALS.map((portal, index) => (
          <PortalCard
            key={portal.id}
            portal={portal}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
