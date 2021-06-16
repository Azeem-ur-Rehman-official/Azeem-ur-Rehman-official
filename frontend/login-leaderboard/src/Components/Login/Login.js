import React, { useState } from 'react';
import Axios from 'axios';
import '../css/form.css';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

const Login = () => {
  const url = 'http://localhost:8000/users/login';
  const [Data, setData] = useState({
    name: '',
    password: '',
  });
  // check field validation
  const [Valid, setValid] = useState(true);
  // if true then redirect to home page
  const [Log, setLog] = useState(false);
  // pass and username auth
  const [Err, setErr] = useState(true);

  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...Data, [name]: value });
  };

  function validate() {
    const n = localStorage.getItem('Username').replace(/"/g, '');
    const p = localStorage.getItem('Password').replace(/"/g, '');
    if (Data.name !== n || Data.password !== p) {
      setErr(false);
      return false;
    } else {
      setErr(true);
    }
    return true;
  }

  const Login = (e) => {
    e.preventDefault();
    if (Data.name === '' || Data.password === '') {
      setValid(false);
      console.log('not true');
    } else {
      Axios.post(url, Data).then((res) => {
        console.log(res.request.response);
      });
      let check = validate();
      setValid(true);
      if (check === true) {
        setLog(true);
      }
    }
  };
  if (Log === true) {
    return <Redirect to="/users/leaderboard"></Redirect>;
    setLog(false);
  }
  return (
    <div className="login">
      {Valid === false ? (
        <>
          <p className="sort">Please fill out all fields</p>
        </>
      ) : null}
      {Err === false ? (
        <>
          <p className="sort">Username or Password is incorrect</p>
        </>
      ) : null}
      <h1>Login</h1>
      <form action="" onSubmit={Login}>
        <label for="name">
          <b>Username</b>
        </label>
        <input
          value={Data.name}
          onChange={handler}
          type="txt"
          id="name"
          name="name"
          placeholder="User name"
        />
        <label for="password">
          <b>Username</b>
        </label>
        <input
          value={Data.password}
          onChange={handler}
          type="password"
          id="password"
          name="password"
          placeholder="User name"
        />
        <div class="container">
          <button type="submit" className="cancelbtn">
            Login
          </button>
          <span class="reg">
            <NavLink to="/users/signup">
              <p>Signup</p>
            </NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
