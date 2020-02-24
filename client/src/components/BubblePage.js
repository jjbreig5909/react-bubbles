import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [didColorsChange, setDidColorsChange]=useState(colorList);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(()=>{
    getData();
  },[didColorsChange])

  const getData = () => {
    axiosWithAuth()
      .get("/colors")
      .then(res => {
        console.log(res);
        setColorList(res.data)

      })
  }
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} colorChange={setDidColorsChange}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
