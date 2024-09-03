import useTarot from '../hook/useTarot';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DarkModeToggle() {

  const {darkMode, handleTheme} = useTarot();
  
  return (

    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" onClick={() => handleTheme()}/>
        <div className="w-12 h-12 shadow-md rounded-full bg-amber-600 peer-checked:bg-cyan-600 flex justify-center items-center 
            peer-focus:outline-none duration-500 peer-hover:scale-90">
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className={`text-gray-50 text-2xl duration-1000 ease-out ${darkMode ? '-rotate-180' : 'rotate-0'}`}
          />
        </div>
    </label>
  );
}