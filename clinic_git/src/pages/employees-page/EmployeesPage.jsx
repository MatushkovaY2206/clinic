import { Header } from '../../Header/header';
import { Footer } from '../../Footer/footer';

import './employees-page.scss';
import EmployeesList from '../../EmployeesList/employeesList';

export const EmployeesPage = () => {

    document.body.style.overflow = "scroll";

    return (
        <>
            <Header />
            <EmployeesList />
            <Footer />
        </>
    )
}