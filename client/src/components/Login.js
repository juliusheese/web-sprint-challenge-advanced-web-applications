import React from 'react';
//import { axiosWithAuth } from '../axiosAuth';
//import BubblePage from "./BubblePage";
import BubblePage from './BubblePage';
import { render } from '@testing-library/react';
import { axiosWithAuth } from '../axiosWithAuth';


const Login = (props) => {

  const [credentials, setCredentials] = useState({
    username: "Lambda School",
    password: "i<3Lambd4",
  });
  //preventDefault();

  axiosWithAuth
    .post('api/login ', credentials)
    .then(res => {
      localStorage.setItem( 'token', res.data.payload);
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