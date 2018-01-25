import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(data => data.json())
      .then(data => {
        var countries = data.map(country => (
          {
            name: country.name,
            flag: country.flag
          }
        ));
        this.setState({countries});
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Guess the flag</h1>
        {/* <Flag flagUrl={}/> */}
        {/* <CountryPick choices={}/> */}
      </div>
    );
  }
}

export default App;
