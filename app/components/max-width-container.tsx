import { ReactNode } from 'react';

interface MaxWidthContainerProps {
  children: ReactNode;
  className?: string;
}

export default function MaxWidthContainer({ 
  children, 
  className = ''
}: MaxWidthContainerProps) {
  return (
    <div className={`mx-auto max-w-[1440px] w-full px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
}
