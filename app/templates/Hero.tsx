'use client';
import Link from 'next/link';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { Section } from '../components/layout/Section';
import { ContactForm } from './ContactForm';
import { CarouselHero } from '../components/carousel/CarouselHero';
import { CarouselIsapres } from '../components/carousel/CarouselIsapres';


const Hero = () => (
  <>
    <CarouselHero />
    <Section yPadding="pt-40 pd-10 pb-32">
      <HeroOneButton
        title={
          <>
            {'Aprovecha al máximo tu 7%\n'}
            <span className="text-primary-500">Ejecutivas certificadas</span>
          </>
        }
        description="La forma más rápida y convenienta para contratar Planes de Salud Previsional."
        button={
          <Link href="/#contacto-ejecutiva-isapre">
            <Button xl>Quiero cotizar</Button>
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
      <div id='contacto-ejecutiva-isapre' className="flex justify-center items-center" >
        <ContactForm />
      </div>
    </Section>
  </>
);

export { Hero };
