import React from 'react';
import './Flag.css';

const Flag = ({flagUrl}) => (
    flagUrl && <img src={flagUrl} alt="Flag"/>
)

export default Flag;