import { YMaps, Map } from '@pbe/react-yandex-maps';
import './contacts.scss';

export const Contacts = () => {
    return (
        <>
            <div className='contacts'>
                <div className='contacts-title'>Контакты</div>
                <div className='contacts-container'>
                    <div className='contacts-container-left'>
                        <div className='address'>
                            <h3>Адрес:</h3>
                            <p>OOO "ДЕНТ"</p>
                            <p>г.Минск, пр.Машерова, 30-4</p>
                        </div>
                        <div className='work-time'>
                            <h3>Рабочее время:</h3>
                            <p>Пн-Вс 9:00-20:00</p>
                        </div>
                        <div className='telephone'>
                            <h3>Телефон:</h3>
                            <p>+375 (44) 733-99-11</p>
                        </div>
                    </div>
                    <YMaps>
                        <Map state={{ center: [52.43, 31.01], zoom: 13 }} width="100%" />
                    </YMaps>
                </div>
            </div>
        </>
    )
}