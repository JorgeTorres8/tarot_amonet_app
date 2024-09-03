'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslations } from "next-intl";
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import useTarot from '@/hook/useTarot';
import DarkModeToggle from '@/components/DarkModeToggle';
import SocialNetworks from '@/components/SocialNetworks';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import NavButton from '@/components/NavButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Reading() {

  const t = useTranslations('Url');
  const [reading, setReading] = useState([]);
  const pathname = usePathname();
  const path = pathname.split("/");
  const lastPart = path[path.length - 1];
  const locale = path[1]; 
  const {localActive} = useTarot();

  /*useEffect(() => {
    const foundReading = readingJson.find((item) => item.url === lastPart);
    setReading(foundReading);
  }, []);*/

  useEffect(() => {
    async function loadReadingJson() {
      let readingJson;
      if (locale === 'es') {
        readingJson = await import('../../../../../includes/reading.json');
      } else if (locale === 'en') {
        readingJson = await import('../../../../../includes/readingEN.json');
      }
      const foundReading = readingJson.default.find((item) => item.url === lastPart);
      setReading(foundReading);
    }
    loadReadingJson();
  }, [locale, lastPart]);

  useEffect(() => {
    AOS.init();
  }, []);
  
  const {name, description, price, priceI, image} = reading;

  const linkArray = [
    {id: 1, icon: faLeftLong, href: `/${localActive}`, name: t('button')},
  ]
  
  return (
    <div className='bg-white dark:bg-black'>  
      <header>
      </header>
      
      <style jsx>{`
        header{
          background-image: linear-gradient(to bottom, rgb(0 0 0 / .2), rgb(0 0 0 /.3)), url(${image});
          background-size: cover;
          background-position: center;
          min-height: 30vh;
          position: relative;
          border-bottom-left-radius: 50% 20%;
          border-bottom-right-radius: 50% 20%;
        }
        @media(min-width: 768px) {
            header {
              min-height: 100vh;
            }
          }
      `}</style>

      <section className='min-h-screen p-6 md:p-16 bg-white dark:bg-black'>
        <div className="flex justify-between items-center gap-10">
          {linkArray.map(link => (
            <NavButton
              key={link.id} 
              link={link}
            />
          ))}

          <div>
            <DarkModeToggle/>
          </div>
        </div>

        <div data-aos="zoom-in-down" data-aos-duration="800">
          <h1 className='mt-7 text-center text-5xl'>{name}</h1>
          <p>{description}</p>
          
          <div className='mt-8 border-y-4 border-sky-500 rounded-3xl'>
            <p className='mt-3'>{t('invitation')}</p>
            
            <p className='mt-3'>{t('help')}</p>

            <p className='mt-3'>{t('ws')}</p>

            <p className='mt-5 mb-3 font-bold'>{t('click')}</p>
          </div>

          {price ?
            <div data-aos="zoom-in-up" data-aos-duration="800" className='mt-24 flex justify-center items-center gap-12'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center'>
                <div className="hover:-translate-y-2 group bg-zinc-200 duration-500 w-52 h-44 flex text-neutral-600 flex-col 
                  justify-center items-center flex-grow relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-zinc-700 hover:dark:shadow-cyan-700">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-[spin_15s_linear_infinite] hover:animate-[spin_3s_linear_infinite] absolute blur z-10 fill-violet-400 duration-500 group-hover:blur-none group-hover:scale-105"
                  >
                    <path
                      transform="translate(100 100)"
                      d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                    ></path>
                  </svg>

                  <div className="z-20 flex flex-col justify-center items-center cursor-default">
                    <p className="font-bold text-stone-800">{t('value')}:</p>
                    <p className="font-bold text-stone-800">{t('national')}</p>
                    <span className="font-bold text-6xl text-stone-950 ">{price}</span>
                  </div>
                </div>
              
                <div className="hover:-translate-y-2 group bg-zinc-200 duration-500 w-52 h-44 flex text-neutral-600 flex-col 
                  justify-center items-center flex-grow relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-zinc-700 hover:dark:shadow-cyan-700"> {/*animate-[bounce_1s_ease-in-out_infinite] */}
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-[spin_15s_linear_infinite] hover:animate-[spin_3s_linear_infinite] absolute blur z-10 fill-violet-400 duration-500 group-hover:blur-none group-hover:scale-105"
                  >
                    <path
                      transform="translate(100 100)"
                      d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                    ></path>
                  </svg>

                  <div className="z-20 flex flex-col justify-center items-center cursor-default">
                  <p className="font-bold text-stone-800">{t('value')}:</p>
                  <p className="font-bold text-stone-800">{t('international')}</p>
                    <span className="font-bold text-6xl text-stone-950">{priceI}</span>
                  </div>
                </div>
              </div>
            </div>
            :
            <p className='text-center text-3xl'>{t('services')}</p>
          }
        </div>

        <div className='flex flex-col md:grid md:grid-cols-2 items-center justify-center mt-24 gap-7'>
          <div className='schedule'>
            <div className='rounded-md p-7 md:p-10 mt-7'  >
              <h2 className='mt-0 text-center text-white text-3xl'>{t('steps')}</h2>
              
                <p className='text-center md:text-left text-white text-xl'><span className='font-bold'>{t('select')} </span>
                {t('selectSpan')}</p>

                <div className='flex flex-col md:flex-row justify-start items-center'>
                  <p className='text-center md:text-left mt-10 md:mt-5 text-white text-xl'><span className='font-bold'>{t('payment')} </span>{t('paymentSpan')}</p>
                  {/*<div className='animate-up h-5'><p>👇🏻</p></div>*/}
                </div>

                <div data-aos="flip-up" data-aos-duration="900" className="flex flex-col items-center justify-center mt-3">
                  <div className="flex flex-col items-center mt-7 md:mt-3">
                    <p className='mt-2 font-semibold text-white text-xl'>CI: 12.617.416</p>
                    <p className='mt-2 font-semibold text-white text-xl'>0412-585-7302</p>
                    <p className='mt-2 font-semibold text-white text-xl'>MERCANTIL (0105)</p>
                  </div>
                  
                  <div className='flex flex-col items-center justify-center mt-3'>
                    <p className='mt-2 font-semibold text-white text-xl'>{t('paypal')}</p>
                    <p className='mt-2 font-semibold text-white text-xl'>eltarotdeamonet@gmail.com</p>
                  </div>
                </div>

                <p className='text-center md:text-left mt-10 md:mt-4 text-white text-xl'><span className='font-bold'>{t('confirmation')} </span>{t('confirmationSpan')}</p>
                <p className='text-center md:text-left font-bold mt-5 text-white text-xl'>{t('ready')}</p>
            </div>
          </div>

          <Form name={name}/>
        </div>
      
        <h3>{t('cancellation')}</h3>
        <p>{t('cancellationText')}</p>

        <div className='flex flex-col justify-center items-center gap-4'>
          <h4>{t('hours')}</h4>
            <div data-aos="fade-right" data-aos-duration="300">
              <p>{t('hoursText')}</p>
              <p className='mt-6'>{t('time')}</p>
            </div>
        </div>

        <h5>{t('details')}</h5>

        <p>{t('detailsText')}</p>
        
        <div data-aos="fade-down-right" data-aos-duration="900">
          <SocialNetworks/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}