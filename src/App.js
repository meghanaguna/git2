import {Component} from 'react'
import {initialTodosList, SimpleTodos} from './components/SimpleTodos'
import './App.css'

class App extends Component {
  state = {todoList: initialTodosList}

  deleteUser = id => {
    const {todoList} = this.state
    const filteredData = todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredData})
  }

  render() {
    const {todoList} = this.state
    return (
      <div>
        <div>
          <h1>Simple Todos</h1>
          <ul className="list-container">
            {todoList.map(eachUser => (
              <SimpleTodos
                details={eachUser}
                key={eachUser.id}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
