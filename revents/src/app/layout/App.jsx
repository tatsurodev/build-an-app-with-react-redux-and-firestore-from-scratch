import React from 'react'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'

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
    <div>
      <h1>Re-vents</h1>
    <EventDashboard/>
    </div>
  )
}

export default App
