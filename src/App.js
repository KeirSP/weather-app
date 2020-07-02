import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import WeatherWidget from './components/WeatherWidget'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      widgetLoad: false
    }
  }

changeCity = (city) => {
  this.setState({ city: city})
}

handleSubmit = (data) => {
  console.log(this.state.city)
  this.setState({widgetLoad: true});
  data.preventDefault();
}

render() {
  var widget;
  if (this.state.widgetLoad) {
    widget = 
        <WeatherWidget city = {this.state.city} />
  } else {
    widget =
    <div> Loading ... </div>
  }

  return (
    <div className="weather-container">
    <div>
      <Searchbar
        city = {this.state.city}
        changeCity={this.changeCity}
        onSubmit = {this.handleSubmit}
      />
    </div>
      {widget}
    <div>
    </div>
    </div>
  );
}}

export default App;
