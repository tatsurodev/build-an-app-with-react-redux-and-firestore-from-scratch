import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import EventListItemPlaceholder from './EventListItemPlaceholder'
import EventFilters from './EventFilters'
import {
  dataFromSnapshot,
  getEventsFromFirestore,
} from '../../../app/firestore/firestoreService'
import { listenToEvents } from '../eventActions'
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../app/async/asyncReducer'

export default function EventDashboard() {
  const dispatch = useDispatch()
  const { events } = useSelector((state) => state.event)
  const { loading } = useSelector((state) => state.async)

  useEffect(() => {
    dispatch(asyncActionStart())
    const unsubscribe = getEventsFromFirestore({
      next: (snapshot) => {
        dispatch(
          listenToEvents(
            snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
          )
        )
        dispatch(asyncActionFinish())
      },
      error: (error) => dispatch(asyncActionError(error)),
      complete: () => console.log('you will never see this message'),
    })
    return unsubscribe
  }, [dispatch])

  return (
    <Grid>
      {/* semantic uiは、16 columns grid */}
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
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
