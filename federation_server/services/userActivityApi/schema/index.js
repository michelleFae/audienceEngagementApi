import { gql } from 'apollo-server';

export default gql`

"""
Enum which describes user actions.
"""
enum Reaction {
  PARTY_FACE
  LOVE
  LIKE
  CONFUSED
  DISLIKE
  ENTERING
  EXITING
}

"""
Input which contains user activity information.
"""
input userActivityInput {
  "The activity performed by the user."
  activity: Reaction!
  "The id of the event the activity was performed at."
  eventId: ID!
  "The id of the user who performed the activity."
  userId: ID!
}

"""
Represnts the count of each reaction.
"""
type UserActivityCounts {
  "Count of number of party face reactions."
  PARTY_FACE: Int!
  "Count of number of love reactions."
  LOVE: Int!
  "Count of number of like reactions."
  LIKE: Int!  
  "Count of number of confused reactions."
  CONFUSED: Int!
  "Count of number of dislike reactions."
  DISLIKE: Int!
  "Count of number of enter actions."
  ENTERING: Int!
  "Count of number of exit actions."
  EXITING: Int!
}

"""
A type to describe user activity information.
"""
type UserActivity @key(fields: "activityId") {
  "Id of the activity. Is of the form UA<number>."
  activityId: ID!
  "Time at which the activity occured."
  timestamp: String!
  "The activity action."
  activity: Reaction!
  "The event that the activity happened at."
  event: Event!
  "The user that did the activity."
  user: User!
}

type Query {
  "The list of all user activities, upto the 100 last activities. Can filter on userId or eventID. If event Id is specified, last is optional."
  getUserActivites(last: Int, offset: Int, userId: ID, eventId: ID ): [UserActivity!]
  "Returns the user activity that matched the activityId."
  getUserActivityById(activityId: ID!): UserActivity
  "Returns the latest user activity."
  getLatestActivity: UserActivity
}

type Mutation {
  "Add user activity."
  addUserActivity(userActivityInput: userActivityInput!): UserActivity
}

extend type Event @key(fields: "eventId") {
  eventId: ID! @external
  "List of user activities for the event, across all users."
  userActivities: [UserActivity!]
}

extend type User @key(fields: "userId") {
  userId: ID! @external
  "List of activities done by the user, across all events."
  activitiesByUser: [UserActivity!]
}



`;
/*
needs 2 be separate...
type Subscription {
  "Return the latest user activity for a specific event."
  latestUserActivityForEvent(eventId: ID!): UserActivity
  "Return a count of all user activity, for each reaction, for the specific event."
  userActivityCountForEvent(eventId: ID!): UserActivityCounts
}

*/