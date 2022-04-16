import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";

import { AddUserActivity as AddUserActivityMutation } from "../graphql/mutations";

function AddActivity() {
  const [eventId, setEventId] = useState("");
  const [activity, setActivity] = useState("");
  const [userId, setUserId] = useState("");
  const [completedMessage, setCompletedMessage] = useState("");

  const [addActivity] = useMutation(AddUserActivityMutation, {
    onCompleted() {
      setEventId("");
      setUserId("");
      setCompletedMessage("Your post was published!");
    },
    onError() {
      setCompletedMessage("Error. Make sure user id (e.g. 'A3') and event id (e.g. 'E1') belongs to a valid user/event");
    }
  });

  return (
    <div>
      <nav>
        <p>
          <Link to="/">&larr; Back Home</Link>
        </p>
      </nav>
      <h1>Add a New Reaction</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          setCompletedMessage("");
          addActivity({ variables: { userActivityInput: { activity: activity, eventId: eventId, userId: userId }} });
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label>
          User Id
            <input
              type="text"
              name="userId"
              onChange={event => setUserId(event.target.value)}
              style={{ marginLeft: "1rem" }}
              value={userId}
            />
          </label>
        </div>



        

        <div style={{ marginBottom: "1rem" }}>
          <label>
          Activity
            <select id="activity" name="activity" onChange={event => setActivity(event.target.value)}
              style={{ marginLeft: "1rem" }}>
              <option value="PARTY_FACE">Party Face {`\u{1f973}`}</option>
              <option value="LOVE">Love {`\u{2764}`}</option>
              <option value="LIKE">Like {`\u{1f44d}`}</option>
              <option value="CONFUSED">Confused {`\u{1f615}`}</option>
              <option value="DISLIKE">Dislike {`\u{1f44e}`}</option>
            </select>
            
          </label>
        </div>


        <div style={{ marginBottom: "1rem" }}>
          <label>
          Event Id
            <textarea
              name="eventId"
              onChange={event => setEventId(event.target.value)}
              style={{ marginLeft: "1rem" }}
              value={eventId}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
        {completedMessage && (
          <p>
            {completedMessage}. <Link to="/">View posts &rarr;</Link>
          </p>
        )}
      </form>
    </div>
  );
}

export default AddActivity;
