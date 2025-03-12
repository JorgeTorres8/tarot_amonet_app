import Link from "next/link"
import Image from "next/image"
import useTarot from "@/hook/useTarot";

export default function SocialNetworks() {

    const {localActive} = useTarot();
    let template;

    if(localActive === 'es') {
        template = `¡Hola Amonet! Estoy interesado en tus servicios leyendo el Tarot, te contacto por medio de tú página web.`;
      } else {
        template = `Hello Amonet! I am interested in your Tarot reading services, I am contacting you through your website.`;
    }

    const encoded = encodeURIComponent(template);
    const linkW = `${process.env.NEXT_PUBLIC_API_URL_W}?text=${encoded}`;

    const fContactArray = [
        {id: 1, icon: "/img/WhatsApp_icon.png", href: linkW, name:"+584125857302",pColor:"bg-green-800",sColor:"bg-green-700", alt:"WhatsApp icon"},
        {id: 2, icon: "/img/TikTok_icon.png", href: "https://www.tiktok.com/@eltarotdeamonet?_t=8o9x2gbrDgz&_r=1", name:"eltarotdeamonet",pColor:"bg-zinc-900",sColor:"bg-zinc-800", alt:"TikTok icon"},
        {id: 3, icon: "/img/Instagram_icon.png", href: "https://www.instagram.com/eltarotdeamonet?igsh=MTdpaHNtM2ZtMWFpNQ==", name:"eltarotdeamonet",pColor:"bg-orange-800",sColor:"bg-orange-700", alt:"Instagram icon"}
    ]
    const sContactArray = [
        {id: 1, icon: "/img/Telegram_icon.png", href: "https://t.me/+HJI-KHQmi45mYmUx", name:"el_Tarot_de_Amonet",pColor:"bg-sky-800", sColor:"bg-sky-700", alt:"Telegram icon"},
        {id: 2, icon: "/img/YouTube_icon.png", href: "https://www.youtube.com/@El_tarot_de_amonet", name:"@El_Tarot_de_Amonet",pColor:"bg-red-800", sColor:"bg-red-700", alt:"YouTube icon"},
    ]
    
    return (
       <>
            <div className='flex justify-center items-center mt-12 gap-5'>
                <div className='flex gap-6 md:gap-8'>
                    {fContactArray.map(link => (
                        <Link key={link.id} href={link.href} passHref={true} legacyBehavior={true}>
                            <a target='_blank'>
                                <button className={`mt-5 group w-12 hover:w-40 md:hover:w-52 h-12 ${link.pColor} hover:${link.sColor}
                                    relative rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex 
                                    justify-start gap-2 items-center p-2 before:absolute before:-z-10`}>
                                    <div className="w-8 h-8 shrink-0">
                                        <Image
                                            src={`${link.icon}`}
                                            alt={`${link.alt} image`}
                                            width={100}
                                            height={100}
                                            priority={true}
                                            draggable={false}
                                            
                                        />
                                    </div>
                                        <span className="text-xs md:text-base origin-left inline-flex duration-100 group-hover:duration-300 
                                            group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform 
                                            scale-x-0 group-hover:scale-x-100 transition-all text-white">{link.name}</span>
                                </button>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='flex justify-center items-center mt-3 gap-5 md:gap-8'>
                {sContactArray.map(link => (
                    <Link key={link.id} href={link.href} passHref={true} legacyBehavior={true}>
                        <a target='_blank'>
                            <button className={`mt-5 group w-12 hover:w-48 md:hover:w-60 h-12 ${link.pColor} hover:${link.sColor}
                                relative rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex 
                                justify-start gap-2 items-center p-2 before:absolute before:-z-10`}>
                                <div className="w-8 h-8 shrink-0">
                                    <Image
                                        src={`${link.icon}`}
                                        alt={`${link.alt} image`}
                                        width={100}
                                        height={100}
                                        priority={true}
                                        draggable={false}
                                    />
                                </div>
                                <span className="text-xs md:text-base origin-left inline-flex duration-100 group-hover:duration-300 
                                    group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform 
                                    scale-x-0 group-hover:scale-x-100 transition-all text-white">{link.name}</span>
                            </button>
                        </a>
                    </Link>
                ))}
            </div>

            <div className='flex justify-center items-center mt-3 gap-5 md:gap-8'>   
                <Link href='mailto:eltarotdeamonet@gmail.com'passHref={true} legacyBehavior={true}>
                    <a target='_blank'>
                        <button className={`mt-5 group w-12 hover:w-60 md:hover:w-72 h-12 bg-pink-900 hover:bg-pink-800
                            relative rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex 
                            justify-start gap-2 items-center p-2 before:absolute before:-z-10`}>
                            <div className="w-8 h-8 shrink-0">
                                <Image
                                    src='/img/Gmail_icon.png'
                                    alt='Gmail icon image'
                                    width={100}
                                    height={100}
                                    priority={true}
                                    draggable={false}
                                />
                            </div>
                            <span className="text-xs md:text-base origin-left inline-flex duration-100 group-hover:duration-300 
                                group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform 
                                scale-x-0 group-hover:scale-x-100 transition-all text-white">eltarotdeamonet@gmail.com</span>
                        </button>
                    </a>
                </Link>
            </div>
       </>
    );
}