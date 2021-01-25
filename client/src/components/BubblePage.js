import React, { useState, useEffect, componentDidMount } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  class Colorz extends React.Component {
    componentDidMount() {
      axios
        .get('http://localhost:5000/api/colors')
        .then(response => response.json())
        .then(data => setColorList({ data }));
      console.log(colorList);
    }
  }

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
