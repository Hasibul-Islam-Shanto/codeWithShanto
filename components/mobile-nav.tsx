import Link from 'next/link';
import * as React from 'react';

import { useLockBody } from '@/hooks/use-lock-body';
import { cn } from '@/lib/utils';

import { Button, buttonVariants } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
const MobileNav = ({
  items,
  children,
}: {
  items: { title: string; href: string; disabled?: boolean }[];
  children?: React.ReactNode;
}) => {
  useLockBody();
  return (
    <div
      className={cn(
        'fixed inset-0 top-16 z-30 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden',
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md border bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
                item.disabled && 'cursor-not-allowed opacity-60',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/login"
            className={cn(buttonVariants({ size: 'sm' }), 'px-4')}
          >
            Login
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Register
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="mt-4 w-56">
              <DropdownMenuItem className="cursor-pointer">
                <Link href="">Student</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href="">Instructor</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MobileNav;
