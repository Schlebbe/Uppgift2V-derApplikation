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
            data: {}
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleClickFavorite = this.handleClickFavorite.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({
                data: this.props.data
            })
        }
        console.log(this.props.data.forecast);
    }

    handleClick() {
        const newState = this.state.detailedView === true ? false : true;
        this.setState({
            detailedView: newState
        })
    }

    handleClickFavorite() {
        document.cookie = `favorite=${this.state.data.location.name}; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
        var x = document.cookie;
        console.log(x);
    }

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-success" onClick={this.handleClickFavorite}>Favorit</button>
                {this.state.detailedView === true ?
                    <WeatherDetailed data={this.state.data} handleClick={this.handleClick} /> :
                    <WeatherSmall data={this.state.data} handleClick={this.handleClick} />
                }
            </React.Fragment>
        )
    }
}
