import React, { Component } from 'react'

class WeatherWidget extends Component {
    constructor(props) {
    super(props);
    this.state = {
        apiData: [],
        isLoaded: false
    }}

    WeatherAPICall = () => {
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=';
        let cityName = this.props.city;
        let apiKey = "&appid=4f1efeac8e3f88f4a276eb108f198625"
        let callURI = url + cityName + apiKey
        console.log(callURI)
        return fetch(callURI)
            .then(response => response.json())
            .then((data) => {
            this.setState({apiData: data})
            this.setState({isLoaded: true})
            console.log(this.state.apiData.main.temp)
        })
            .catch(error => console.log(error))

    }

    componentDidMount() {
        this.WeatherAPICall();
    }

    render() {
        return (
            this.state.isLoaded ? (
            <div>
            <div>
                The weather in {this.props.city}
            </div>
            <div>
                <div>
                {this.state.apiData.main.temp}
                </div>
            </div>
            </div>
            )
            :
            (
            <div>Loading...</div>
            )
            )
    }
}

export default WeatherWidget
