import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import moment from "moment";
import React, { useEffect } from "react";

import { GetUserActivities } from "../graphql/queries";
import { ActivityAdded } from "../graphql/subscriptions";

function Home() {
  const { data, loading, subscribeToMore } = useQuery(GetUserActivities);

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: ActivityAdded,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }
        return {
          getUserActivites: [...prev.getUserActivites, subscriptionData.data.activityAdded]
        };
      }
    });
    return () => unsubscribe();
  }, [subscribeToMore]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <nav>
        <p>
          <Link to="/post/add">Add A Reaction</Link>
        </p>
      </nav>
      {data["getUserActivites"].length ? (
        [...data.getUserActivites]
          .filter(activity => activity !== null)
          .sort((a, b) =>
            Date.parse(b.timestamp) > Date.parse(a.timestamp) ? 1 : -1
          )
          .map(({ activity,activityId, timestamp, user, event }) => (
            <article key={activityId}>
              <h1>Reaction: {activity}</h1>
              <p>User Activity Id: {activityId}</p>
              <p>By {user.name}</p>
              <p>By {user.userId}</p>
              <p>at event {event.eventId}</p>
              <p>{moment(timestamp).format("h:mm A MMM D, YYYY")}</p>
            </article>
          ))
      ) : (
        <p>No activity available!</p>
      )}
    </div>
  );
}

export default Home;
