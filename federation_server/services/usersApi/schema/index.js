import { gql } from 'apollo-server';

/* 
Note: gql is a function which takes in a schema string. 
This is called a tagged template. 
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates for more info.
*/

export default gql`

  # User needs to be an Entity in order to be shared with other microservices.
  # The @key directive defines the entity's primary key, which is the id field in this case.
  # This primary key will be used as a unique reference for all implementing services

  # GraphQL scalar types: https://graphql.org/learn/schema/#scalar-types
  # GraphQL enumeration types: https://graphql.org/learn/schema/#enumeration-types
  
  """
  A type that is used to provide details when adding or changing an User.
  """
  input UserInput {
    "The User's name. Any characters are allowed."
    name: String
    "The User's emailId. Any characters are allowed"
    emailId: String
    "The User's age. Must be a non-negative number."
    age: Int
  }

  """
  A type that describes the User.
  """
  type User @key(fields: "userId") {
    "The User's id, should be of the form A<number>. E.g A0, A83, etc."
    userId: ID!
    "The User's name. Any characters are allowed."
    name: String!
    "The User's emailId. Any characters are allowed"
    emailId: String!
    "The User's age. Must be a non-negative number."
    age: Int!
  }

  type Query {
    "Returns the user whose id matches userId."
    getUserById(userId: ID!): User!
    "Returns a list of all users."
    getUsers(last: Int!, offset: Int): [User!]
  }

  type Mutation {
    "Create a new User. User id is automatically generated."
    createUser(userInput: UserInput!): User
    "Update information for an existing User."
    updateUser(userId: ID!, userInput: UserInput!): User
  }
  
`;
