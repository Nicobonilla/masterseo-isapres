import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

type ICarouseHeroItem = {
    title: string;
    description: string;
    image: string;
}

const CarouselHeroItem = ({ title, description, image }: ICarouseHeroItem) => {

    return (
        <div className="relative h-[90vh] w-full">
            <img
                src={image}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                    >
                        {description}
                    </Typography>
                    <div className="flex justify-center gap-2">
                        <Link href="/#contacto-ejecutiva-isapre">
                            <Button size="lg" color="white" >
                                Cotizar
                            </Button>
                        </Link>
                        <Button size="lg" color="white" variant="text">
                            Saber mas
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { CarouselHeroItem }