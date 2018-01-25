import React, { Component } from 'react';
import Flag from './Flag';
import CountryPick from './CoutryPick';
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
    var currentCountry;
    var {countries} = this.state;
    var choices = [];
    if (countries && countries.length > 0) {
      currentCountry = getRandomCountry();
      choices.push(currentCountry);
    }
    choices.push(getRandomCountry());
    choices.push(getRandomCountry());
    choices.push(getRandomCountry());

    function getRandomCountry () {
      return countries[Math.floor(Math.random() * countries.length)]
    }

    return (
      <div className="App">
        <h1>Guess the flag</h1>
        <Flag flagUrl={currentCountry ? currentCountry.flag : ""} />
        <CountryPick choices={choices} />
      </div>
    );
  }
}

export default App;
