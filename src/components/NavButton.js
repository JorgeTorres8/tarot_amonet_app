import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavButton({ toggle = () => {}, link }) {

    return (    
        <Link href={link.href} target={link?.list && "_blank"}  onClick={toggle} className="w-[137px] h-16 flex items-center justify-center cursor-pointer">
            <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden 
                    font-semibold shadow transition-all duration-150 ease-in-out rounded 
                    hover:pl-10 hover:pr-6 bg-slate-700 text-white hover:text-gray-200 
                    group hover:shadow-2xl hover:shadow-cyan-600 w-full">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out
                    bg-cyan-600 group-hover:h-full">
                </span>
                <FontAwesomeIcon className="size-5 absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12" icon={link.icon} />
                <FontAwesomeIcon className="size-5 absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200" icon={link.icon} />
                <span className="mr-0.5 relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-gray-200 text-base">{link.name}</span>
            </div>
        </Link>
    );
}