'use client';
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import useTarot from "@/hook/useTarot";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lists from "@/components/Lists";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);
  
  const t = useTranslations('HomePage');
  const {readings} = useTarot();
  const listArray = [
    {id: 1, content: t('information')},
    {id: 2, content: t('chooseReading')},
    {id: 3, content: t('includeData')},
    {id: 4, content: t('completeForm')},
    {id: 5, content: t('reviewData')}
  ]
  
  return (
    <>
      <Header/>

      <h1 className="p-10 m-0 bg-purple-800 text-white">{t('title')}<span className="font-bold">{t('titleSpan')}</span></h1>

      <div className="p-6 md:p-16 bg-white dark:bg-black">
        <h2 id="guide">{t('guide')}</h2>

          <ul className="list-disc text-violet-600 text-2xl pl-8">
            {listArray.map(list => (
              <li data-aos="flip-up" data-aos-offset="150" key={list.id} className="mt-5 pl-3 ">
                <p className="text-left">{list.content}</p>
              </li>
            ))}
          </ul>
        
        <main id="readings">
          <Lists readings={readings}/>
        </main>
      </div>
      
      <div id="end" className="p-6 md:p-16 bg-white dark:bg-black mt-0">
        <h4 className="mt-0">{t('personalized')}</h4>

        <p className="mb-10"
          data-aos="fade-right"
          data-aos-duration="200"
          data-aos-easing="ease-in-sine"
        >{t('email')}</p>
      </div>

      <div id="contact" className="bg-white dark:bg-black">
        <Contact/>
      </div>
      
      <Footer/>
    </>
  );
}