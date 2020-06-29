import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import WeatherWidget from './components/WeatherWidget'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

changeCity = (city) => {
  this.setState({ city: city})
}

handleSubmit = (data) => {
  console.log(this.state.city)
  data.preventDefault();
}


render() {
  return (
    <div className="weather-container">
    <div>
      <Searchbar
        city = {this.state.city}
        changeCity={this.changeCity}
        onSubmit = {this.handleSubmit}
      />
    </div>
        <WeatherWidget city = {this.state.city} />
    <div>
    </div>
    </div>
  );
}}

export default App;
