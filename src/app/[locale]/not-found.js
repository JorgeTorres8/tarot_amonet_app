import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function NotFound () {

    const t = useTranslations('NotFound');

    return (

        <div className='h-screen flex flex-col justify-center items-center bg-gray-900 p-6 md:p-16'>
            <Image
                src="/img/icon.png"
                alt="Amonet Icon"
                width={110}
                height={40}
                priority
            />

            <div className="flex flex-col justify-center items-center gap-3 mt-8">    
                <div className="flex justify-center items-center gap-2">
                    <FontAwesomeIcon className="size-8" icon={faBan} style={{color: '#B22222'}}/>
                    <h1 className='text-white text-2xl md:text-4xl m-0'>{t('title')}</h1>
                </div>
                <p className='text-white mt-5'>{t('text')}</p>
            </div>

            <div className="flex justify-start items-center gap-10 mt-8">
                <Link href="/" className="w-auto h-16 flex items-center justify-center cursor-pointer" /*onClick={toggle}*/>   
                    <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden 
                            font-semibold shadow transition-all duration-150 ease-in-out rounded 
                            hover:pl-10 hover:pr-6 bg-slate-700 text-white hover:text-gray-200 group hover:shadow-2xl hover:shadow-cyan-600 ">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out
                            bg-cyan-600 group-hover:h-full">
                        </span>
                            
                        <FontAwesomeIcon className="size-10 absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12" icon={faLeftLong}/>
                        <FontAwesomeIcon className="size-9 absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200" icon={faHouse}/>
                        <span className=" ml-0.5 relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-gray-200">{t('button')}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}