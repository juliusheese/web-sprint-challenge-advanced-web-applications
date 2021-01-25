import React, { useState, useEffect, componentDidMount } from "react";

//import {axiosWithAuth} from "../axiosAuth";
import axios from 'axios';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {token} from "./Login"
const credentials = {username: 'Lambda School', password: 'i<3Lambd4'};

const axiosWithAuth = axios.create({
  baseURL: `http://localhost:5000/api/colors`,
  headers: {
    Authorization: `Bearer + ${token}`
  },      
   body: credentials
});

const BubblePage = () => {


  const [colorList, setColorList] = useState([]);
  axiosWithAuth
    .get('http://localhost:5000/api/colors')
    .then(response => console.log(response))
    .then(response => console.log(response))
    .then(response => setColorList(response))
   // .then(console.log(colorList));



  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (

    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
