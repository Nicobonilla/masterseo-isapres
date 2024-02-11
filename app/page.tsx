"use server";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import HeroOneButton from "./components/hero/HeroOneButton";
import { Button } from "./components/button/Button";

const DCarouselHero = dynamic(
  () => import("./components/carousel/CarouselHero"),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-[90vh] w-full">
        <Image
          className="h-full w-full object-cover"
          src={"/images/family-1.jpg"}
          height={900}
          width={1000}
          alt="/images/family-1.jpg"
          priority
        />{" "}
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60"></div>
      </div>
    ),
  }
);
const DCarouselIsapres = dynamic(
  () => import("./components/carousel/CarouselIsapres"),
  { ssr: false }
);
const DContactForm = dynamic(() => import("./templates/ContactForm"), {
  ssr: false,
});

export default async function Page() {
  // El arreglo vacío asegura que este efecto se ejecute solo una vez
  return (
    <div>
      <DCarouselHero />
        <HeroOneButton
          title={
            <>
              {"APROVECHA AL MÁXIMO TU 7%\n"}
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

        <div className="flex justify-center items-center">
          <DCarouselIsapres />
        </div>

        <div
          id="contacto-ejecutiva-isapre"
          className="flex justify-center items-center"
        >
          <DContactForm />
        </div>
    </div>
  );
}
