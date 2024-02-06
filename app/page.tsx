'use server';
import { Base } from './templates/Base';
import { Hero } from './templates/Hero';

export default async function Page() {
  return (
    <>
      <Base>
        {<Hero />}
      </Base>
    </>
  );
}