import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'

export default function EventDashboard() {
  const { events } = useSelector((state) => state.event)

  // function handleCreateEvent(event) {
  //   setEvents([...events, event])
  // }

  // function handleUpdateEvent(updateEvent) {
  //   setEvents(
  //     events.map((evt) => (evt.id === updateEvent.id ? updateEvent : evt))
  //   )
  // }

  function handleDeleteEvent(eventId) {
    // setEvents(events.filter((evt) => evt.id !== eventId))
  }

  return (
    <Grid>
      {/* semantic uiは、16 columns grid */}
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  )
}

/* app内でclass式、関数式componentを併用する時、関数式componentをarrow functionで定義した後にexport defaultするとclass式の時と同じようになるのでconsistentだが、class式と併用しない時はexport default function Fnc() {}の方が簡潔

const EventDashboard = () => {}
export default EventDashboard

class EventSomething {}
export default EventSomething
*/
