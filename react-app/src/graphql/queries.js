import { gql } from "@apollo/client";

import { UserActivityFields } from "./fragments";

export const GetUserActivities = gql`
  query GetUserActivity {
    getUserActivites (last: 10, offset: 0, userId: null, eventId: null) {
      ...UserActivityFields
    }
  }
  ${UserActivityFields}
`;

export const sGetUserActivities = gql`
  query GetUserActivities($userId: ID, $eventId: ID) {
    getUserActivites (last: 10, offset: 0, userId: $userId, eventId: $eventId) {
      ...UserActivityFields
    }
  }
  ${UserActivityFields}
`;


