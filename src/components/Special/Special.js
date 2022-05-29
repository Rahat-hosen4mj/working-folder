import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house,setHouse,handleHouseCount] = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p>house : {house}</p>
           <button onClick={() => setHouse(house + 2)}>Buy house</button>
        </div>
    );
};

export default Special;