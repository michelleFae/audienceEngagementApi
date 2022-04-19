
let AsyncLock = require('async-lock');
let lock = new AsyncLock();

import { dbIsValidUser } from '../usersDbs/users';
import { dbIsValidEvent } from '../eventsDbs/events';


const {
  UserInputError,
} = require('apollo-server');


export function dbCreateUserActivityClient() {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://mdsouza43:mSingalong13!@cluster0.eibst.mongodb.net/userActivities?retryWrites=true&w=majority";
    const userActivityClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    return userActivityClient;
}


export async function dbGetUserActivities(userActivityClient, query={}, last=0, offset=0) {
    await userActivityClient.connect();
    const cursor = await userActivityClient.db("userActivities").collection("userActivities").find(query, { projection: { _id: 0 } }).sort({_id: -1}).skip(offset).limit(last);
    const results = await cursor.toArray();
    return results;
}

export async function dbGetUserActivity(userActivityClient, query={}) {
    await userActivityClient.connect();
    const results = await userActivityClient.db("userActivities").collection("userActivities").findOne(query, { projection: { _id: 0 } });
    return results;
}

export async function dbAddUserActivity(userActivityClient, usersClient, eventsClient, newActivity) {

    await userActivityClient.connect();

    const eventId = newActivity["eventId"];
    const userId = newActivity["userId"];

    await dbIsValidUser(usersClient, userId);
    await dbIsValidEvent(eventsClient, eventId);

    let activityId;

    await lock.acquire("dbAddEvent", async function() {
        // async work - atomic
        const userActivityNumber = await userActivityClient.db("userActivities").collection("userActivities").countDocuments({});

        activityId = `UA${userActivityNumber}`;
        newActivity["activityId"] = activityId;
        newActivity["_id"] = activityId;
        console.log(newActivity);

        let results = await userActivityClient.db("userActivities").collection("userActivities").insertOne(newActivity);
        if (!results.acknowledged) { 
            throw new Error(`Database error. Please try again later.`);
        }
        
    });
    delete newActivity['eventId'];
    delete newActivity['userId'];
    delete newActivity['_id'];
    return newActivity;  
}


export async function dbGetUserActivityIdToUserId(userActivityClient, activityId) {
    await userActivityClient.connect();
    const {userId} = await userActivityClient.db("userActivities").collection("userActivities").findOne({_id: activityId}, { projection: { _id: 0, userId:1 } });
    return userId;
}

export async function dbGetUserActivityIdToEventId(userActivityClient, activityId) {
    await userActivityClient.connect();
    const {eventId} = await userActivityClient.db("userActivities").collection("userActivities").findOne({_id: activityId}, { projection: { _id: 0, eventId:1 } });

    return eventId;
}

export async function dbGetUserIdToUserActivities(userActivityClient, userId) {
    await userActivityClient.connect();
    const cursor = await userActivityClient.db("userActivities").collection("userActivities").find({userId: userId}, { projection: { _id: 0, activityId: 1 } });
    let activityIds = await cursor.toArray(); //[{activityId},]

    activityIds = activityIds.map(function(activity) {
        return activity['activityId'];
    });
    
    await userActivityClient.db("userActivities").collection("userActivities").find({ activityId: { $in: activityIds }}, { projection: { _id: 0 } }).sort({_id: -1});
    const activities = await cursor.toArray();


    return activities;
}

export async function dbGetEventIdToUserActivities(userActivityClient, eventId) {
    await userActivityClient.connect();
    const cursor = await userActivityClient.db("userActivities").collection("userActivities").find({eventId: eventId}, { projection: { _id: 0, activityId: 1 } });
    let activityIds = await cursor.toArray(); //[{activityId},]

    activityIds = activityIds.map(function(activity) {
        return activity['activityId'];
    });
    
    await userActivityClient.db("userActivities").collection("userActivities").find({ activityId: { $in: activityIds }}, { projection: { _id: 0 } }).sort({_id: -1});
    const activities = await cursor.toArray();


    return activities;
}
