import React, { useState } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

const Signup = () => {
  const url = 'http://localhost:8000/users/signup';
  const [Data, setData] = useState({
    name: '',
    password: '',
  });
  // check field validation
  const [Valid, setValid] = useState(true);
  // if true then redirect to home page
  const [Log, setLog] = useState(false);
  // pass and username auth
  const [UserExist, setUserExist] = useState(true);

  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...Data, [name]: value });
  };
  function validate() {
    const n = localStorage.getItem('Username').replace(/"/g, '');
    const p = localStorage.getItem('Password').replace(/"/g, '');
    if (Data.name === n) {
      setUserExist(false);
      return false;
    } else {
      localStorage.setItem('Username', JSON.stringify(Data.name));
      localStorage.setItem('Password', JSON.stringify(Data.password));
      setUserExist(true);
    }
    return true;
  }

  const Register = (e) => {
    e.preventDefault();
    if (Data.name === '' || Data.password === '') {
      setValid(false);
      console.log('not true');
    } else {
      Axios.post(url, Data).then((res) => {
        console.log(res.request.response);
      });
      setValid(true);
      let check = validate();
      if (check === true) {
        setLog(true);
      }
    }
  };
  if (Log === true) {
    return <Redirect to="/users/login"></Redirect>;
    setLog(false);
  }
  return (
    <div>
      {Valid === false ? (
        <>
          <p className="sort">Please fill all fields</p>
        </>
      ) : null}
      {UserExist === false ? (
        <>
          <p className="sort">User is already exists</p>
        </>
      ) : null}
      <h1>Registration</h1>
      <form action="" onSubmit={Register}>
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
            Signup
          </button>
          <span class="reg">
            <NavLink to="/users/login">
              <p>Cancel</p>
            </NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
