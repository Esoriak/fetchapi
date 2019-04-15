import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';


  const  sampleEmployee = {
    gender:  'male',
    name: {
        title:  'mr',
        first:  'mathys',
        last:  'aubert'
    },
    location: {
        street:  '9467 rue gasparin',
        city:  'perpignan',
        postcode:  '90208'
    },
    email:  'mathys.aubert@example.com',
    picture: {
        medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
    }
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      employee:  sampleEmployee
    };
  }
  getEmployee() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          employee: data[0],
        });
    });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

        </header>
        <GenerateEmployee selectEmployee={() =>  this.getEmployee()} />
        <DisplayEmployee  employee={this.state.employee}  />
      </div>
    );
  }
}

export default App;
