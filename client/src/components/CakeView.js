import React from 'react';
import './CakeView.css'

const CakeCard = (props) => {
    return (
        <div className="cakeView">

            <div className="displayData title">
                <h2>{props.name}</h2>
            </div>

            <div className="displayData">
                <h4>Comment: </h4>
                <p>{props.comment}</p>
            </div>

            <div className="displayData">
                <h4>Yum Factor: {props.yumFactor}</h4>
            </div>

            <div className="displayData">
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    )
}

export default CakeCard; 