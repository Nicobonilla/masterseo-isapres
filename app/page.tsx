"use client";
import Link from "next/link";
import { Section } from "./components/layout/Section";
import { ContactForm } from "./templates/ContactForm";
import { CarouselIsapres } from "./components/carousel/CarouselIsapres";
import CarouselHeroItem  from "./components/carousel/CarouselHeroItem";
import HeroButton from './components/server/HeroButton';
import dynamic from 'next/dynamic';
import { useState, useEffect} from 'react';
import CarouselHero from './components/carousel/CarouselHero';

export default function Page() {
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);
  
  useEffect(() => {
    // Aquí puedes realizar operaciones adicionales si necesitas
    setIsComponentLoaded(true); // Esto activará la renderización del componente dinámico
  }, []); // El arreglo vacío asegura que este efecto se ejecute solo una vez

  return (
    <div>
      {isComponentLoaded ? <CarouselHero/> :  <CarouselHeroItem
      title="Cotiza Tu Mejor Plan"
      description="Compartenos tus datos y te contactaremos enseguida con los planes de salud ISAPRES más convenientes para ti."
      image="/images/family-1.jpg"
    />}
      <HeroButton />

      <Section yPadding="pt-5 pd-10 pb-32">
        <div className="flex justify-center items-center">
          <CarouselIsapres />
        </div>
      </Section>

      {/* <Section yPadding="pt-10 pd-10 pb-32">
      <div id='contacto-ejecutiva-isapre' className="flex justify-center items-center" >
        <ContactForm />
      </div>
    </Section> */}
    </div>
  );
}
