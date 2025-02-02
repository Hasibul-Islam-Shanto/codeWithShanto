import { cn } from '@/lib/utils';

import Logo from './logo';

const Footer = ({ className }: { className?: string }) => {
  return (
    <>
      <footer className={cn(className)}>
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Logo />
            <p className="text-center text-sm leading-loose md:text-left">
              © 2025 codeWithShanto&apos;s • Terms • Privacy • Your Privacy
              Choices
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
