import React, { Component, Suspense } from 'react';
import Searchbar from './components/Searchbar';
import './App.css';

const WeatherWidget = React.lazy(() => import('./components/WeatherWidget'));

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
      <Suspense fallback = {<div>Loading...</div>}>
        <WeatherWidget city = {this.state.city} />
      </Suspense>
    <div>
    </div>
    </div>
  );
}}

export default App;
