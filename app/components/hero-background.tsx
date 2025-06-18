import React from 'react';
import Image from 'next/image';

interface HeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
  imagePath?: string;
  opacity?: number;
}

export default function HeroBackground({
  children,
  className = '',
  imagePath = '/hero8.png',
  opacity = 0.3, // Default 50% opacity
}: HeroBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Full bright background image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src={imagePath}
          alt="Background"
          fill
          priority
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: opacity
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
