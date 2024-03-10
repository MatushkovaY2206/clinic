import React, { useState, useEffect } from 'react';
import { login } from '../redux/actions';
import { getUsers } from '../redux/selector';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../constants/api_link';
import { useNavigate } from 'react-router-dom';

import './login-form.scss';

export const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState(false);
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  let logginUsers = useSelector(getUsers);

  useEffect(() => {
    axios.get(`${BASE_URL}/login`).then(({ data }) => {
      setUsers(data);
    });
  }, [setUsers]);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const result = users.filter((user) => {
      if (username === user.username && password === user.password) {
        return true;
      }

      return false;
    });

    if (result.length !== 0) {
      if (logginUsers === null || logginUsers === undefined) {
        logginUsers = [];
      }

      logginUsers.map((logginUser) => (logginUser.data.isLoggin = false));

      const authenticatedUser = result[0];

      const logginUserIndex = logginUsers.findIndex(
        (x) => x.id === authenticatedUser.id
      );

      if (logginUserIndex >= 0) {
        logginUsers[logginUserIndex].data.isLoggin = true;
      } else {
        authenticatedUser.isLoggin = true;

        logginUsers.push({
          id: authenticatedUser.id,
          data: authenticatedUser,
        });
      }

      dispatch(login(logginUsers));
      navigate('/booking');
    } else {
      setLoginErrorMessage(true);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        {loginErrorMessage ? <p>Неправильный логин или пароль</p> : null}
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
        <button
          className="register"
          onClick={() => {
            alert('Страница находится в разработке');
          }}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
