import { useTranslations } from "next-intl";

export default function Footer () {

  const t = useTranslations('Footer');

  return ( 
    <>
      <footer
        className="bg-gray-900 p-10 md:p-5"
      >
        <p className="text-xl md:text-2xl text-white">{t('text')} | <span className="font-merienda">El Tarot de Amonet</span></p>

      </footer>
    </>
  );
}