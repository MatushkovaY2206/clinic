import { Header } from '../../Header/header';
import { Footer } from '../../Footer/footer';
import { ServicesItems } from '../../ServicesItems/servicesItems';

import './services-page.scss';

export const ServicesPage = () => {

    document.body.style.overflow = "scroll";

    return (
        <>
            <Header />
            <ServicesItems />
            <Footer />
        </>
    )
}