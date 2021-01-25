import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth';

const Login = (props) => {
 const [credentials, setCredentials] = useState({username: 'Lambda School', password: 'i<3Lambd4'});

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/');
      })
      
  }



    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;