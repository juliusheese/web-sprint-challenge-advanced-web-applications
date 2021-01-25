import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuth';
import BubblePage from "./BubblePage";


const Login = () => {
 const [credentials, setCredentials] = useState({username: 'Lambda School', password: 'i<3Lambd4'});
    //preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/login ', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
      })
      .catch(error => {
        console.log(error)
      })
      
      
  



    return (

<BubblePage></BubblePage>
    )
}

export default Login;