import { useTranslations } from "next-intl";
import SocialNetworks from "./SocialNetworks"

export default function Contact() {

    const t = useTranslations('Contact');
    
    return (
        <section>
            <style jsx>{`
                section{
                    background-image: linear-gradient(to right, rgb(0 0 0 /0.8), rgb(0 0 0 /0.85)), url(/img/banner.png);
                    background-size: cover;
                    background-position: center;
                    padding: 4rem 0 8rem 0;
                    position: relative;
                }
                @media(min-width: 768px) {
                    section {
                        background-image: linear-gradient(to right, rgb(0 0 0 /0.6), rgb(0 0 0 /0.9)), url(/img/banner.png);
                        padding: 5rem 1rem;
                    }
                }
            `}</style>

            <div className='flex md:grid md:grid-cols-2 items-center justify-center md:mr-4 p-6 md:p-0'> {/*flex items-center justify-center gap-x-8 p-6 md:p-16*/}
                <div className='flex-col md:justify-end md:col-end-3'> {/*lg:ps-60*/}  
                    <h5 className="mt-0 text-center text-5xl text-white">{t('title')}</h5>
                    <p className="text-white">{t('description')}</p>
                    <p className="text-white font-bold mt-2">{t('descriptionSpan')}</p>
                    <SocialNetworks/>
                </div>   
            </div>
        </section>
    );
}