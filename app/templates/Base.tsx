import React from 'react';
import { Meta } from '../components/layout/Meta';
import { AppConfig } from '../components/utils/AppConfig';
import { Background } from '../components/background/Background';
import { Section } from '../components/layout/Section';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { Banner } from './Banner';
import { Hero } from './Hero';
import { Footer } from './Footer';
import Link from 'next/link';

import type { ReactNode } from 'react';

type IBaseProps = {
  children: ReactNode;
};

const Base = (props: IBaseProps) => {
  const { title, description } = AppConfig;
  return (
    <>
      <Meta title={title} description={description} />
      <Background color="bg-background text-foreground">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li className='sm:pr-3 lg:pr-6 xl:pr-12'>
              <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                Nosotros
              </Link>
            </li>
            <li className='sm:pr-3 lg:pr-6 xl:pr-12'>
              <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                Planes
              </Link>
            </li>
            <li className='sm:pr-3 lg:pr-6 xl:pr-12'>
              <Link href="/informacion-isapres-chile">
                Boletín
              </Link>
            </li>
            <li>
              <Link href="/">Cotizar</Link>
            </li>
          </NavbarTwoColumns>
        </Section>
        {props.children}
      </Background>
      <Banner />
      <Footer />
    </>
  );
}

export { Base }