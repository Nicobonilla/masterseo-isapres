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
            <div id='top'></div>
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