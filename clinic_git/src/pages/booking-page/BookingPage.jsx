import { Header } from '../../Header/header';
import { Footer } from '../../Footer/footer';
import { Booking } from '../../Booking/booking';

import './booking-page.scss';

export const BookingPage = () => {

    document.body.style.overflow = "scroll";

    return (
        <>
            <Header />
            <Booking />
            <Footer />
        </>
    )
}