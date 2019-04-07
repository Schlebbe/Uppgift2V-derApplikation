import React, { Component } from 'react'

export default class WeatherSmall extends Component {
    render() {

        let weatherStyle = {
            border: '1px solid lightgrey',
            borderRadius: '0.5rem',
            margin: '0 auto',
            minWidth: '300px',
            maxWidth: '30%'
        }

        let innerWeatherStyle = {
            padding: '1.5rem 2rem',
        }

        let spacing = {
            paddingLeft: "10%"
        }

        let error = {
            color: "red",
            textAlign: "center"
            
        }

        return (
            <React.Fragment>
                {typeof this.props.data.location === 'undefined' ? typeof this.props.data.error !== "undefined" ? <p style={error}>Bad data, make sure you spelled correctly.</p> : "loading" :
                    <div style={spacing}>
                        <div className="mt-4" style={weatherStyle}>
                            <div style={innerWeatherStyle}>
                                <div style={{ marginBottom: '1rem', borderBottom: '1px solid lightgrey' }}>
                                    <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>{this.props.data.location.name}</h3>
                                </div>
                                <p>Temperatur: {this.props.data.current.temp_c}°</p>
                                <p>Uppdaterad: {this.props.data.current.last_updated}</p>
                                <button onClick={this.props.handleClick} className="btn btn-primary" >Visa</button>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}
