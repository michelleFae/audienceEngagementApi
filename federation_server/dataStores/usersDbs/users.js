const {
    UserInputError,
  } = require('apollo-server');

  
let AsyncLock = require('async-lock');
let lock = new AsyncLock();

export function dbCreateUsersClient() {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://mdsouza43:mSingalong13!@cluster0.eibst.mongodb.net/users?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    return client;
}

export async function dbGetUsers(usersClient, query={}, last=99, offset=0) {
    await usersClient.connect();
    const cursor = await usersClient.db("users").collection("users").find(query, { projection: { _id: 0 } }).sort({_id: -1}).skip(offset).limit(last);
    const results = await cursor.toArray();
    return results;
}

export async function dbGetUser(usersClient, query={}) {
    await usersClient.connect();
    const results = await usersClient.db("users").collection("users").findOne(query, { projection: { _id: 0 } });
    return results;
}

export async function dbAddUser(usersClient, newUser) {
    let userId;

    await usersClient.connect();
    await lock.acquire("dbAddUser", async function() {
        // async work - atomic
        const userNumber = await usersClient.db("users").collection("users").countDocuments({});

        userId = `A${userNumber}`;
        newUser["userId"] = userId;
        let results = await usersClient.db("users").collection("users").insertOne(newUser);

        if (!results.acknowledged) {
            throw new Error(`Database Error. Please retry later.`);
        }
        
    });
    return {userId, ...newUser};
    
}



export async function dbUpdateUser(usersClient, userId, name, emailId, age) {
    await usersClient.connect();

    let setDict = {};

    if (name != null) {
        setDict["name"] = name;
    }
    if (emailId != null) {
        setDict["emailId"] = emailId;
    }
    if (age != null) {
        setDict["age"] = age;
    }

    const rValue = await usersClient.db("users").collection("users").updateOne({
        userId: userId
    }, {
        $set: setDict
    });

    if (!rValue.acknowledged) {
        throw new Error('Database error, please try again later.');
    }

    if (rValue.matchedCount != 1) {
        throw new UserInputError(`Invalid user id ${userId}.`, {
            invalidArgs: ["userId"],
        });
    }

    return dbGetUser(usersClient, {userId: userId});
}

export async function dbIsValidUser(usersClient, userId) {
    let userIdRegex = /^A\d+$/;
    const userNumber = Number(userId.match(/\d+/));
    if (!userIdRegex.test(userId)) {
        throw new UserInputError(`Invalid userId ${userId}.`, {
            invalidArgs: ["userId"],
        });
    }
    await usersClient.connect();
    const numUsers = await usersClient.db("users").collection("users").countDocuments({});

    if (numUsers <= userNumber) {
        throw new UserInputError(`Invalid userId ${userId}.`, {
            invalidArgs: ["userId"],
        });
    }
    return numUsers > userNumber;   
}