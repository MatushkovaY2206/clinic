import { Header } from '../../Header/header';
import { Footer } from '../../Footer/footer';

import './login-page.scss';
import { LoginForm } from '../../LoginForm/loginForm';

export const LoginPage = () => {

    document.body.style.overflow = "scroll";

    return (
        <>
            <Header />
            <LoginForm />
            <Footer />
        </>
    )
}