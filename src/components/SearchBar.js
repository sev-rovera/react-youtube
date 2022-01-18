import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = { term: '' }

    handleInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

    handleFormSubmit = (event) => {
        // We make sure the browser doesn't automatically attempt to submit the form anytime the user actually submits it
        event.preventDefault();

        // We tell the parent component (App) what the current search term is and trigger the call-back it contains (handleFormSubmit)
        this.props.handleFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.handleFormSubmit}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={this.handleInputChange}
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}
