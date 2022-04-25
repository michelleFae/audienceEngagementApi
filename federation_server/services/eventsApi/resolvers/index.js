// import events data
import {dbCreateUsersClient} from '../../../dataStores/usersDbs/users.js';
import {dbGetUserIdsToEvents, dbAddUserToEvent, dbGetEvents, dbGetEvent, dbAddEvent, dbGetEventIdsToUserIds, dbUpdateEvent, dbCreateEventsClient} from '../../../dataStores/eventsDbs/events.js';

const {
  UserInputError,
} = require('apollo-server');


// Define resolvers
export default {
  Query: {
    getEvents: async (_, {last, offset}) => {
      // RETURN a list of events
      // Note: the function signature can also be written as async (parentObj, args, context, info), just like in graphQL

      if (last <= 0 || last > 100) {
        throw new UserInputError(`Due to server constraints, we can only fetch upto the last 100 events. Please enter a last value above 0 but less than 100`, {
          invalidArgs: ["last"],
        });
      }

      let eventsClient;
      let events;
      try {
        eventsClient = await dbCreateEventsClient();
        events = await dbGetEvents(eventsClient, {}, last, offset);
      } finally {
        eventsClient.close();
      }
      return events;
    },
    getEventById: async (_, { eventId }) => {
      // RETURN an event which has the same eventId as eventId
      // Note: the function signature can also be written as async (parentObj, args, context, info).
      let eventsClient;
      let event;
      try {
        eventsClient = dbCreateEventsClient();
        event = await dbGetEvent(eventsClient, {eventId: eventId});
      } finally {
        eventsClient.close();
      }
      return event;
    }
  },
  Event: {
    // Our Event contains the User entity extended from the users service
    // To resolve user data, we send an user reference to find the owner subgraph of the user
    attendees: async (parent) => {
      // 'parent' contains user information including the user id, which is the same value as the user id
      // RETURN a list of users that attended an event with parent.eventId
      
      let eventsClient;
      let userList = [];
      let userIds;
      try {
        eventsClient = dbCreateEventsClient();
        userIds = await dbGetEventIdsToUserIds(eventsClient, parent.eventId);
        userIds.forEach(userId => userList.push({ __typename: "User", userId: userId }));
      } finally {
        eventsClient.close();
      }
      return userList;
    },  

    // Reference resolver - used by services querying event entities
    __resolveReference: async (parent) => {
      // RETURN the event with the same eventId as parent.eventId
      let eventsClient = dbCreateEventsClient();
      let event;
      try {
        eventsClient = dbCreateEventsClient();
        event =  await dbGetEvent(eventsClient, {eventId: parent.eventId});
      } finally {
        eventsClient.close();
      }
      return event;
    }
  },

  Mutation: {
    addEvent: async (_, { eventInput }) => {
      // Add New Event
      const {name, description, eventType} = eventInput;

      let invalidArgs = [];
      if (name == null) {
        invalidArgs.push("name");
      }
      if (description == null) {
        invalidArgs.push("description");
      }
      if (eventType == null) {
        invalidArgs.push("emailId");
      }

      if (invalidArgs.length) {
        throw new UserInputError(`Cannot add Event. Event needs non-null input fields`, {
          invalidArgs: invalidArgs,
        });
      }

      let newEvent = {
        name: name,
        description: description,
        eventType: eventType,
      };

      let eventsClient;
      let event;
      try {
        eventsClient = dbCreateEventsClient();
        event = await dbAddEvent(eventsClient, newEvent);
      } finally {
        eventsClient.close();
      }
      
      return event;
    },
    updateEvent: async (_, {eventId, eventInput }) => {
      // Update already existing event if event id is not already taken

      const {name, description, eventType} = eventInput;
      let eventsClient;
      let event;
      try {
        eventsClient =  dbCreateEventsClient();
        event = await dbUpdateEvent(eventsClient, eventId, name, description, eventType);
      } finally {
        eventsClient.close();
      }
      return event;
    },
    addUserToEvent: async (_, {userId, eventId}) => {
      // Add user to event
      let eventsClient = dbCreateEventsClient();
      let usersClient = dbCreateUsersClient();
      let event;
      try {
        eventsClient = dbCreateEventsClient();
        usersClient = dbCreateUsersClient();
        event = await dbAddUserToEvent(eventsClient, usersClient, eventId, userId);
      } finally {
        usersClient.close();
        eventsClient.close();
      }
      return event;
    },

  },

  User: {
      events: async (parent) => {
        // RETURN a list of events that have this user.userId as a user
        let eventList = [];
        let eventsClient;
        try {
          eventsClient = dbCreateEventsClient();
          eventList = await dbGetUserIdsToEvents(eventsClient, parent.userId);
        } finally {
          eventsClient.close();
        }
        return eventList;
    },  
  },
};