import { useTranslations } from "next-intl";
import { faFileLines } from "@fortawesome/free-solid-svg-icons"
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons"
import NavButton from "./NavButton";

export default function Catalogue () {

    const t = useTranslations('Navigation');

    const linkArray = [
        {id: 1, icon: faFileLines, href: 'https://amonet.my.canva.site/catalogo', name:t('catalogue'), list:1},
        {id: 2, icon: faFileInvoiceDollar, href: 'https://amonet.my.canva.site/lista-de-precios', name:t('prices'), list:2}
    ]

    return (
        <div className="flex flex-col md:flex-row lg:flex-row gap-3">
            {linkArray.map(link => (
                <NavButton
                    key={link.id} 
                    link={link}
                />
            ))}
        </div>
    );
}