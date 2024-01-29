import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type IInfoIsapres = {
    title: string;
    description: string;
    idNoticia: string;
    urlImg: string;
};

const InformacionIsapresChileItem: FC<IInfoIsapres>= ({ title, description, idNoticia, urlImg }) => {
    return (
        <Link href={`/informacion-isapres-chile/${idNoticia}`}>
                <article className="shadow-lg relative group cursor-pointer sm:h-[70vw] md:h-[50vh] lg:h-[60vh]">
                    <div className="overflow-hidden sm:h-1/2 md:h-1/3">
                    <Image className="w-full transform hover:scale-110 duration-200"
                    height={100}
                    width={200}
                    src={urlImg}
                    alt={urlImg}
                    />
                    </div>
                    <div className="p-7 my-auto pb-12">
                        <h1 className="text-lg font-semibold text-gray-800 mt-4">{title}</h1>
                        <p className="text-sm  text-justify text-gray-600 mt-4 leading-relaxed">
                            { description}
                        </p>
                    </div>
                </article>
        </Link>
    );
};

export { InformacionIsapresChileItem };
