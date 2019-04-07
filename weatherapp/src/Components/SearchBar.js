import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleClick}>
                <div className="active-pink-4 mb-4 row float-right">
                    <div className="form-group col-xs-6">
                        <input className="form-control" type="text" placeholder="Sök" aria-label="Sök" id="searchInput"></input>
                    </div>
                    <div className="form-group col-xs-6">
                        <button className="btn btn-primary" id="searchButton">Sök</button>
                    </div>
                </div>
            </form>
        )
    }
}
