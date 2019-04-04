import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <p>Sök:</p>
                <form onSubmit={this.props.handleClick}>
                    <input id="searchInput" placeholder="1"></input>
                    <button id="searchButton">Sök</button>
                </form>
            </React.Fragment>
        )
    }
}
