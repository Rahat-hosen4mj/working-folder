import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
  const [house, setHouse] = useContext(RingContext);
  const handleHouseIncrease = () =>{
      const newHoueCount = house + 1;
      setHouse(newHoueCount);
  }
    return (
        <div>
            <h2>Anuty</h2>
            <p>House : {house}</p>
            <button onClick={handleHouseIncrease}>buy house</button>
        </div>
    );
};

export default Aunty;