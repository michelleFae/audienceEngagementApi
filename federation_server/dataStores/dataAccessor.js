import { events, users, eventIdsToUserIds, userActivityIdToUserId, userActivites, eventIdsToUserActivityIds} from './models/models.js'

export function dbGetEvents() {
    return events;
}

export function dbGetUsers() {
    return users;
}

export function dbGetEventIdsToUserIds() {
    return eventIdsToUserIds;
}

export function dbIsValidEvent(eventId) {
    let eventIdRegex = /^E\d+$/;
    const eventNumber = Number(eventId.match(/\d+/));
    return eventIdRegex.test(eventId) && events.length > eventNumber;
}

export function dbIsValidUser(userId) {
    let userIdRegex = /^A\d+$/;
    const userNumber = Number(userId.match(/\d+/));
    return userIdRegex.test(userId) && users.length > userNumber;
}

export function dbIsValidUserActivityId(userActivitId) {
    let userActivityIdRegex = /^UA\d+$/;
    const userActivityNumber = Number(userActivitId.match(/\d+/));
    return userActivityIdRegex.test(userActivitId) && userActivites.length > userActivityNumber;
}


export function dbGetUserActivityIdToUserId() {
    return userActivityIdToUserId;
}

export function dbGetUserActivity() {
    return userActivites;
}

export function dbGetEventIdsToUserActivityIds() {
    return eventIdsToUserActivityIds;
}

