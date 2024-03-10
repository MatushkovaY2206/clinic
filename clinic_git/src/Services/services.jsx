import './services.scss';

export const Services = ({data}) => {

    const {img, desc} = data;

    return (
        <>
            <div className='service'>
                <div className="image">
                    <img src={img} alt={desc}/>
                </div>
                <p>{desc}</p>
            </div>
        </>
)}
