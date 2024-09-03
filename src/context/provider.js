'use client'
import { createContext, useState, useEffect, useRef, useTransition} from 'react'
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import axios from 'axios';

export const TarotContext = createContext({});

export default function TarotProvider({ children }) {

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalReadings, setTotalReadings] = useState(0);
  const [readings, setReadings] = useState([]);
  const [page, setPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const [isPending, startTransition] = useTransition();
  const dashboardRef = useRef(null);
  const localActive = useLocale();
  const router = useRouter();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(mediaQuery.matches);

    const handleChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const handleTheme = () => {
    setDarkMode(!darkMode)
  }
   
  useEffect(() => {
      const count = async () => {
        const url = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/lists`
        const {data} = await axios(url);
        setTotalReadings(data.length);
      }
      count()
    }, [])

  useEffect(() => {
    const consultAPI = async () => {
      setLoading(true);
      let url;

      if(localActive === 'es') {
        url = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/lists?_start=${(page-1)*6}&_limit=6`
      } else {
        url =`${process.env.NEXT_PUBLIC_LOCAL_API_EN_URL}/lists?_start=${(page-1)*6}&_limit=6`
      }
        
      const {data} = await axios(url);
      setReadings(data);
      setLoading(false);
    }
    consultAPI();
  }, [page, localActive]);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const handleChangePage = (value) => {
    setPage(value);
    dashboardRef.current.scrollIntoView({behavior: "smooth", block: "start"});
  }

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    })
  }

  return (
    <TarotContext.Provider value={{
      darkMode,
      handleTheme,
      isOpen,
      toggle,
      loading,
      totalReadings,
      readings,
      handleChangePage,
      page,
      dashboardRef,
      pageTitle,
      setPageTitle,
      onSelectChange,
      localActive,
      isPending
    }}>
      {children}
    </TarotContext.Provider>)
};