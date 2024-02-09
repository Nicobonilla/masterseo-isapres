import Carousel from "react-multi-carousel";
import { CarouselHeroItem } from "../carousel/CarouselHeroItem";
import { CarouselHeroItemIsapre } from "../carousel/CarouselHeroItemIsapre";
// import { CustomRightArrow } from './CustomRightArrow'
// import { CustomLeftArrow } from './CustomLeftArrow'
import "react-multi-carousel/lib/styles.css";

export default function CarouselMulti({...rest}) {
  const {deviceType} = rest
    const swap_m = 10;
    const responsive = {
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
          partialVisibilityGutter: swap_m 
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: swap_m 
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
          partialVisibilityGutter: swap_m 
        },
      }
  return (
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={deviceType !== "mobile" ? true : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
      deviceType={deviceType}
    >
      <CarouselHeroItem
        title={"Cotiza Tu Mejor Plan"}
        description={
          "Compartenos tus datos y te contactaremos enseguida con los planes de salud ISAPRES más convenientes para ti."
        }
        image={"/images/family-1.jpg"}
      />
      <CarouselHeroItemIsapre
        title={"The Beauty of Nature"}
        description={
          " It is not so much for its beauty that the forest makes a claim upon men&apos;s hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
        }
      />
      <CarouselHeroItem
        title={"Cotiza Tu Mejor Plan"}
        description={
          "Compartenos tus datos y te contactaremos enseguida con los planes de salud ISAPRES más convenientes para ti."
        }
        image={"/images/family-2.jpg"}
      />
    </Carousel>
  );
}
