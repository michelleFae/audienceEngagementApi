import {pubsub} from "../../../redis";
import {dbCreateUsersClient, dbIsValidUser} from '../../../dataStores/usersDbs/users.js';
import {dbCreateEventsClient, dbIsValidEvent} from '../../../dataStores/eventsDbs/events.js';
import {dbCreateUserActivityClient, dbGetUserActivities, dbGetUserActivity, dbAddUserActivity, dbGetUserActivityIdToEventId, dbGetUserActivityIdToUserId } from "../../../dataStores/userActivitiesDbs/userActivities";

const {
  UserInputError,
} = require('apollo-server');


// Define resolvers
export default {
  Query: {
    getUserActivites: async (_, {last, offset, userId, eventId}) => {
      // RETURN a list of userActivities
     // eventId  

      if ((eventId == null && (last == null || last <= 0 || last > 100)) ||  (last != null && ( last <= 0 || last > 100))) {
        throw new UserInputError(`Due to server constraints, we can only fetch upto the last 100 activities. Please enter a last value above 0 but less than 100`, {
          invalidArgs: ["last"],
        });
      }

      let query = {};
      if (!last) {
        last = 0;
      }

      if (!offset) {
        offset = 0;
      }

      let activities;
      let userActivityClient;

      try {
        userActivityClient = await dbCreateUserActivityClient();

        if (userId) {
          await dbIsValidUser(userActivityClient, userId);
          query["userId"] = userId;
        }
  
        if (eventId) {
          await dbIsValidEvent(userActivityClient, eventId);
          query["eventId"] = eventId;
        }

        activities = await dbGetUserActivities(userActivityClient, query, last, offset);
      } finally {
        userActivityClient.close();
      }
      return activities;
    },
    getUserActivityById: async (_, { activityId }) => {
      // RETURN user activity by id

      let activity;
      let userActivityClient;

      try {
        userActivityClient = await dbCreateUserActivityClient();
        activity = await dbGetUserActivity(userActivityClient, {_id: activityId});
      } finally {
        userActivityClient.close();
      }
      return activity;
    },
    getLatestActivity: async () => {

      let activities;
      let userActivityClient;

      try {
        userActivityClient = await dbCreateUserActivityClient();
        activities = await dbGetUserActivities(userActivityClient, {}, 1, 0);
      } finally {
        userActivityClient.close();
      }
      return activities.length? activities[0]: null;
    }
  },
  Mutation: {
    addUserActivity: async (_, { userActivityInput}) => {
      const timestamp = (new Date()).toISOString();

      let activity;
      let userActivityClient;
      let userClient;
      let eventClient;

      try {
        userActivityClient = await dbCreateUserActivityClient();
        eventClient = await dbCreateEventsClient();
        userClient = await dbCreateUsersClient();
        activity = await dbAddUserActivity(userActivityClient, userClient, eventClient, { timestamp, ...userActivityInput});
      } finally {
        userActivityClient.close();
        eventClient.close();
        userClient.close();
      }
      pubsub.publish("ACTIVITY_ADDED", {activityAdded: activity});
      
      return activity;

    }
  },

  UserActivity: {

    event: async (parent) => {
      // RETURN an event with eventId for which the userActivity for parent.activityId is a part of
      let eventId;
      let userActivityClient;

      try {
        userActivityClient = await dbCreateUserActivityClient();
        eventId = await dbGetUserActivityIdToEventId(userActivityClient, parent.activityId);
      } finally {
        userActivityClient.close();
      }
      return { __typename: "Event", eventId: eventId };
    },
    
    user: async (parent) => {
      // RETURN an user with userId - corresponding to the user that wrote the review corresponding to parent.activityId
      let userId;
      let userActivityClient;

      try {
        userActivityClient = await dbCreateUserActivityClient();
        userId = await dbGetUserActivityIdToUserId(userActivityClient, parent.activityId);
      } finally {
        userActivityClient.close();
      }

      return { __typename: "User", userId: userId };
    },

    // Reference resolver - used by services querying review entities
    __resolveReference(parent) {
      // RETURN the userActivity with the same activityId as parent.activityId

      let activity;
      let userActivityClient;

      try {
        userActivityClient = dbCreateUserActivityClient();
        activity = dbGetUserActivity(userActivityClient, {_id: parent.activityId});
      } finally {
        userActivityClient.close();
      }
      return activity;
    }
  },
  User: {
    activitiesByUser: async (parent) => {
      // RETURN a list of userActivities written by user with userId parent.userId

      let activity;
      let userActivityClient;

      try {
        userActivityClient = await dbCreateUserActivityClient();
        activity = await dbGetUserActivities(userActivityClient, {userId: parent.userId}, 0, 0);
      } finally {
        userActivityClient.close();
      }
      return activity;
    }
  },
  Event: {
    userActivities: async (parent) => {
      // RETURN a list of userActivities written for event with parent.eventId

      let activities;
      let userActivityClient;

      try {
        userActivityClient = await dbCreateUserActivityClient();
        activities = await dbGetUserActivities(userActivityClient, {eventId: parent.eventId}, 0, 0);
      } finally {
        userActivityClient.close();
      }
      return activities;
    }
  },
};
