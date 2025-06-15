import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export type LogoSize = 'small' | 'sm-medium' | 'medium' | 'large';

const sizeClasses: Record<LogoSize, string> = {
  small: 'h-8 md:h-10',
  'sm-medium': 'h-9 md:h-12',
  medium: 'h-10 md:h-14',
  large: 'h-14 md:h-20',
};

interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: LogoSize;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = 'large',
  className = '',
  ...props
}) => {
  return (
    <Image
      src="/brand_assets/Word-Mark/Green/MP_Wordmark(Green_fill).svg"
      alt="Masterpet Logo"
      width={240}
      height={60}
      className={clsx('w-auto select-none', sizeClasses[size], className)}
      tabIndex={0}
      aria-label="Masterpet Logo"
      {...props}
    />
  );
};

export default Logo; 