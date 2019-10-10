import React, { Component } from 'react';
import './App.css';

import FilterForm from './components/FilterForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogData: [],
    }
  }

  componentDidMount() {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then(response => response.json())
      .then(dogData => this.setState({ dogData, }));
  }

  render() {

    return (
      <div className="app">
        {/* pass props to filter form */ }
        <FilterForm filterDogs={this.filterDogs} dogData={this.state.dogData} />
      </div>
    );
  }
}

export default App;
