import React, {useState} from 'react';

import BubblePage from './BubblePage';
import { render } from '@testing-library/react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Login = (props) => {

  const [credentials, setCredentials] = useState({
    username: "Lambda School",
    password: "i<3Lambd4",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  axiosWithAuth()
    .post('api/login ', credentials)
    .then(res => {
      localStorage.setItem( 'token', res.data.payload);
    })

    .catch(error => {
      console.log(error)
    });

    



  return (

    <form  onSubmit={Login}>
      <div >
        <input     type="username"onChange={handleChange}/>
      </div>
      <div >
        <input    type="password" onChange={handleChange}/>
      </div>
      <button type="submit" >Submit </button>
     </form>
  )
}
export default Login;