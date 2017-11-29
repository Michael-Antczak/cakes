import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './config/firebase.js';
import Header from './components/Header.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cakes: [], 
    }
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
          console.log(allCakes);
          let newState = [];
    
          for(let cake in allCakes) {
            newState.push({
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

  render() {
    return (
      <div className="App">
        <Header className="header" />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
