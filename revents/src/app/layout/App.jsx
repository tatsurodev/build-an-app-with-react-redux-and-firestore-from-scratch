import React from 'react'

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
    </div>
  )
}

export default App
