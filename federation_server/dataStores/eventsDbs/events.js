
let AsyncLock = require('async-lock');
let lock = new AsyncLock();

import { dbIsValidUser } from '../usersDbs/users';



const {
  UserInputError,
} = require('apollo-server');


export function dbCreateEventsClient() {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://mdsouza43:mSingalong13!@cluster0.eibst.mongodb.net/events?retryWrites=true&w=majority";
    const eventsClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    return eventsClient;
}

//todo await eventsClient.close();

export async function dbGetEvents(eventsClient, query={}, last=99, offset=0) {
    await eventsClient.connect();
    const cursor = await eventsClient.db("events").collection("events").find(query, { projection: { _id: 0 } }).sort({_id: -1}).skip(offset).limit(last);
    const results = await cursor.toArray();
    return results;
}

export async function dbGetEvent(eventsClient, query={}) {
    await eventsClient.connect();
    const results = await eventsClient.db("events").collection("events").findOne(query, { projection: { _id: 0 } });
    return results;
}

export async function dbAddEvent(eventsClient, newEvent) {

    await eventsClient.connect();
    let eventId;

    await lock.acquire("dbAddEvent", async function() {
        // async work - atomic
        const eventNumber = await eventsClient.db("events").collection("events").countDocuments({});

        eventId = `E${eventNumber}`;
        newEvent["eventId"] = eventId;
        let results = await eventsClient.db("events").collection("events").insertOne(newEvent);

        if (!results.acknowledged) { 
            throw new Error(`Database error. Please try again later.`);
        } else {
            results = await eventsClient.db("events").collection("eventIdsToUserIds").insertOne({eventId: eventId, attendeeIds: [] });

            if (!results.acknowledged) {
                throw new Error(`Database error. Please try again.`);
            }
        }
    });
    return {eventId, ...newEvent};
  
}



export async function dbUpdateEvent(eventsClient, eventId, name, description, eventType) {
    await eventsClient.connect();
    let setDict = {};

    if (name != null) {
        setDict["name"] = name;
    }
    if (description != null) {
        setDict["description"] = description;
    }
    if (eventType != null) {
        setDict["eventType"] = eventType;
    }

    const rValue = await eventsClient.db("events").collection("events").updateOne({
        eventId: eventId
    }, {
        $set: setDict
    });

    if (!rValue.acknowledged) {
        throw new Error('Database error, please try again later.');
    }

    if (rValue.matchedCount != 1) {
        throw new UserInputError(`Invalid event id ${eventId}.`, {
            invalidArgs: ["eventId"],
        });
    }

    return dbGetEvent(eventsClient, {eventId: eventId});

}


export async function dbIsValidEvent(eventsClient, eventId) {
    let eventIdRegex = /^E\d+$/;
    const eventNumber = Number(eventId.match(/\d+/));
    if (!eventIdRegex.test(eventId)) {
        throw new UserInputError(`Invalid event id ${eventId}.`, {
            invalidArgs: ["eventId"],
        });
    }
    await eventsClient.connect();
    const numEvents = await eventsClient.db("events").collection("events").countDocuments({});
    return numEvents > eventNumber;
}

export async function dbGetEventIdsToUserIds(eventsClient, eventId) {
    await eventsClient.connect();
    const {attendeeIds} = await eventsClient.db("events").collection("eventIdsToUserIds").findOne({eventId: eventId}, { projection: { _id: 0, attendeeIds:1 } });
    return attendeeIds;
}

export async function dbGetUserIdsToEventIds(eventsClient, userId) {
    await eventsClient.connect();
    const {eventIds} = await eventsClient.db("events").collection("userIdsToEventIds").findOne({userId: userId}, { projection: { _id: 0,  eventIds:1 } });
    return eventIds;
}

export async function dbGetUserIdsToEvents(eventsClient, userId) {
    await eventsClient.connect();
    const {eventIds} = await eventsClient.db("events").collection("userIdsToEventIds").findOne({userId: userId}, { projection: { _id: 0,  eventIds:1 } });
    const cursor = await eventsClient.db("events").collection("events").find({ eventId: { $in: eventIds }}, { projection: { _id: 0 } });
    const events = await cursor.toArray();

    
    return events;
}

// add user to event
// check if valid event id, valid user id, add userId to eventIds and eventIds to userIds
export async function dbAddUserToEvent(eventsClient, usersClient, eventId, userId) {
    await dbIsValidEvent(eventsClient, eventId);

    await dbIsValidUser(usersClient, userId);

    await eventsClient.connect();

    // check id user id already exists, and add if not
    let results = await eventsClient.db("events").collection("eventIdsToUserIds").updateOne({
        eventId: eventId
    }, {
        $addToSet: { attendeeIds: userId } 
    });


    // check if dictionary already had user info - if not, add record to dictionary


    results = await eventsClient.db("events").collection("userIdsToEventIds").updateOne({userId: userId
    }, {
        $addToSet: { eventIds: eventId }
    });

    if (!results.acknowledged) {
        throw new Error(
            'Database Error. Please try again.',
        );
    }

    if (results.matchedCount != 1) {
       // create new entry
       results = await eventsClient.db("events").collection("userIdsToEventIds").insertOne({userId: userId, eventIds: [eventId]});
       // throw error here if not acknoloedge.
       if (!results.acknowledged) {
        throw new Error(
            'Database Error. Please try again.',
          );
       }
    }
    
    return dbGetEvent(eventsClient, {eventId: eventId});
  
}