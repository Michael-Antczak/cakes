import React from 'react';
import './CakeCard.css'

const CakeCard = (props) => {
    return (
        <div className="cakeCard">
            <div>
                <h2>{props.name}</h2>
            </div>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    )
}

export default CakeCard; 