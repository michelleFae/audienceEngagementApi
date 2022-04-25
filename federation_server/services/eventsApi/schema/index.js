import { gql } from 'apollo-server';

export default gql`
extend type User @key(fields: "userId") {
  userId: ID! @external
  "Events that this user has attended."
  events: [Event!]
}

  
"""
A type that is used to provide details when adding or changing an Event.
"""
input EventInput {
  "Name of the event."
  name: String
  "Description of the event."
  description: String
  "Type of the event."
  eventType: EventType
}


"""
Indicates the type of the event.
"""
enum EventType {
  PANEL
  PRESENTATION
  WORKSHOP
  POSTER_SESSION
  MENTORING_CIRCLES
  TECH_MEETUP
}

"""
A type that describes the Event.
"""
type Event @key(fields: "eventId") {
  "Id of the event."
  eventId: ID!
  "Name of the event."
  name: String!
  "Description of the Event."
  description: String!
  "Type of the event."
  eventType: EventType!
  "List of users who are registered for the event."
  attendees: [User!]
}
type Query {
  "Returns a list of events, upto the last 100 events."
  getEvents(last: Int!, offset: Int): [Event!]
  "Returns an event whose id matches the eventId."
  getEventById(eventId: ID!): Event
}

type Mutation {
  "Add Event. Event id is automatically generated."
  addEvent(eventInput: EventInput!): Event
  "Update an already existing event."
  updateEvent(eventId: ID!, eventInput: EventInput!): Event
  "Register User for the event."
  addUserToEvent(userId: ID!, eventId: ID!): Event
}

`;