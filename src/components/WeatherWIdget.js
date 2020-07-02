import React, { Component } from 'react'

class WeatherWidget extends Component {
    constructor(props) {
    super(props);
    this.state = {
        
    }}

    WeatherAPICall = () => {
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=';
        let cityName = this.props.city;
        let apiKey = "&appid=4f1efeac8e3f88f4a276eb108f198625"
        let callURI = url + cityName + apiKey
        console.log(callURI)
        return fetch(callURI)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))

    }

    componentDidMount() {
        this.WeatherAPICall();
    }

    render() {
        return (
            <div>
                {this.props.city}
            </div>
            )
    }
}

export default WeatherWidget
