import React, { useState } from 'react';
//import { axiosWithAuth } from '../axiosAuth';
//import BubblePage from "./BubblePage";
import axios from 'axios';
import BubblePage from './BubblePage';
import { render } from '@testing-library/react';

const credentials= { username: 'Lambda School', password: 'i<3Lambd4' }
let token;
const Login = () => {


  //preventDefault();

  axios
    .post('http://localhost:5000/api/login ', credentials)
    .then(res => {
       token = res.data;
      console.log(token);
    })
    .catch(error => {
      console.log(error)
    });

    



  return (
    /** */
    <div>
      <div >
        <input type="username" value={credentials.username} />
      </div>
      <div >
        <input type="password" value={credentials.password} />
      </div>
      <button onClick={() => render(<BubblePage></BubblePage>)} >Submit </button>
     </div>
  )
}
export {token};
export default Login;