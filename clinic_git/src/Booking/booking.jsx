import "./booking.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";
import dayjs from 'dayjs';
import { getUsers, getAppointments } from "../redux/selector";
import { appointment } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export const Booking = () => {
  const [appointmentDate, setAppointmentDate] = useState('');

  const dispatch = useDispatch();

  const logginUsers = useSelector(getUsers);
  let usersApplointments = useSelector(getAppointments);

  const logginUserIndex = logginUsers.findIndex(
    (x) => x.data.isLoggin === true
  );

  const currentUser = logginUsers[logginUserIndex]  

  let defaultBookAppointment = dayjs()

  if (usersApplointments != null) {

  const appointmentUserIndex = usersApplointments.findIndex(
    (x) => x.id === currentUser.id
  );


  if (appointmentUserIndex >= 0) {
    defaultBookAppointment = dayjs(usersApplointments[appointmentUserIndex]
    .appointments[usersApplointments[appointmentUserIndex].appointments.length - 1])
  }}

  const bookAppointment = (e) => {
    e.preventDefault();

    if (appointmentDate === '') {
      alert('Выберите дату');
      return;
    }

    if (
      usersApplointments === null ||
      usersApplointments === undefined
    ) {
      usersApplointments = [];
    }

    const currentUserId = logginUsers.filter((logginUser) => {
      return logginUser.data.isLoggin === true ? true : false;
    })[0].id;

    if (usersApplointments.length === 0) {
      usersApplointments.push({
        "id": currentUserId,
        "appointments": [appointmentDate],
      });
    } else {
        const appointmentsUserIndex = usersApplointments.findIndex(
            (x) => x.id === currentUserId
        );

        usersApplointments[appointmentsUserIndex].appointments.push(appointmentDate)
    }

    dispatch(appointment(usersApplointments));

    alert('Вы записаны на прием. Наши специалисты с вами свяжутся');
  };

  return (
    <>
      <div className="booking">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            format="DD - MM - YYYY"
            defaultValue = { defaultBookAppointment }
            onChange={(newAppointmentDate) => {
              setAppointmentDate(newAppointmentDate);
            }}
          />
        </LocalizationProvider>
        <div className="btn-login" onClick={bookAppointment}>
          <p className="btn-login-text">
            <span>Записаться на выбранную дату</span>
          </p>
        </div>
      </div>
    </>
  );
};
