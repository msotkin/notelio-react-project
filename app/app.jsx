import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Notecard from './components/Notecard';

class App extends Component {
  render() {
    return (
    <div>
      <Notecard />
    </div>
    )
  }
}

render (<App />,document.getElementById('app'));