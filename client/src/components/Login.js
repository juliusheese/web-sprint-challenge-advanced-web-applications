import React, { useState } from 'react';
//import { axiosWithAuth } from '../axiosAuth';
//import BubblePage from "./BubblePage";
import axios from 'axios';
import BubblePage from './BubblePage';
import { render } from '@testing-library/react';

const credentials= { username: 'Lambda School', password: 'i<3Lambd4' }
const Login = () => {


  //preventDefault();

  axios
    .post('http://localhost:5000/api/login ', credentials)
    .then(res => {
      localStorage.setItem('token', res.data)
    })
    .catch(error => {
      console.log(error)
    });

    



  return (
    /** */
    <div>
      <div >
        <input value={credentials.username} onChange={console.log('somethings trying to change the input')}/>
      </div>
      <div >
        <input value={credentials.password} onChange={console.log('somethings trying to change the input')}/>
      </div>
      <button onClick={() => render(<BubblePage></BubblePage>)} >Submit </button>
     </div>
  )
}
export default Login;