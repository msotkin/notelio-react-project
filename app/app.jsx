import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Notecard from './components/Notecard';
import Navbar from './components/Navbar';
import styles from './scss/application.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      active: 0
    };
    this.onMove = this.onMove.bind(this);
    this.makeCard = this.makeCard.bind(this);
    this.cloneState = this.cloneState.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

onMove(e, id) {
  let clone = this.cloneState();
  let coordsObj = {id: id, x: clone.cards[id].x + e.dx, y: clone.cards[id].y + e.dy}
  clone.cards[id] = coordsObj;
  clone.active = id;
  console.log("BEFORE:  ", clone.cards)
  this.setState(clone);
}

cloneState() {
  return Object.assign({}, this.state);
}

makeCard() {
  let clone = this.cloneState();
  clone.cards.push({id: clone.cards.length, x: 0, y:0});
  clone.active = clone.cards.length;
  this.setState(clone);
}

deleteCard() {
  let clone = this.cloneState();
  clone.cards.splice(clone.active, 1);
  clone.cards.forEach(card => {
    card.x = 0;
    card.y = 0;
  });
  this.setState(clone);
}


  render() {
    let cardArr = [];
    this.state.cards.forEach(card => {
      cardArr.push(<Notecard key= {card.id} id = {card.id} coords={card} onMove= {(e) => {this.onMove(e, card.id)}} />)
    });
    return (
    <div>
      <Navbar makeCard= {this.makeCard} deleteCard= {this.deleteCard}/>
      { cardArr }
    </div>
    )
  }
}

render (<App />,document.getElementById('app'));