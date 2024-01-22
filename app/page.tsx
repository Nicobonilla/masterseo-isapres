'use client'
import { Base } from './templates/Base';
import { Hero } from './templates/Hero';

export default function Page() {
  return (
    <>
      <Base>
        {<Hero />}
      </Base>
    </>
  );
}