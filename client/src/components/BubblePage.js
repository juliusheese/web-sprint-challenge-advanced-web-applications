import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const token = localStorage.getItem('token');
  axios
  .get('http://localhost:5000/api/colors', token.payload
  )
  .then(response => console.log(response))
  .then((console.log(token.payload)))
  
  .catch(error => {
    console.log(error)
  })

  
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








