'use client';
import Link from 'next/link';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { Section } from '../components/layout/Section';
import { Contacto } from './Contacto';
import { CarouselHero } from '../components/carousel/CarouselHero';
import { CarouselIsapres } from '../components/carousel/carouselIsapres';


const Hero = () => (
  <>
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
  </>
);

export { Hero };
