import { useEffect } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from "./Nav";

export default function NavModal ({ isOpen, toggle}) {

  useEffect(() => {
    if(isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [isOpen])
  
  return (
    <>
      <div
        className="md:invisible grid content-center overflow-hidden fixed left-0 z-10 justify-center w-full h-full bg-black/[0.96]"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`
        }}
      >
        <button className="absolute right-[1.50rem] top-[1.50rem] p-5">
          <FontAwesomeIcon onClick={toggle} icon={faCircleXmark} size='2xl' style={{color: "#ff4500"}}/>
        </button>

        <Nav toggle={toggle} isOpen={isOpen} />
      </div>
    </>
  );
}