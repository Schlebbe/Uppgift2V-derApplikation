import React, { Component } from 'react'
import WeatherSmall from './WeatherSmall';
import WeatherDetailed from './WeatherDetailed';

//Todo, display all relevant info here, pass the information from apps state via props
//a more detailed display aswell, maybe a container that swaps between them both?? WeatherContainer
export default class WeatherContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            detailedView: false,
            data: {},
            favoriteList: []
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleClickFavorite = this.handleClickFavorite.bind(this);
        this.getFavorites = this.getFavorites.bind(this);
        this.setFavorites = this.setFavorites.bind(this);
    }

    componentDidMount() {
        this.getFavorites();
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({
                data: this.props.data
            })
        }
    }

    getFavorites = () => {
        let favoritelist = JSON.parse(localStorage.getItem("favoriteList"));
        if (favoritelist) {
            this.setState({
                favoriteList: favoritelist
            })
        }
    }

    setFavorites = () => {
        const favoriteList = this.state.favoriteList.slice();
        localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
    }

    handleClickFavorite() {
        this.getFavorites()
        let newList = this.state.favoriteList.slice();

        if (newList.indexOf(this.state.data.location.name) === -1) {
            newList.push(this.state.data.location.name)
            this.setState({
                favoriteList: newList
            }, () => this.setFavorites()
            )
        }
    }

    handleClick() {
        const newState = this.state.detailedView === true ? false : true;
        this.setState({
            detailedView: newState
        })
    }
    
    render() {
        let favorites;
        if (this.state.favoriteList) {
            favorites = this.state.favoriteList.map((item) => {
                return <option key={item} value={item}>{item}</option>
            })
        }

        return (
            <React.Fragment>
                <button className="btn btn-success" onClick={this.handleClickFavorite}>Favorit</button>
                <select onChange={this.props.handleChange}>
                    {favorites}
                </select>
                {this.state.detailedView === true ?
                    <WeatherDetailed data={this.state.data} handleClick={this.handleClick} /> :
                    <WeatherSmall data={this.state.data} handleClick={this.handleClick} />
                }
            </React.Fragment>
        )
    }
}
