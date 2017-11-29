import React from 'react';
import './ListCake.css';
import CakeCard from './CakeCard.js';

const ListCake = (props) => {
    return (
        <div className="listCake">
            <CakeCard name={props.name} image={props.image} />
        </div>
    )
}

export default ListCake; 