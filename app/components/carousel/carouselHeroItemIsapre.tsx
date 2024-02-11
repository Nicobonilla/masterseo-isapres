import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

type ICarouselHeroItemIsapre = {
  title: string;
  description: string;
};

const CarouselHeroItemIsapre = ({
  title,
  description,
}: ICarouselHeroItemIsapre) => {
  return (
    <div className="relative h-[90vh] w-full xl:px-16 content-center">
      <div className="absolute inset-0 flex flex-wrap grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center  bg-white">
        <div className="md:pl-20  xl:pl-60">
          <Image
            src={"/images/isapres/banmedica.png"}
            height={"200"}
            width={"800"}
            objectFit="contain"
            alt=""
          />
        </div>
        <div className="lg:pl-20 xl:pl-60">
          <Image
            src={"/images/isapres/colmena.png"}
            height={"200"}
            width={"800"}
            objectFit="contain"
            alt=""
          />
        </div>
        <div className="md:pl-20 xl:px-32">
          <Image
            src={"/images/isapres/consalud.png"}
            height={"200"}
            width={"800"}
            objectFit="contain"
            alt=""
          />
        </div>
        <div className="md:pl-20 xl:pl-60">
          <Image
            src={"/images/isapres/cruz-blanca.png"}
            height={"200"}
            width={"800"}
            objectFit="contain"
            alt=""
          />
        </div>
        <div className="md:pl-20 xl:pl-60">
          <Image
            src={"/images/isapres/mas-vida.png"}
            height={"200"}
            width={"800"}
            objectFit="contain"
            alt=""
          />
        </div>
        <div className="md:pl-20 xl:px-32">
          <Image 
            src={"/images/isapres/vida-tres.png"}
            height={"200"}
            width={"800"}
            objectFit="contain"
            alt=""
          />
        </div>
      </div>
      <div className="absolute inset-0 grid h-full w-full items-end bg-black/65">
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
          <Typography
            placeholder={"place"}
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography
            placeholder={"place"}
            variant="lead"
            color="white"
            className="mb-12 opacity-80"
          >
            {description}
          </Typography>
          <div className="flex gap-2">
            <Button size="lg" color="white" placeholder={"place"}>
              Explore
            </Button>
            <Button
              placeholder={"place"}
              size="lg"
              color="white"
              variant="text"
            >
              Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CarouselHeroItemIsapre };