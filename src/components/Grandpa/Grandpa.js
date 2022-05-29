import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext("diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "diamond ring";
  const handleHouseCount = () => {
    const newHouse = house + 1;
    setHouse(newHouse);
  };
  return (
    <RingContext.Provider value={[house, setHouse, handleHouseCount]}>
      <div className="grandpa">
        <h3>Grandpa</h3>
        <button onClick={handleHouseCount}>Buy house</button>
        <h4>House : {house}</h4>
        <div style={{ display: "flex" }}>
          <Father house={house} ornament={ornament}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
