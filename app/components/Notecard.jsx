import React, { PropTypes } from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import interact from 'interact.js';

class Notecard extends Component {

    componentDidMount() {
        let gridTarget = interact.createSnapGrid({
            x: 0, 
            y: 300, 
            range: 50
        });
        interact(ReactDOM.findDOMNode(this))
            .draggable({
                onmove: this.props.onMove,
                snap: {
                    targets: [gridTarget],
                    endOnly: true
                }
            });
    }

    render() {
        return (
            <textarea className="notecard" maxLength="200" style={this.style()} ></textarea>
        )
    }

    style() {
        return {
            transform: 'translate('+ this.props.coords.x +'px, '+this.props.coords.y+'px)'
        }
    }
}

export default Notecard;