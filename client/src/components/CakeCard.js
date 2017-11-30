import React from 'react';
import './CakeCard.css';
import { Link } from 'react-router-dom';

const CakeCard = (props) => {
    return (
        <Link 
            to={{
                pathname: `/cake/${props.id}`,
                state: {
                    name: props.name,
                    comment: props.comment,
                    image: props.image,
                    yumFactor: props.yumFactor,
                }
            }} 
         >
                <div className="cakeCard">
                    <div>
                        <h2>{props.name}</h2>
                    </div>
                    <div>
                        <img src={props.image} alt={props.name} />
                    </div>
                </div>
        </Link>
    )
}

export default CakeCard; 