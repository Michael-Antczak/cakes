import React from 'react';
import firebase from '../config/firebase.js';
import './ListCake.css';
import CakeCard from './CakeCard.js';

class ListCake extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          cakes: [], 
          searchTerm: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        
            // Get a reference to the database service
            const database = firebase.database();
        
            /****************************
              fetch cakes from Firebase
            *****************************/
            const cakes = database.ref('cakes');
        
            // this sets an event on change in Firebase, so 
            // will be updated automagically when there is 
            // an update in Firebase
            cakes.on('value', (snapshot) => {
        
              // convert Firebase object into an Array and add to state
              const allCakes = snapshot.val();
              // console.log(allCakes);
              let newState = [];
        
              for(let cake in allCakes) {
                newState.push({
                  id: cake,
                  name: allCakes[cake].name,
                  imageUrl: allCakes[cake].imageUrl,
                  comment: allCakes[cake].comment,
                  yumFactor: allCakes[cake].yumFactor,
                });
              }
         
              this.setState({
                cakes: newState
              });
            });
        
    
    }  // end of componentDidMount

    handleChange(e) {
        this.setState({
            searchTerm: e.target.value,
        })
    }

    render() {

        const cakes = this.state.cakes;

        return (
            <div>
                <div className="search">
                    <input type="text" onChange={this.handleChange} placeholder="Search for cake..." value={this.state.searchTerm} />
                </div>
                <div className="listCake">
                    <ul id="cakes">
        
                        {cakes
                            .filter((cake) => cake.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
                            .map((cake) => <CakeCard key={cake.id} name={cake.name} image={cake.imageUrl} id={cake.id} comment={cake.comment} yumFactor={cake.yumFactor} /> )
                        }
        
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListCake; 