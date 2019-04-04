import React, { Component } from 'react'

export default class WeatherSmall extends Component {
    render() {
        return (
            <React.Fragment>
                {typeof this.props.data.location === 'undefined' ? "Loading..." :
                    <div>
                        <p>{this.props.data.location.name}</p>
                        <p>Temperatur: {this.props.data.current.temp_c}°</p>
                        <p>Uppdaterad: {this.props.data.current.last_updated}</p>
                        <button onClick={this.props.handleClick}>Visa</button>
                    </div>
                }
            </React.Fragment>
        )
    }
}
