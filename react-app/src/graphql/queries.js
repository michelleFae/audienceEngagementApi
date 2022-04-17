import { gql } from "@apollo/client";

import { UserActivityFields } from "./fragments";

export const GetUserActivities = gql`
  query GetUserActivity {
    getUserActivites (last: 50, userId: null, eventId: null) {
      ...UserActivityFields
    }
  }
  ${UserActivityFields}
`;
