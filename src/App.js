import React, { Component } from 'react';
import Flag from './Flag';
import CountryPick from './CoutryPick';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      currentCountry: {},
      choices: []
    }
    this.handleChoice = this.handleChoice.bind(this);
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
        var currentCountry = getRandomCountry();
        var choices = [currentCountry, getRandomCountry(), getRandomCountry(), getRandomCountry()];
        function getRandomCountry () {
          return countries[Math.floor(Math.random() * countries.length)]
        }
        this.setState({countries, currentCountry, choices}, () => console.log(this.state));
      });
  }

  handleChoice(e) {
    var clicked = e.target.innerHTML;
    console.log(clicked, this.state.currentCountry);
  }

  render() {
    

    return (
      <div className="App">
        <h1>Guess the flag</h1>
        <Flag flagUrl={this.state.currentCountry ? this.state.currentCountry.flag : ""} />
        {this.state.choices.length > 0 ? <CountryPick choices={this.state.choices} onClick={this.handleChoice}/> : null}
      </div>
    );
  }
}

export default App;
