import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import { getUsers } from '../redux/selector';
import { Link, useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import logo from './assets/logo.png';

import './header.scss';


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleMenu = () => {
        setIsOpen(!isOpen);

        if (isOpen) {
            document.body.style.overflow = "scroll";
        } else {
            document.body.style.overflow = "hidden";
        }
    };

    const logginUsers = useSelector(getUsers);

    const userLogout = (e) => {
        e.preventDefault();
        logOut(logginUsers)
        dispatch(logout(logginUsers));
        navigate('/')
    }

    const logOut = (logginUsers) => {
        logginUsers.map(
            (logginUser) => logginUser.data.isLoggin = false
        )
    }  

    const redirectToBooking = (e) => {
        e.preventDefault()
        navigate('/booking')
    }

    const redirectToLogin = (e) => {
        e.preventDefault()
        navigate('/login')
    }

    const checkLoggin = (logginUsers) => {

        if (logginUsers === null 
            || logginUsers === undefined 
            || logginUsers.length === 0) {
            return false
        }

        const result = logginUsers.filter((logginUser) => {
            return (logginUser.data.isLoggin === true) ? true : false
        })

        return (result.length > 0) ? true : false;
    }

    return (
        <>
            <div className='header'>
                <div className='logo'><img src={logo} alt='' /></div>
                <div className='header-container'>
                    <div className='header-contacts-time'>
                        <p>г.Минск, пр.Машерова, 30-4</p>
                        <p>Пн-Вс 9:00-20:00</p>
                        <p>+375 (44) 733-99-11</p>
                    </div>

                    {
                        <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
                            {
                                <ul className='header-nav-list'>
                                    <li className='header-nav-item'><Link to='/'>главная</Link></li>
                                    <li className='header-nav-item'><Link to='/service'>услуги</Link></li>
                                    <li className='header-nav-item'><Link to='/employees-list'>специалисты</Link></li>
                                    <li className='header-nav-item'><Link to='/contacts'>контакты</Link></li>
                                </ul>
                            }
                        </nav>
                    }
                </div>
                {checkLoggin(logginUsers) ? (
                    <>
                        <div className='btn-login' onClick={redirectToBooking}>
                            <Link to='/booking' className='btn-login-text'>Записаться</Link>
                        </div>
                        <div className='profile'>
                            <Link to="/profile"><AccountBoxIcon color="action" sx={{ fontSize: 40 }} /></Link>
                            <p onClick={userLogout}>Выйти</p>
                        </div>
                    </>
                ) : (
                    <div className='btn-login' onClick={redirectToLogin}>
                        <Link className='btn-login-text' to='/login'>Записаться</Link>
                    </div>
                )}
                <button className='btn-burger-menu' onClick={toggleMenu}> {isOpen ? '✕' : '☰'} </button>
            </div>
        </>
    )
}
