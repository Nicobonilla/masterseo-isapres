import type { ReactNode } from 'react';
import Link from 'next/link';

type IInfoIsapres = {
    title: string;
    description: string;
    idNoticia: string;
};

const InformacionIsapresChileItem = ({ title, description, idNoticia }: IInfoIsapres): ReactNode => {
    return (
        <Link href={`/informacion-isapres-chile/${idNoticia}`}>
                <article className="shadow-lg relative group cursor-pointer sm:h-[100vw] md:h-[50vh] lg:h-[60vh]">
                    <div className="overflow-hidden sm:h-1/2 md:h-1/3">
                        <img className="w-full h-30 transform hover:scale-110 duration-200"
                            src="https://www.artisticmoods.com/wp-content/uploads/tropicalia_by_mathiole-d31lvne.jpg" alt="" />
                    </div>
                    <div className="p-7 my-auto pb-12">
                        <h1 className="text-lg font-semibold text-gray-800 mt-4">{title}</h1>
                        <p className="text-sm  text-justify text-gray-600 mt-4 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </article>
        </Link>
    );
};

export { InformacionIsapresChileItem };
