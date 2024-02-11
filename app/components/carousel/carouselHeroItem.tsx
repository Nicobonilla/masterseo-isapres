import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

type ICarouseHeroItem = {
    title: string;
    description: string;
    image: string;
}

export default function CarouselHeroItem ({ title, description, image }: ICarouseHeroItem){
    return (
        <div className="relative h-[90vh] w-full">
            <Image className="h-full w-full object-cover"
                src={image}
                height={900}
                width={1000}
                alt="image 1"
                priority
            />
            <div className="absolute inset-0 grid h-full w-full place-items-start bg-black/60">
                <div className="w-3/4  pt-12 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                    <Typography
                        placeholder={"placeholder-h1"}
                        variant="h1"
                        color="white"
                        className="mb-4 text-xl md:text-4xl lg:text-5xl"
                    >
                        {title}
                    </Typography>
                    <Typography
                        placeholder={"placeholder-h1"}
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                    >
                        {description}
                    </Typography>
                    <div className="flex justify-center gap-2">
                        <Link href="/#contacto-ejecutiva-isapre">
                            <Button 
                            className={"text-xl px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-black-700 bg-opacity-60 hover:bg-opacity-25"} 
                            placeholder={"place"}>
                                Cotizar
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
