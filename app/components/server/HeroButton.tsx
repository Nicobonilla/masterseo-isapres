'use client';
import Link from "next/link";
import { Section } from "../layout/Section";
import { Button } from "../button/Button";
import HeroOneButton from '../hero/HeroOneButton';

export default function HeroButton(){
    return(
    <Section yPadding="pt-40 pd-10 pb-32">
        <HeroOneButton
          title={
            <>
              {"Aprovecha al máximo tu 7%\n"}
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
      </Section>
)};