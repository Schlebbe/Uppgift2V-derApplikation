import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <React.Fragment>
                <p>Sök:</p>
                <form onSubmit={this.props.handleClick}>
                    <input id="searchInput" placeholder=""></input>
                    <button id="searchButton">Sök</button>
                </form>
            </React.Fragment>
        )
    }
}
