import React from 'react';
import Brother from '../../components/Brother/Brother';
import Sister from '../../components/Sister/Sister';
import Myself from '../../components/Myself/Myself';


const Father = ({house}) => {
    return (
        <div>
            <h4>Father</h4>
            <p>House : {house}</p>
            <Myself house={house}></Myself>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
        </div>
    );
};

export default Father;