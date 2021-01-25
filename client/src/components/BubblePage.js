import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  axios
  .get('http://localhost:5000/api/colors', JSON.stringify(localStorage.getItem('token'))
  )
  .then(response => console.log(response))
  .then(console.log(JSON.stringify(localStorage.getItem('token'))))
  
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








