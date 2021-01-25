import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  let loginToken = localStorage.getItem('token')
  const [colorList, setColorList] = useState([]);
  axios
    .get('http://localhost:5000/api/colors', loginToken)
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
