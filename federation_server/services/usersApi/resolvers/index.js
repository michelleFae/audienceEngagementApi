// Import users data
import {dbGetUsers, dbGetUser, dbAddUser, dbUpdateUser, dbCreateUsersClient } from '../../../dataStores/usersDbs/users.js';


const {
  UserInputError,
} = require('apollo-server');

var AsyncLock = require('async-lock');
var lock = new AsyncLock();



// Define resolvers
export default {
  Query: {
    getUserById: async (_, { userId }) => {
      // RETURN the user with the matching userId
      // Note: the function signature can also be written as async (parentObj, args, context, info), just like in graphQL
      // return dbGetUsers().find((user) => user.userId === userId);
      let usersClient;
      let user;
      try {
        usersClient = await dbCreateUsersClient();
        user = await dbGetUser(usersClient, {userId: userId });
      } finally {
        usersClient.close();
      }
      return user;
    },
    getUsers: async (_, {last, offset}) => {
      // RETURN list of last few users, upto 100
      if (last <= 0 || last > 100) {
        throw new UserInputError(`Due to server constraints, we can only fetch upto the last 100 users. Please enter a last value above 0 but less than 100`, {
          invalidArgs: ["last"],
        });
      }

      if (offset==null) {
        offset = 0;
      }

      let usersClient;
      let users;
      try {
        usersClient = await dbCreateUsersClient();
        users = await dbGetUsers(usersClient, {}, last, offset);
      } finally {
        usersClient.close();
      }

      return users;
    }
  },
  Mutation: {
    createUser: async (_, { userInput }) => {
      // Add user if user id is not already taken
      // Note: the function signature can also be written as async (parentObj, args, context, info), just like in graphQL
      const {name, emailId, age} = userInput;

      if (age == null || age < 0) {
        throw new UserInputError(`Cannot add user. User age needs to be a non-negative number`, {
          invalidArgs: ["age"],
        });
      }
      
      let invalidArgs = [];
      if (name == null) {
        invalidArgs.push("name");
      }
      if (emailId == null) {
        invalidArgs.push("emailId");
      }

      if (invalidArgs.length) {
        throw new UserInputError(`Cannot add user. User needs non-null input fields`, {
          invalidArgs: invalidArgs,
        });
      }

      let usersClient = await dbCreateUsersClient();
      let user;
      try {
        usersClient = await dbCreateUsersClient();
        user = await dbAddUser(usersClient,
          {
            name: name,
            emailId: emailId,
            age: age,
        });
      } finally {
        usersClient.close();
      }
      return user;
    },
    updateUser: async (_, {userId, userInput }) => {
      // Update already existing user if user id is not already taken
      // Note: the function signature can also be written as async (parentObj, args, context, info), just like in graphQL
      
      const {name, emailId, age} = userInput;
      
      if (age && age < 0) {
        throw new UserInputError(`Cannot update user ${userId}. User age needs to be a non-negative number`, {
          invalidArgs: ["age"],
        });
      }
      let user;
      let usersClient;
      try {
        usersClient = await dbCreateUsersClient();
        user = await dbUpdateUser(usersClient, userId, name, emailId, age);
      } finally {
        usersClient.close();
      }
      return user;
    }
  },
  User: {
    // Reference resolver - used by services querying user entities
    __resolveReference(parent) {
      // RETURN the user with the same id as parent.userId
      let usersClient;
      let user;
      try {
        usersClient = dbCreateUsersClient();
        user = dbGetUser(usersClient, {userId: parent.userId});
      } finally {
        usersClient.close();
      }
      return user;
    }
  }
};