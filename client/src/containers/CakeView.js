import React from 'react';
import './CakeView.css'

class CakeView extends React.Component  {
    

    render() {

        return (
            <div className="cakeView">
    
                <div className="displayData title">
                    <h2>{this.props.location.state.name}</h2>
                </div>
    
                <div className="displayData">
                    <h4>Comment: </h4>
                    <p>{this.props.location.state.comment}</p>
                </div>
    
                <div className="displayData">
                    <h4>Yum Factor: {this.props.location.state.yumFactor}</h4>
                </div>
    
                <div className="displayData">
                    <img src={this.props.location.state.image} alt={this.props.location.state.name} />
                </div>
            </div>
        )
    }
    
}

export default CakeView; 