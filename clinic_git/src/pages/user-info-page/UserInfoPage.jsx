import { Header } from '../../Header/header';
import { Footer } from '../../Footer/footer';

import { UserInfo } from '../../UserInfo/userInfo';

import './user-info-page.scss';

export const UserInfoPage = () => {

    document.body.style.overflow = "scroll";

    return (
        <>
            <Header />
            <UserInfo />
            <Footer />
        </>
    )
}