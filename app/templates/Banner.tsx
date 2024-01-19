import Link from 'next/link';

import { Button } from '../components/button/Button';
import { CTABanner } from '../components/cta/CTABanner';
import { Section } from '../components/layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Somos agentes de venta de ISAPRES con experiencia"
      subtitle="Te podemos ayudar"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Quiero cotizar</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
