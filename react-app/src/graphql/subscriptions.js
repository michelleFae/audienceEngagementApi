import { gql } from "@apollo/client";

import { UserActivityFields } from "./fragments";

export const ActivityAdded = gql`
  subscription ActivityAdded {
    activityAdded {
      ...UserActivityFields
    }
  }
  ${UserActivityFields}
`;
