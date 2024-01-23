import { Carousel, Typography, Button } from "@material-tailwind/react";
import { CarouselHeroItem } from "./CarouselHeroItem";
import { CarouselHeroItemIsapre } from "./CarouselHeroItemIsapre";
import { ReactNode } from "react";

type ICarousel = {
  children: ReactNode
  autoplay?: false | true;
}

const CarouselHero = ({autoplay}: ICarousel) => (
  <div>
    <Carousel autoplay={false} >
      <CarouselHeroItem
        title={"Cotiza Tu Mejor Plan"}
        description={"Compartenos tus datos y te contactaremos enseguida con los planes de salud ISAPRES más convenientes para ti."}
        image={"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"}
      />
      <CarouselHeroItemIsapre
        title={"The Beauty of Nature"}
        description={" It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."}
      />
      <CarouselHeroItem
        title={"Cotiza Tu Mejor Plan"}
        description={"Compartenos tus datos y te contactaremos enseguida con los planes de salud ISAPRES más convenientes para ti."}
        image={"https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"}
      />
    </Carousel>
  </div>
);

export { CarouselHero };  