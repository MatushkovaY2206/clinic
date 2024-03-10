import './employee.scss';

export const Employee = ({ empl }) => {
    return (
        <>
            <div className='employee'>
                <img src={`${process.env.PUBLIC_URL}/photos/${empl.photo}`} alt='' />
                <div className='employee-name'>
                    <p>{empl.firstName}</p>
                    <p>{empl.middleName}</p>
                    <p>{empl.lastName}</p>
                </div>
                <p>{empl.position}</p>
            </div>
        </>
    )
}