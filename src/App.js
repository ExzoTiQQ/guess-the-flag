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
      choices: [],
      guessMade: false,
      result: false
    }
    this.handleChoice = this.handleChoice.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
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
        this.setState({countries, currentCountry, choices});
      });
  }

  handleChoice(e) {
    var clicked = e.target.innerHTML;
    var result;
    result = clicked === this.state.currentCountry.name;
    this.setState({result, guessMade: true});
  }

  handleContinue() {
    var {countries} = this.state;
    var currentCountry = getRandomCountry();
    var choices = [currentCountry, getRandomCountry(), getRandomCountry(), getRandomCountry()];
    function getRandomCountry () {
      return countries[Math.floor(Math.random() * countries.length)]
    }
    this.setState({currentCountry, choices, guessMade: false});
  }

  render() {
      return (
      <div className="App">
        <h1>Guess the flag</h1>
        {this.state.guessMade === false 
            ? <Flag flagUrl={this.state.currentCountry.flag || ""} /> 
            : this.state.result 
              ? <div><h2>You guessed! {this.state.currentCountry.name}</h2><button onClick={this.handleContinue}>Continue?</button></div>
              : <div><h2>You didn't guess! Correct: {this.state.currentCountry.name}</h2><button onClick={this.handleContinue}>Continue?</button></div>}
        {!this.state.guessMade && this.state.choices.length > 0 ? <CountryPick choices={this.state.choices} onClick={this.handleChoice}/> : null}
      </div>
      );
  }
}

export default App;
