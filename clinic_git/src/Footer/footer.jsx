import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

import './footer.scss';

export const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-container'>
                    <div className='first'>
                        <p>OOO "ДЕНТ"</p>
                        <p>г.Минск, пр.Машерова, 30-4</p>
                        <p>УНП: 191433585</p>
                        <p>Электронная почта: dent@mail.ru</p>
                    </div>
                    <div className='second'>
                        <div className='second-icon'>
                            <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'>
                                <InstagramIcon color="action" sx={{ fontSize: 50 }} />
                            </a>
                        </div>
                        <div className='second-icon'>
                            <a href="https://web.telegram.org/" target='_blank' rel='noreferrer'>
                                <TelegramIcon color="action" sx={{ fontSize: 50 }} />
                            </a>
                        </div>
                        <div className='second-icon'>
                            <a href="https://mail.ru/" target='_blank' rel='noreferrer'>
                                <EmailIcon color="action" sx={{ fontSize: 50 }} />
                            </a>
                        </div>
                    </div>
                    <div className='third'>
                        <div className='third-title'>
                            <p>Запишитесь на консультацию</p>
                        </div>
                        <div className='third-text'>
                            <p>+375 (44) 733-99-11</p>
                            <p>Пн-Вс 9:00-20:00</p>
                            <p>Наш администратор свяжется с Вами</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}