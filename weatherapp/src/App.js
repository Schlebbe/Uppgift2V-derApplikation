import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import getData from '../src/Api.js';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';

async function fetchData(test) {
    let data = await getData(test);
    return data;
}
// fetchData();
// getData(59.33, 18);

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() { //Sätt state data för stockholm (eller för geolocation)
        this.handleClick(null, "stockholm")
    }

    async handleClick(e, location) {
        let data;

        if (typeof location !== "undefined") {
            data = await fetchData(location);
        } else {
            e.preventDefault();
            data = await fetchData(e.target.searchInput.value);
        }

        this.setState({
            data: data
        });
    }

    render() {
        return (
            <React.Fragment>
                <SearchBar handleClick={this.handleClick} />
                <WeatherInfo data={this.state.data} />
            </React.Fragment>
        );
    }
}

export default App;
