import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0
let getid = () => ++id

const initialTodos = [
  { id: getid(), name: 'Walk the dog', completed: false },
  { id: getid(), name: 'Learn React', completed: true },
  { id: getid(), name: 'Have Fun', completed: false },
]

export default class App extends React.Component {
  state = {
    todos: initialTodos,

  }
  addTodo = ( name ) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: getid(), name, completed: false })
    })




}

  toggleCompletion = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if (id == td.id) return  {...td , completed: !td.completed}
        return td
      })
    })
  
  }
  
  
  render() {
    return (
    <div>
      <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion}/>
      <Form addTodo={this.addTodo} />
    </div>
    )
}
}
