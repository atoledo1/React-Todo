import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chores: [
        {
          chore: "Clean Apartment",
          id: 1528817077286,
          completed: false,
        },
        {
          chore: "Do Laundry",
          id: 1528817084358,
          completed: false,
        },
        {
          chore: "Get Groceries",
          id: 1528817084359,
          completed: false,
        },
      ],
      input: "",
    };
  }

  addchore = (choreName) => {
    const newchore = {
      chore: choreName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      chores: [...this.state.chores, newchore],
    });
  };

  togglechore = (choreId) => {
    this.setState({
      chores: this.state.chores.map((chore) => {
        if (chore.id === choreId) {
          return {
            ...chore,
            completed: !chore.completed,
          };
        } else {
          return chore;
        }
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      chores: this.state.chores.filter((chore) => !chore.completed),
    });
  };

  handleChanges = (evt) => {
    this.setState({ input: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.addchore(this.state.input);
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      
        <div>
          <h1>Current Chore List:</h1>
          <TodoForm
            addchore={this.addchore}
            handleChanges={this.handleChanges}
            handleSubmit={this.handleSubmit}
            currentInput={this.state.input}
            clearCompleted={this.clearCompleted}
          />
        <TodoList togglechore={this.togglechore} chores={this.state.chores} />
      </div>
    );
  }
}

export default App;
