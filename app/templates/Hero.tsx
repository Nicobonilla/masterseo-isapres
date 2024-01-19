'use client';
import Link from 'next/link';
import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { Section } from '../components/layout/Section';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { Contacto } from './Contacto';
import { CarouselHero } from '../components/carousel/CarouselHero';
import { CarouselIsapres } from '../components/carousel/carouselIsapres';


const Hero = () => (
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
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            Boletín
          </Link>
        </li>  
        <li>
          <Link href="/">Cotizar</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <CarouselHero />
    
    <Section yPadding="pt-40 pd-10 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>Download Your Free Theme</Button>
          </Link>
        }
      />
    </Section >

    <Section yPadding="pt-5 pd-10 pb-32">
      <div className="flex justify-center items-center" >
      <CarouselIsapres />
      </div>
    </Section>
    
    <Section yPadding="pt-10 pd-10 pb-32">
      <div className="flex justify-center items-center" >
        <Contacto />
      </div>
    </Section>
  </Background>
);

export { Hero };
