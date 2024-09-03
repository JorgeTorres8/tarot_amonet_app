'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Button () {

  const pathname = usePathname();
  const path = pathname.split("/");
  const locale = path[1]; 
  let template

  if(locale === 'es') {
    template = `¡Hola Amonet! Estoy interesado en tus servicios leyendo el Tarot, te contacto por medio de tú página web.`;
  } else {
    template = `Hello Amonet! I am interested in your Tarot reading services, I am contacting you through your website.`;
  }

  const encoded = encodeURIComponent(template);
  const linkW = `${process.env.NEXT_PUBLIC_API_URL_W}?text=${encoded}`;

  return (
    
    <Link href={linkW} passHref={true} legacyBehavior={true}>
      <a target="_blank">
        <button
          className="fixed right-3 bottom-3 md:right-6 md:bottom-6 z-[1] cursor-pointer bg-sky-800 rounded-full p-3 md:p-4 
          hover:animate-up isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
          before:-left-full before:hover:left-0 before:rounded-full before:bg-green-900 before:-z-10 before:aspect-square before:hover:scale-150
          overflow-hidden before:hover:duration-700"
        >
          <div className="w-7 h-7 md:w-8 md:h-8 shrink-0">
            <Image
              src="/img/WhatsApp_icon.png"
              alt="WhatsApp icon"
              width={100}
              height={100}
              priority={true}
              draggable={false}
            />
          </div>
        </button>
      </a>
    </Link>
  );
}