import React, { Component } from 'react'
import WeatherSmall from './WeatherSmall';
import WeatherDetailed from './WeatherDetailed';

export default class WeatherContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            detailedView: false,
            data: {},
            favouriteList: []
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleClickFavourite = this.handleClickFavourite.bind(this);
        this.getFavourites = this.getFavourites.bind(this);
        this.setFavourites = this.setFavourites.bind(this);
    }

    componentDidMount() {
        this.getFavourites();
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({
                data: this.props.data
            })
        }
    }

    getFavourites = () => {
        let favouritelist = JSON.parse(localStorage.getItem("favouriteList"));
        if (favouritelist) {
            this.setState({
                favouriteList: favouritelist
            })
        }
    }

    setFavourites = () => {
        const favouriteList = this.state.favouriteList.slice();
        localStorage.setItem("favouriteList", JSON.stringify(favouriteList));
    }

    handleClickFavourite() {
        if (typeof this.props.data.error === "undefined") {
            this.getFavourites()
            let newList = this.state.favouriteList.slice();

            if (newList.indexOf(this.state.data.location.name) === -1) {
                newList.push(this.state.data.location.name)
                this.setState({
                    favouriteList: newList
                }, () => this.setFavourites()
                )
            }
        }
    }

    handleClick() {
        const newState = this.state.detailedView === true ? false : true;
        this.setState({
            detailedView: newState
        })
    }

    render() {
        let favourites;
        if (this.state.favouriteList) {
            favourites = this.state.favouriteList.map((item) => {
                return <option key={item} value={item}>{item}</option>
            })
        }

        return (
            <div>
                <select onChange={this.props.handleChange} className="browser-default custom-select col-sm-3">
                    {favourites}
                </select>
                <button className="btn btn-success" onClick={this.handleClickFavourite}>Favorit</button>
                {this.state.detailedView === true ?
                    <WeatherDetailed data={this.state.data} handleClick={this.handleClick} /> :
                    <WeatherSmall data={this.state.data} handleClick={this.handleClick} />
                }
            </div>
        )
    }
}
