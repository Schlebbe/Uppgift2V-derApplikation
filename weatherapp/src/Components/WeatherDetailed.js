import React, { Component } from 'react'

export default class WeatherDetailed extends Component {
    render() {
        let forecasts = this.props.data.forecast.forecastday.map((item) => {
            return (
                <tr key={item.date}>
                    <td>{item.date}</td>
                    <td>{item.day.maxtemp_c}°</td>
                    <td>{item.day.mintemp_c}°</td>
                    <td><img src={item.day.condition.icon} alt=""></img></td>
                </tr>
            )
        })

        let spacing = {
            width: "85%",
            margin: "0 auto",
            paddingLeft: "15%"
        }

        let h2Spacing = {
            paddingLeft: "12%",
            margin: "6px 0 10px 0"
        }

        return (
            <React.Fragment>
                <button onClick={this.props.handleClick} className="btn btn-primary">Tillbaka</button>
                <div style={spacing}>
                    <h2 style={h2Spacing}>{this.props.data.location.name}</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Datum</th>
                                <th>Max temperatur</th>
                                <th>Min temperatur</th>
                                <th>Ikon</th>
                            </tr>
                        </thead>
                        <tbody>
                            {forecasts}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
