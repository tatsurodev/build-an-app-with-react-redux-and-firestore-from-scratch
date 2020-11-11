import React from 'react'
import {Button} from 'semantic-ui-react'
// pure javascript code
/*
function App() {
  const title = React.createElement('h1', {}, 'Revents no JSX')
  const div = React.createContext('div', {className: 'App'}, title)
  return (
    div
  )
}
*/

// jsx code
function App() {
  return (
    <div className="App">
      <h1>Re-vents</h1>
      <button className="ui icon red button">
        <i className="user icon" />CSS Button
      </button>
      <Button icon="user" content="React Button" color="green" />
    </div>
  )
}

export default App
