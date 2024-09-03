import Link from "next/link"
import Image from "next/image"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTarot from "../hook/useTarot";
import Nav from "./Nav"
import NavModal from "./NavModal"
import DarkModeToggle from "./DarkModeToggle"
import Catalogue from "./Catalogue"
import LocalSwitcher from "./LocalSwitcher"

export default function Header(){

    const {isOpen, toggle} = useTarot();

    return (

        <header className="header">
            <div className="flex flex-col justify-center items-center gap-3">
                {/*max-[1160px]:flex-col */}
                <Link href='/'>
                    <Image
                        width={130}
                        height={100}
                        priority
                        className="w-[160px] h-auto md:w-[190px] md:h-auto" 
                        src="/img/icon.png"
                        alt="Amonet Icon"
                    />
                </Link>

                <div className="flex flex-col justify-between items-center mt-4 md:mt-0"> 
                    
                    <div className="flex flex-col justify-center items-center gap-7 md:gap-0 mt-10 md:mt-0">
                        <div className="md:invisible bg-purple-700 px-2 py-2 rounded-md" onClick={toggle}>
                            <FontAwesomeIcon icon={faBars} style={{color: "var(--white)"}} size="2xl"/>
                        </div>

                        <div className="flex justify-center items-center gap-5 mt-5">
                            <DarkModeToggle/>
                            <LocalSwitcher/>
                        </div>
                    </div>

                    <div className="flex max-[950px]:flex-col justify-center items-center mt-16 gap-3">
                        <div className="hidden md:block">
                            <Nav/>
                        </div>
                        
                        <div className={toggle && "hidden md:block"}>
                            <Catalogue/>
                        </div>
                        
                    </div>

                    <NavModal isOpen={isOpen} toggle={toggle}/>
                </div>
            </div>
        </header>
    );
}