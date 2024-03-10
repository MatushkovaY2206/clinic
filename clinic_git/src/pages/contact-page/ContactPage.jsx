import { Header } from '../../Header/header';
import { Footer } from '../../Footer/footer';
import { Contacts } from '../../Contacts/contacts';

import './contact-page.scss';

export const ContactPage = () => {

    document.body.style.overflow = "scroll";

    return (
        <>
            <Header />
            <Contacts />
            <Footer />
        </>
    )
}