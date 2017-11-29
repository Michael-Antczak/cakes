import React from 'react';
import './ListCake.css';
import CakeCard from './CakeCard.js';

const ListCake = (props) => {

        const cakes = props.cakes;

        return (
            <div className="listCake">
                <ul id="cakes">
    
                    {cakes
                        .map((cake) => <CakeCard key={cake.id} name={cake.name} image={cake.imageUrl} /> )
                    }
    
                </ul>
            </div>
        )
    
    
}

export default ListCake; 