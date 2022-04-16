import { gql } from "@apollo/client";

import { UserActivityFields } from "./fragments";

export const GetUserActivities = gql`
  query GetUserActivity {
    getUserActivites {
      ...UserActivityFields
    }
  }
  ${UserActivityFields}
`;
