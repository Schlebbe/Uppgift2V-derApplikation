import React, { Component } from 'react'

export default class WeatherDetailed extends Component {
    render() {
        console.log(this.props.data.forecast.forecastday[0].day.date);
        let forecasts = this.props.data.forecast.forecastday.map((item) => {
            return (
                <tr key={item.date}>
                    <td>{item.day.maxtemp_c}°</td>
                    <td>{item.day.mintemp_c}°</td>
                    <td>{item.date}</td>
                    <td><img src={item.day.condition.icon} alt=""></img></td>
                </tr>
            )
        })

        return (
            <React.Fragment>
                <button onClick={this.props.handleClick}>Tillbaka</button>
                <table>
                    <thead>
                        <tr>
                            <th>Max temperatur</th>
                            <th>Min temperatur</th>
                            <th>Datum</th>
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
