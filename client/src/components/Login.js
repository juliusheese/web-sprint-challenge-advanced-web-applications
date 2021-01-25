import React, { useState, createContext } from 'react';
//import { axiosWithAuth } from '../axiosAuth';
//import BubblePage from "./BubblePage";
import axios from 'axios';


const AuthContext = React.createContext();
export let token = '';
const credentials= { username: 'Lambda School', password: 'i<3Lambd4' }

const Login = () => {

  //preventDefault();

  axios
    .post('http://localhost:5000/api/login ', credentials)
    .then(res => {
      console.log(res);
      token = res.data;
      console.log(res.data);
    })
    .catch(error => {
      console.log(error)
    })






  return (
    /** */
    <form>
      <div >
        <input type="username" value={credentials.username} />
      </div>
      <div >
        <input type="password" value={credentials.password} />
      </div>
      <button type="submit" >Submit </button>
    </form>
  )
}

export default Login;