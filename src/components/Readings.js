'use client';
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Readings({reading}) {

    const {name, description, url, image} = reading;
    const router = useRouter();
    const t = useTranslations('Readings');

    return (
        <div>
            <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-zinc-700 hover:dark:shadow-cyan-700
                hover:scale-105 duration-500 hover:cursor-pointer dark:bg-gray-800">
                <Image 
                    src={`${image}`}
                    className="w-auto h-auto"
                    alt={`${name} image`}
                    width={400}
                    height={400}
                    priority={true}
                    draggable={false}
                />
                
                <div className="px-4 md:px-6 pb-0 pt-4">
                    <div className="font-bold text-xl text-gray-900 dark:text-white text-center mb-6 md:mb-0 md:h-[65px]">{name}</div>
                    <p className="text-gray-700 dark:text-gray-50 text-base md:h-[50px]">
                        {description}
                    </p>
                </div>

                <div className="px-4 md:px-6 pt-4 mt-3 md:mt-5 lg:mt-10 min-[1200px]:mt-4 pb-2 flex items-center justify-end">
                    {/*<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{duration}</span>*/}
                    <button
                        onClick={() => router.push(`/reading/${url}`)}
                        className="flex items-center justify-between gap-3 bg-purple-800 rounded-full px-3 py-1 text-base font-semibold text-white mr-2 mb-2"
                    >
                        {t('info')}
                        <FontAwesomeIcon className="size-6" icon={faCircleChevronRight}/>
                    </button>
                </div>
            </div>
        </div>
    );
}