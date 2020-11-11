import React from 'react'
import { Grid } from 'semantic-ui-react'

export default function EventDashboard() {
  return (
    <Grid>
      {/* semantic uiは、16 columns grid */}
      <Grid.Column width={10}>
        <h2>Left Column</h2>
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Right Column</h2>
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
