import React from 'react';
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="weather-container">
    <div>
      <Searchbar location={this.state.location} changeLocation={this.changeLocation} />
      {/* Search Bar will have a onclick/handlesubmit that will change the location in App - this will then change the background image via the unsplash API
      if i pass down something like a ChangeLocation function from this parent component to the searchbar component it will work
      so within my Searchbar component, now I have passed down the location prop and the changeLocation function, I will be able to access location and change it with changeLocation as below

      within changeLocation(location) we have a this.setState({ location })
      
      <input value={this.props.location} onSubmit(or onChange)={this.props.changeLocation}/>
      
      */}
    </div>
    <div>
      <WeatherWidget />
    </div>
    <div>
      <UnsplashCredit />
    </div>
    </div>
  );
}

export default App;
