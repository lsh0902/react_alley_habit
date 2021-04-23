import React, { PureComponent } from 'react';

class habit extends PureComponent {
  increment = () => {
    this.props.onInc(this.props.habit)
  }
  decrement = () => {
    this.props.onDec(this.props.habit)
  }
  delete = () => {
    this.props.onDel(this.props.habit)
  }
  render() {    
    const {name, count} = this.props.habit
    console.log(`habit ${name}`)
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button inc" onClick={this.increment}>
          <i className="far fa-plus-square"></i>
        </button>
        <button className="habit-button dec" onClick={this.decrement}>
          <i className="far fa-minus-square"></i>
        </button>
        <button className="habit-button del" onClick={this.delete}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default habit;