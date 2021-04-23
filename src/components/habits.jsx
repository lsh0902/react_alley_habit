import React, { PureComponent } from "react";
import Habit from "./habit";
import HabitAddForm from './habitAddForm';
class Habits extends PureComponent {
  handleAdd = (name) => {
    this.props.onAdd(name);
  }
  render() {
    console.log('habit')
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.name}
              habit={habit}
              onInc={this.props.increment}
              onDec={this.props.decrement}
              onDel={this.props.onDelete}
            ></Habit>
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
