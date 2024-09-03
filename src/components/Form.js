'use client';
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { toast } from 'react-toastify';
import { Zoom, Flip } from 'react-toastify';
import useTarot from "@/hook/useTarot";

export default function Form ({name}) {

    const t = useTranslations('Form');
    const [firstName, setfirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [data, setData] = useState('');
    const [message, setMessage] = useState('');
    const {localActive} = useTarot();

    const handleSubmit = async e => {
        e.preventDefault();
    
        if([firstName, lastname, data, message].includes('')) {
          toast.warn(`${t('warn')}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
            });
        } else {
            const client = {
                firstName,
                lastname,
                data,
                message,
            };

            setfirstName('');
            setLastname('');
            setData('');
            setMessage('');

            toast.success(`${t('success')}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });

            const fechaComponentes = client.data.split('-');
            const year = fechaComponentes[0];
            const month = fechaComponentes[1];
            const day = fechaComponentes[2];

            let template

            if(localActive === 'es') {
                template = `¡Hola Amonet! quiero agendar una cita a la ${name}, estos son mis datos: Mi Nombre y Apellido completo es ${firstName} ${lastname}, mi fecha de nacimiento es el día ${day} del mes ${month} en el año ${year} y mi pregunta concreta sobre la lectura es: ${message}`;
            } else {
                template = `Hello Amonet! I want to schedule an appointment for the ${name}, here are my details: My full name is ${firstName} ${lastname}, my date of birth it is month ${month} on day ${day} in the year ${year} and my specific question about the reading is: ${message}`;
            }
            
            const encoded = encodeURIComponent(template);
            const linkW = `${process.env.NEXT_PUBLIC_API_URL_W}?text=${encoded}`;

            window.open(linkW, '_blank');
        }
    }

    return (

        <>
            <div className="flex items-center justify-center">
                <form
                    className="bg-gray-900 border-[4px] font-josefin border-sky-900 rounded-2xl hover:border-sky-700 hover:shadow-xl hover:shadow-cyan-800 transition-all duration-200"
                    onSubmit={handleSubmit}
                >
                    <div className="mx-auto space-y-4 py-10 px-8 font-semibold text-gray-500">
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src="/img/icon.png"
                                alt="Amonet Icon"
                                className="w-auto h-auto"
                                width={120}
                                height={20}
                                priority
                            />
                            <h6 className="text-white text-2xl mt-5 mb-0">{t('information')}</h6>
                        </div>
                        
                        <div className="flex justify-center items-center gap-5 mt-7">
                            <div>
                                <label
                                    className="block mb-3 text-lg font-medium text-zinc-200"
                                    htmlFor="firstName"
                                    >{t('name')}
                                </label>
                                <input
                                    className="text-black w-full p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                                    placeholder={t('namePlaceholder')}
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={firstName}
                                    onChange={e => setfirstName(e.target.value)}
                                />
                            </div>
                            
                            <div>
                                <label
                                    className="block mb-3 text-lg font-medium text-zinc-200"
                                    htmlFor="lastname"
                                    >{t('lastname')}
                                </label>
                                <input
                                    className="text-black w-full p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                                    placeholder={t('lastnamePlaceholder')}
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    value={lastname}
                                    onChange={e => setLastname(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-7">
                            <label
                                className="mt-7 text-left text-lg font-medium text-zinc-200"
                                htmlFor="data"
                                >{t('birth')}
                            </label>
                            
                            <input
                                className="text-black w-full mt-3 p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                                type="date"
                                name="data"
                                id="data"
                                value={data}
                                onChange={e => setData(e.target.value)}
                                max={new Date().toISOString().split('T')[0]}
                            />
                        </div>

                        <div className="mt-7">
                            <label
                                className="mt-7 text-left text-lg font-medium text-zinc-200"
                                htmlFor="message"
                                >{t('question')}
                            </label>
                                
                            <textarea
                                className="text-black w-full mt-3 p-2 bg-gray-300 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                                placeholder={`${t('questionPlaceholder')} ${name}`}
                                maxLength="90"
                                rows="4"
                                name="message"
                                id="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <input
                            className="w-full cursor-pointer bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium px-4 py-2 rounded-md hover:brightness-75 active:opacity-75 outline-none duration-300 group"
                            type="submit"
                            value={t('schedule')}
                        />  
                    </div>
                </form>
            </div>
        </>
    );
}