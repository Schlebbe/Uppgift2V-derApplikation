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

        return (
            <React.Fragment>
                <button onClick={this.props.handleClick}>Tillbaka</button>
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
            </React.Fragment>
        )
    }
}
