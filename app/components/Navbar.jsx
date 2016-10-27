import React, { PropTypes } from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <div className="nav">
                <p>notelio.</p>
                </div>
                <div className="nav">
                <button onClick= {this.props.makeCard}>new card.</button>
                </div>
                <div className="nav">
                <button onClick= {this.props.deleteCard}>delete.</button>
                </div>
            </div>
        )
    }
}

export default Navbar;