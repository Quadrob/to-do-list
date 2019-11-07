import React, { Component } from 'react'
import './App.css';
import ToDoItem from "./toDoItem"
import ToDoData from "./toDoData"

class App extends Component {
  constructor(){
    super()
    this.state = {toDos: ToDoData}
    this.handleChange = this.handleChange.bind(this)
    }

  handleChange(id){
    this.setState(prevState => {
      const updateToDos = prevState.toDos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return{toDos: updateToDos}
    })
  }

  render(){
    const toDoItems = this.state.toDos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    
    return (
      <div>
  
        <header className="App-header">
          <h1>To-Do-List</h1>
        </header>
        <hr/>
  
        <span className="todo-list">
          {toDoItems}
        </span>  
        
        <footer className="App-footer">
          <h5>Created by Robert Zeelie</h5>
        </footer>
      </div>
    );
  }
}

export default App;