import React, { Component } from 'react'
import WeatherSmall from './WeatherSmall';



//Todo, display all relevant info here, pass the information from apps state via props
//a more detailed display aswell, maybe a container that swaps between them both?? WeatherContainer
export default class WeatherInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            detailedView: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // console.log(this.props.data.location.name)
        const newState = this.detailedView === true ? false : true;
        this.setState({
            detailedView: newState
        })
    }

    render() {
        const detailedView = <div>mycket detaljer</div>
        // const regularView = (<div>
        //     {this.props.data.location.name}
        // </div>)

        return (
            <React.Fragment>
                {/* <button onClick={this.handleClick}>test</button> */}
                {this.state.detailedView === true ? detailedView : <WeatherSmall data={this.props.data} handleClick={this.handleClick} />}
            </React.Fragment>
        )
    }
}
