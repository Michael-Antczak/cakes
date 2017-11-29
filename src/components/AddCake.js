import React from 'react';
import './AddCake.css';

class AddCake extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            comment: '',
            image: '',
            yumFactor: '',
            errors: '',
        }

        this._onChange = this._onChange.bind(this);
        this._onChangeYumFactor = this._onChangeYumFactor.bind(this);
    }

    _onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    _onChangeYumFactor(e) {

        // We are just handling all possible input errors here
        
        if(isNaN(e.target.value)) {             // value is not a Number
            this.setState({
                errors: "Hey, the yum factor needs to be a number!"
            })
        } else if(e.target.value === '') {      // clear error messages
            this.setState({
                errors: '',
            })
        } else if(e.target.value < 1) {         // yumFactor < 1
            this.setState({
                errors: "Nice try, but yum factor needs to be greater or equal to 1!"
            })
        } else if(e.target.value > 5) {         // yumFactor > 5
            this.setState({ 
                errors: "Well, yum factor needs to be smaller or equal to 5!"
            })
        } else if(!Number.isInteger(Number(e.target.value))) { // yumFactor not an Integer
            this.setState({
                errors: "We need an Integer!"
            })
        } 

        this.setState({
            [e.target.name]: e.target.value,
        })

        // clear error message after 3 sec
        setTimeout(() => {
            this.setState({
                errors: '',
                yumFactor: '',
            })
        }, 3000);
        
    }

    render() {

        return (

            <div className="addCake">
                <div>
                    <label>Name: </label>
                    <input 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this._onChange} 
                        placeholder="Name of the cake..." 
                    />
                </div>
                <div>
                    <label>Comment: </label>
                    <input 
                        type="text" 
                        name="comment" 
                        value={this.state.comment} 
                        onChange={this._onChange} 
                        placeholder="Any comments..." 
                    />
                </div>
                <div>
                    <label>Image: </label>
                    <input 
                        type="text" 
                        name="image" 
                        value={this.state.image} 
                        onChange={this._onChange} 
                        placeholder="Link to image..." 
                        />
                </div>
                <div>
                    <label>Yum Factor: </label>
                    <input 
                        type="text" 
                        name="yumFactor" 
                        value={this.state.yumFactor} 
                        onChange={this._onChangeYumFactor} 
                        placeholder="Yum Factor from 1 to 5..."
                    />
                </div>
                <div className="errorMessages">{this.state.errors}</div>
                <div>
                    <button>Add cake</button>
                </div>
            </div>

        )
    }
}

export default AddCake;