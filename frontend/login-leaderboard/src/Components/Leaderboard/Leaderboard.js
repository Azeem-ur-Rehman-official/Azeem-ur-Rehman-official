import React, { useState, useEffect } from 'react';
import BtnComponent from './BtnComponent';
import getList from '../API/ListApi';
import Welcome from './Welcome';
import '../css/leaderboard.css';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';

const Leaderboard = ({ authorized }) => {
  const [Text, setText] = useState('Click on Buttons to Sort Data');
  const [ListData, setListData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getList();
        setListData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  const rankBtn = () => {
    setText('Data is Sorted According to Rank');
    ListData.sort((a, b) => {
      return a.rank - b.rank;
    });

    const n = localStorage.getItem('Username').replace(/"/g, '');
    const p = localStorage.getItem('Password').replace(/"/g, '');
    console.log(n + ' : ' + p);
  };

  const ageBtn = () => {
    setText('Data is Sorted According to Age');
    ListData.sort((a, b) => {
      return a.age - b.age;
    });
  };
  const nameBtn = () => {
    setText('Data is Sorted According to Name');
    ListData.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
  };
  const pointsBtn = () => {
    setText('Data is Sorted According to Points');
    ListData.sort((a, b) => {
      return a.point - b.point;
    });
  };
  //user can,t access leaderboard page / home page if he is not authorized or not login
  if (!authorized) {
    return <Redirect to="/users/login"></Redirect>;
  }
  return (
    <div className="mainBoard">
      <h1 className="leader">Ｌｅａｄｅｒｂｏａｒｄ</h1>
      <NavLink to="/users/login">
        <h3 className="logout">Logout</h3>
      </NavLink>
      <Welcome />
      <div className="btns">
        <BtnComponent
          rankBtn={rankBtn}
          ageBtn={ageBtn}
          nameBtn={nameBtn}
          pointsBtn={pointsBtn}
        />
      </div>
      <p className="sort">{Text}</p>
      <div className="contents">
        {ListData !== null ? (
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Points</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {ListData.map((val) => {
                return (
                  <tr>
                    <td>{val.rank}</td>
                    <td>{val.point}</td>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>no data</p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
