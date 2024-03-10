import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from '../pages/main-page/MainPage';
import { ServicesPage } from '../pages/services-page/ServicesPage';
import { EmployeesPage } from '../pages/employees-page/EmployeesPage';
import { ContactPage } from '../pages/contact-page/ContactPage';
import { LoginPage } from '../pages/login-page/LoginPage';
import { BookingPage } from '../pages/booking-page/BookingPage';
import { UserInfoPage } from '../pages/user-info-page/UserInfoPage';

import './app.scss';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/service' element={<ServicesPage />} />
                <Route path='/employees-list' element={<EmployeesPage />} />
                <Route path='/contacts' element={<ContactPage />} />
                <Route path='/booking' element={<BookingPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/profile' element={<UserInfoPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
