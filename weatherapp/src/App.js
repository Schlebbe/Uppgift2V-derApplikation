import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import getData, { getDataCoords } from '../src/Api.js';
import SearchBar from './Components/SearchBar';
import WeatherContainer from './Components/WeatherContainer';


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
        let data;
        let select = document.getElementById("favourites");
        let searchInput = document.getElementById("searchInput");

        typeof e.target.searchInput !== "undefined" ? value = e.target.searchInput.value : value = e.target.value;

        if (value !== "Välj favorit") {
            data = await this.fetchData(value);

            if (value !== select.value) {
                select.selectedIndex = 0;
            } else {
                searchInput.value = "";
            }

            this.setState({
                data: data
            });
        }
    }

    render() {
        let spacing = {
            paddingLeft: "10%"
        }

        return (
            <div className="container col-centered text-center">
                <h2 style={spacing}>Weather App</h2>
                <SearchBar handleClick={this.handleClick} />
                <WeatherContainer data={this.state.data} handleChange={this.handleClick} />
            </div>
        );
    }
}

export default App;
