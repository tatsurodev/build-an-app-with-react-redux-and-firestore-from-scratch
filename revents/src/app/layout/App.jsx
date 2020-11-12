import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import NavBar from '../../features/nav/NavBar'
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
export default function App() {
  // NavBarとEventDashboardの子EventFormでformOpen stateを使用するので、その両方へprop down可能なAppでstateを管理する
  const [formOpen, setFormOpen] = useState(true)

  return (
    // import { Fragment } from 'react
    // <Fragment></Fragment>
    // 上下のfragmentは同値
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  )
}
