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
        image={"/images/family-1.jpg"}
      />
      <CarouselHeroItemIsapre
        title={"The Beauty of Nature"}
        description={" It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."}
      />
      <CarouselHeroItem
        title={"Cotiza Tu Mejor Plan"}
        description={"Compartenos tus datos y te contactaremos enseguida con los planes de salud ISAPRES más convenientes para ti."}
        image={"/images/family-2.jpg"}
      />
    </Carousel>
  </div>
);

export { CarouselHero };  