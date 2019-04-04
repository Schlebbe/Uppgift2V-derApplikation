import React, { Component } from 'react'

export default class WeatherSmall extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {}
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.data);
        if (this.props.data !== prevProps.data) {
            this.setState({
                data: this.props.data
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                {typeof this.state.data.location === 'undefined' ? "Loading..." :
                    <div>
                        <p>{this.state.data.location.name}</p>
                        <p>Temperatur: {this.state.data.current.temp_c}°</p>
                        <p>Uppdaterad: {this.state.data.current.last_updated}</p>
                        <button onClick={this.props.handleClick}>Visa</button>
                    </div>
                }
            </React.Fragment>
        )
    }
}
