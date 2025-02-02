import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

const SectionTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h2 className={cn('text-xl font-bold md:text-2xl lg:text-3xl', className)}>
      {children}
    </h2>
  );
};

export default SectionTitle;
