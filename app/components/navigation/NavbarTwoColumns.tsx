import React from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-center">
      <Link href="/">{props.logo}</Link>
  </div>
);

export { NavbarTwoColumns };
