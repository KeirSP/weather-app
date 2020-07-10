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

  var backgroundImgSrc;
  if (this.state.widgetLoad) {
    const url = "https://source.unsplash.com/1600x900/?"
    const location = this.props.city;
    backgroundImgSrc = url + location;
    
  } else {
    backgroundImgSrc = 
    "https://source.unsplash.com/1600x900/?weather"
  }

  return (
    <div >
    <div className="weather-container">
      <Searchbar
        city = {this.state.city}
        changeCity={this.changeCity}
        onSubmit = {this.handleSubmit}
      />
    <div>
    {widget}
    </div>
    </div>
    </div>
  );
}}

export default App;
