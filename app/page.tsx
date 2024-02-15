"use client";
import Link from "next/link";
import Image from "next/image";
import HeroOneButton from "./components/hero/HeroOneButton";
import { Button } from "./components/button/Button";
import CarouselHero from "./components/carousel/CarouselHero";
import CarouselIsapres from "./components/carousel/CarouselIsapres";
import ContactForm from "./templates/ContactForm";
import { Section } from "./components/layout/Section";

export default function Page() {
  // El arreglo vacío asegura que este efecto se ejecute solo una vez
  return (
    <div className="flex flex-col items-center justify-center">
      <CarouselHero />
      <HeroOneButton
        title={
          <>
            {"APROVECHA AL MÁXIMO TU 7%\n"}
            <span className="text-primary-500">Ejecutivas certificadas</span>
          </>
        }
        description="La forma más rápida y convenienta para contratar Planes de Salud Previsional."
        button={
          <div className="px-10">
            <Link href="/#contacto-ejecutiva-isapre">
              <Button xl>COTIZA GRATIS TU PLAN DE SALUD</Button>
            </Link>
          </div>
        }
      />
      <div className="pt-14 p-5">
        <div className="grid place-items-center">
          <Image
            src={"/images/familia4.png"}
            height={828}
            width={518}
            alt=""
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <CarouselIsapres />
      </div>

      <div
        id="contacto-ejecutiva-isapre"
        className="flex justify-center items-center"
      >
        <ContactForm />
      </div>

      <div className="m-3">
        <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
          <div className="text-2xl font-semibold">
            <div className="text-gray-900">
              Somos agentes de venta de ISAPRES con experiencia
            </div>
            <div className="text-primary-500">TE AYUDAMOS</div>
          </div>
          <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0"></div>
        </div>
      </div>
    </div>
  );
}
