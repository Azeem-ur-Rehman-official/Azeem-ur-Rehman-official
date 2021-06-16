import React from 'react';
import Axios from 'axios';
const url = 'http://localhost:8000/users/leaderboard';
//will return all data of leaderboard table
const getList = async () => {
  try {
    const { data } = await Axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};
export default getList;
