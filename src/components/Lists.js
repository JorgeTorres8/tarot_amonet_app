import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import useTarot from "../hook/useTarot";
import Readings from "./Readings";

export default function Lists({readings}) {

  const t = useTranslations('List');
  const { page, handleChangePage, totalReadings, loading, dashboardRef} = useTarot();
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalReadings / itemsPerPage);

  // Generates an array with the page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      <h3>{t('readings')}</h3>
      <p 
        ref={dashboardRef}
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >{t('description')}</p>

      <div 
        data-aos="fade-up" data-aos-offset="200"
        className="p-3 mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-cols-fr">
          {(loading ? Array.from(new Array(6)) : readings).map((item, index) => (
            <div key={index}>
              {item ?
                <Readings
                  key={item.id}
                  reading={item}
                />
              :   
              (<>
                <div className="border border-cyan-600 shadow rounded-md p-4 w-full ">
                  <div className="animate-pulse flex flex-col gap-10">
                    <div className="rounded-md bg-slate-700 h-64 w-auto"></div>
                      <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                          </div>
                          <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                      </div>
                  </div>
                </div>
              </>)}
            </div>
          ))}
      </div>

      <nav className="flex items-center justify-center mt-8">
        <ul className="flex items-center justify-center text-xs md:text-sm gap-3.5 md:gap-5">
          <li>
            <button
              onClick={() => page > 1 && handleChangePage(page - 1)}
              className={`flex items-center justify-center px-1 md:px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-s-lg 
              hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
              dark:hover:text-white ${page > 1 ? '' : ' cursor-not-allowed'}`}
            >
              <FontAwesomeIcon className="size-5" icon={faAngleLeft}/>
            </button>
          </li>
          
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                onClick={() => handleChangePage(pageNumber)}
                className={`flex items-center justify-center px-3 md:px-5 py-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-70 
                  border-2 border-gray-30 dark:border-gray-700  hover:dark:text-white 
                ${pageNumber === page ? 'font-bold bg-purple-500 border-zinc-700 hover:cursor-default' : 'hover:bg-gray-100 dark:hover:bg-gray-700 hover:cursor-pointer'}`}
              ><p className={` ${pageNumber === page ? 'text-white' : ''}`}>{pageNumber}</p>
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={() => page < totalPages && handleChangePage(page + 1)}
              className={`flex items-center justify-center px-1 md:px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-e-lg
               hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
               dark:hover:text-white ${page < totalPages ? '' : ' cursor-not-allowed'}`}
            >
              <FontAwesomeIcon className="size-5" icon={faAngleRight}/>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}