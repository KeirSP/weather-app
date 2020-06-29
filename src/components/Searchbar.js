import React, { Component } from 'react'

class Searchbar extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                <label>
                    City:
                    <input type="text" placeholder="Enter City" name="location" value={this.props.city} onChange={(event) => this.props.changeCity(event.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Searchbar
