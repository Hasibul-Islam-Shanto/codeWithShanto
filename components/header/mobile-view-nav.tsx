'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import MobileNav from '../mobile-nav';

const MobileViewNav = ({
  items,
  children,
}: {
  items: { title: string; href: string; disabled?: boolean }[];
  children?: React.ReactNode;
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <button
        className="flex items-center space-x-2 lg:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <X /> : <Menu />}
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </>
  );
};

export default MobileViewNav;
