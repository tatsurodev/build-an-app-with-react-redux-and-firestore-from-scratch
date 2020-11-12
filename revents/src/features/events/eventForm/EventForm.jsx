import React, { useState } from 'react'
import cuid from 'cuid'
import { Segment, Header, Form, Button } from 'semantic-ui-react'

export default function EventForm({ setFormOpen, setEvents, createEvent }) {
  const initialValues = {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }

  const [values, setValues] = useState(initialValues)

  function handleFormSubmit() {
    createEvent({
      ...values,
      id: cuid(),
      hostedBy: 'Bob',
      attendees: [],
      photoURL: './assets/user.png',
    })
    setFormOpen(false)
  }

  function handleInputChange(e) {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  return (
    <Segment clearing>
      <Header content="Create new event" />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            name="title"
            placeholder="Event title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          onClick={() => setFormOpen(false)}
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  )
}
