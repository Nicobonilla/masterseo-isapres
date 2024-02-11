'use client';
import { Card, CardContent } from "@/components/ui/card";
import imageByIndex from "./imageByIndex";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselIsapres () {
  return (
    <Carousel
      opts={{ align: "center", loop: true, dragFree: true }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1 md:basis-1/2 lg:basis-1/3  w-full"
          >
            <Card>
              <CardContent className="sm:h-[50vh] md:h-[50vh] lg:h-[15vh] flex items-center justify-center p-2">
                <Image
                  src={imageByIndex(index)}
                  height={200}
                  width={800}
                  alt=""
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

