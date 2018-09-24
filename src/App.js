import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import People from "./components/People";

import personAPI from './services/personAPI';
import AddPerson from "./components/AddPerson";

let personApi = new personAPI();

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      people: personApi.getAll()
    };
  }

  render = () => {
    return (
      <div className="App">

        <Header title='Seattle Code Camp'/>

        <People people={this.state.people}
                onDeletePerson={this.handleDeletePerson}
        />

        <AddPerson onAddPerson={this.handleAddPerson} />

      </div>
    );
  };

  handleAddPerson = (name) => {

    let person = {
      id: this.getId(),
      name: name
    };

    let people = this.state.people;

    people.push(person);

    this.setState({
      people: people
    });

  };

  handleDeletePerson = (id) => {

    let persons = this.state.people.filter(person => (id !== person.id));

    this.setState({
      people: persons
    });
  };

  getId = () => {

    let currentId = 0;

    for (let i = 0; i < this.state.people.length; i++) {

      if (this.state.people[i].id > currentId)
        currentId = this.state.people[i].id;
    }

    return currentId + 1;
  };

}

export default App;
