import lechenie from './assets/lechenie.png';
import implant from './assets/implant.png';
import otbel from './assets/otbel.png';
import pricus from './assets/pricus.png';
import protez from './assets/protez.png';
import rentgen from './assets/rentgen.png';

import './servicesItems.scss';
import { Services } from '../Services/services'

export const ServicesItems = () => {

    let services = [
        {
            "id": 1,
            "img": lechenie,
            "desc": "Лечение"
        },
        {
            "id": 2,
            "img": implant,
            "desc": "Имплантация"
        },
        {
            "id": 3,
            "img": otbel,
            "desc": "Отбеливание зубов"
        },
        {
            "id": 4,
            "img": pricus,
            "desc": "Исправление прикуса"
        },
        {
            "id": 5,
            "img": protez,
            "desc": "Протезирование"
        },
        {
            "id": 6,
            "img": rentgen,
            "desc": "Рентген-диагностика"
        }
    ];

    return (
        <>
        <div className='services'>
            <div className='services-title'>
                <p>Наша клиника оказывает следующие виды услуг</p>
            </div>
            <div className='services-list'>
            {
                services.map(
                    (service) => (
                        <Services key={service.id} data={service}/>
                    )
                )
            }
            </div>
        </div>
        </>
    )
};
