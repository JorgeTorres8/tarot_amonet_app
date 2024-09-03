import { useTranslations } from "next-intl";
import { faMap } from "@fortawesome/free-solid-svg-icons"
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { faFileLines } from "@fortawesome/free-solid-svg-icons"
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons"
import NavButton from "./NavButton"

export default function Nav({toggle}) {

    const t = useTranslations('Navigation');
    
    let linkArray = [
        {id: 1, icon: faMap, href: '#guide', name: t('guide')},
        {id: 2, icon: faBookOpenReader, href: '#readings', name: t('readings')},
        {id: 3, icon: faLock, href: '#end', name: t('end')},
        {id: 4, icon: faAddressBook, href: '#contact', name: t('contact')}
    ]

    if (toggle) {
        linkArray = [
            ...linkArray,
            { id: 5, icon: faFileLines, href: 'https://amonet.my.canva.site/catalogo', name: t('catalogue') },
            { id: 6, icon: faFileInvoiceDollar, href: 'https://amonet.my.canva.site/lista-de-precios', name: t('prices') }
        ];
    }
    
    return (    
        <nav className="flex justify-center items-center">
            <div className="flex flex-col gap-3 md:flex-row">
                {linkArray.map(link => (
                    <NavButton
                        key={link.id} 
                        link={link}
                        toggle={toggle}
                    />
                ))}
            </div>
        </nav>
    );
}