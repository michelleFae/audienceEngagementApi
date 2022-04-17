import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import moment from "moment";
import React, { useEffect } from "react";

import { GetUserActivities } from "../graphql/queries";
import { ActivityAdded } from "../graphql/subscriptions";

const emojiDict = {
  "PARTY_FACE": `\u{1f973}`,
  "LOVE": `\u{2764}`,
  "LIKE": `\u{1f44d}`,
  "CONFUSED": `\u{1f615}`,
  "DISLIKE": `\u{1f44e}`,
  "ENTERING": `\u{2600}`,
  "EXITING":`\u{1f315}`
};



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
        <div>
        <h1>
        <Link to="/activity/add"><button className="button-85" >Add A Reaction</button></Link>
          
        </h1>
        </div>
        
      </nav>
      {data["getUserActivites"].length ? (
        [...data.getUserActivites]
          .filter(activity => activity !== null)
          .sort((a, b) =>
            Date.parse(b.timestamp) > Date.parse(a.timestamp) ? 1 : -1
          )
          .map(({ activity,activityId, timestamp, user, event }) => (
            <article key={activityId}>
              <div className="emojiDiv">
              <div className={activity}>
              <h1>Reaction: {activity} {emojiDict[activity]}</h1>
              <p>User Activity Id: {activityId}</p>
              <p>User {user.name}, ID: {user.userId}</p>
              <p>Event "{event.name}", ID: {event.eventId}</p>
              <p>{moment(new Date(timestamp)).format("h:mm A MMM D, YYYY")}</p>
              </div>
              </div>
            </article>
            
          ))
      ) : (
        <p>No activity available!</p>
      )}
    </div>
  );
}

export default Home;
