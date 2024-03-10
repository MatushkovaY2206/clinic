import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/api_link";
import { Employee } from "../Employee/employee";

import "./employeesList.scss";

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/employees`)
      .then(({ data }) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.log(`ERROR: ${error.toJSON()}`);
      });
  }, [setEmployees]);

  return (
    <div className="employees">
      <div className="employees-title">
        <p>Они заботятся о Вашей улыбке</p>
      </div>
      <div className="employees-container">
        {employees.map((empl) => (
          <Employee key={empl.id} empl={empl} />
        ))}
      </div>
    </div>
  );
};

export default EmployeesList;
