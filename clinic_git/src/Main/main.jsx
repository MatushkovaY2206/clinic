import doc from './assets/doc.png';

import './main.scss';

export const Main = () => {

    return (
        <>
            <div className='main'>
                <div className='main-container'>
                    <div className='main-title'>
                        <p>С заботой о Вашей улыбке</p>
                    </div>
                    <div className='img-mobile'>
                        <img src={doc} alt='' />
                    </div>
                    <div className='main-text'>
                        <p>Стоматологический центр предоставляет качественную диагностику и лечение зубов. Мы обеспечим Вам полный комплекс стоматологических услуг по доступным ценам.</p>
                    </div>
                </div>
                <div className='img-desktop'>
                    <img src={doc} alt='' />
                </div>
            </div>
        </>
    )
}