import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import getData, { getDataCoords } from '../src/Api.js';
import SearchBar from './SearchBar';
import WeatherContainer from './WeatherContainer';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    async fetchData(test) {
        let data = await getData(test);
        return data;
    }

    async fetchDataCoords(lat, long) {
        let data = await getDataCoords(lat, long);

        this.setState({
            data: data
        })

        return data;
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.fetchDataCoords(position.coords.latitude, position.coords.longitude)
            });
        }
    }

    async handleClick(e) {
        e.preventDefault();
        let value;
        typeof e.target.searchInput !== "undefined" ? value = e.target.searchInput.value : value = e.target.value; 
        let data = await this.fetchData(value);

        this.setState({
            data: data
        });
    }

    render() {
        return (
            <React.Fragment>
                <SearchBar handleClick={this.handleClick} />
                <WeatherContainer data={this.state.data} handleChange={this.handleClick} />
            </React.Fragment>
        );
    }
}

export default App;
