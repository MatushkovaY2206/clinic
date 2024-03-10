import React from 'react';
import { getUsers, getAppointments } from "../redux/selector";
import { useSelector } from "react-redux";

import './user-info.scss';

export const UserInfo = () => {
  const logginUsers = useSelector(getUsers);
  const usersApplointments = useSelector(getAppointments);

  let appointments = []

  const logginUserIndex = logginUsers.findIndex(
    (x) => x.data.isLoggin === true
  );

  const currentUser = logginUsers[logginUserIndex]


  if (usersApplointments !== null) {

    const appointmentUserIndex = usersApplointments.findIndex(
      (x) => x.id === currentUser.id
    );
  
    if (appointmentUserIndex >= 0) {
      appointments = usersApplointments[appointmentUserIndex].appointments
    }
  }

  return (
    <>
      <div className='user-info'>
        <h2>Информация о текущем пользователе</h2>
        <p>Имя: {currentUser.data.username}</p>
        {
          appointments.length > 0 ? (
            <>
            <p>Записи на прием:</p>
            <ul> 
              {
                appointments.map(
                  (appointment, index) =>
                    <li key={index}>{appointment.toString()}</li>
                )
              }
            </ul>
            </>
        ): (
          <p>Нет записей</p>
        ) }
      </div>
    </>
  );
};