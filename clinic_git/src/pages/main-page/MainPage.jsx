import './main-page.scss';
import { Main } from '../../Main/main';
import { Header } from '../../Header/header';
import { Footer } from '../../Footer/footer';
import { ServicesItems } from '../../ServicesItems/servicesItems';
import EmployeesList from '../../EmployeesList/employeesList';

export const MainPage = () => {
    document.body.style.overflow = "scroll";
    return (
        <>
            <Header />
            <Main />
            <ServicesItems />
            <EmployeesList />
            <Footer />
        </>
    )
}