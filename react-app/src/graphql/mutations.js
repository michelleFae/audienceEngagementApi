import { gql } from "@apollo/client";

import { UserActivityFields } from "./fragments";

export const AddUserActivity = gql`
  mutation addUserActivity($userActivityInput: userActivityInput!) {
    addUserActivity(userActivityInput: $userActivityInput) {
      ...UserActivityFields
    }
  }
  ${UserActivityFields}
`;
