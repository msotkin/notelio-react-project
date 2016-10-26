import React, { PropTypes } from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <button onClick= {this.props.makeCard}>New Card</button>
            </div>
        )
    }
}

export default Navbar;