import "./App.css";
import Habits from "./components/habits";
import React, {  PureComponent } from "react";
import Navbar from "./components/navbar";

class app extends PureComponent {
  state = {
    habits: [
      { name: "Reading", count: 0 },
      { name: "Running", count: 0 },
      { name: "Coding", count: 0 },
    ],
  };

  increment = (habit) => {
    const new_habits = this.state.habits.map((hab) => {
      if (habit == hab) {
        return { ...hab, count: hab.count + 1 };
      }
      return hab;
    });
    this.setState({ habits: new_habits });
  };
  decrement = (habit) => {
    const new_habits = this.state.habits.map((hab) => {
      if (habit == hab) {
        return { ...hab, count: hab.count < 1 ? 0 : hab.count - 1 };
      }
      return hab;
    });
    this.setState({ habits: new_habits });
  };
  onDelete = (habit) => {
    const new_habits = this.state.habits.filter((hab) => hab != habit);
    this.setState({ habits: new_habits });
  };
  onReset = () => {
    const new_habits = this.state.habits.map(habit => {
      if(habit.count == 0) return habit;
      else                 return { ...habit , count : 0};
    })
    this.setState({ habits: new_habits });
  };
  handleAdd = (name) => {
    const addHabit = {name , count : 0};
    const habitArray = [...this.state.habits, addHabit];
    this.setState({habits : habitArray})
  }
  render() {
    const len = this.state.habits.length;
    return (
      <>
        <Navbar length={len}></Navbar>
        <Habits
          habits={this.state.habits}
          increment={this.increment}
          decrement={this.decrement}
          onDelete={this.onDelete}
          onAdd={this.handleAdd}
        />
        <button onClick={this.onReset} className="reset">Reset!</button>
      </>
    );
  }
}

export default app;
