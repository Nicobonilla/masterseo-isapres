import React from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

export default function NavbarTwoColumns({children}: INavbarProps){
  return(
  <div className="flex flex-wrap items-center justify-center">
      <Link href="/">{children}</Link>
  </div>
);
  }