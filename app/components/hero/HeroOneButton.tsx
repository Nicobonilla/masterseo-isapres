import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

export default function HeroOneButton( props : IHeroOneButtonProps){
  return (
  <header className="py-24 px-1.5 text-center">
    <h1 className="whitespace-pre-line px-1 text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mb-5 mt-4 text-2xl">{props.description}</div>
    {props.button}
  </header>
)
}