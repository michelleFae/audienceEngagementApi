# AttendeesApi

Attendees Api is an API for conference Attendees.

Supported queries:
```graphql
"Returns the attendee whose id matches attendeeId."
getAttendeeById(attendeeId: ID!): Attendee!
"Returns a list of all attendees."
getAttendees: [Attendee!]
```
Supported mutations:
```graphql
"Create a new Attendee. Attendee id is automatically generated."
createAttendee(attendeeInput: AttendeeInput!): Attendee
"Update information for an existing Attendee."
updateAttendee(attendeeId: ID!, attendeeInput: AttendeeInput!): Attendee
```

Supported entities:
```graphql
type Attendee @key(fields: "attendeeId")
```

## Installation (Required only if you are implementing the attendeesAPI)


0) If you haven't already done so, clone https://github.com/michelleFae/audienceEngagementApi (`git clone https://github.com/michelleFae/audienceEngagementApi`). Make sure you have run `npm install` at the top level of the directory, as per the instructions in the repository readme.

1) Fork this (attendeesAPI) repository (click the `FORK` button on the top right of github).
    ![](https://i.imgur.com/oJWUOVh.png)

    Then, clone your **forked** repo after navigating into the _audienceEngagementApi/services_ directory:
    
    e.g. On a terminal, write out:
    ```bash
    cd services
    git clone https://github.com/YOUR-GITHUB-USERNAME/attendeesApi.git
    ```

2) Using the terminal, navigate to the _attendeesApi_ directory in the _services_ folder and run `npm install`:

    ```bash
    cd services/attendeesApi
    npm install # needed if you want to test this service independently from other services
    ```

3) Begin looking through the code in the attendeesApi subdirectory. After you've filled in the missing code, you can test out your individual service using `npm run start` when you are inside the _attendeesApi_ subdirectory. You should see a message which looks like this:

    ```bash
    🎀 Attendees server ready at http://localhost:5001/ 👩‍💻🧑‍💻
    ```

    Go to `http://localhost:5001/` in your browser. If promted, click `Query your server`. 
    ![](https://i.imgur.com/JOiWRsP.png)

    Write out a query to test your service. For example, running [this](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A5001%2F&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAIq6EAUAJAIYorJgIICSY6RLAIgIQCURYAB0kRIgHMEKAIL1GzAEIE2FOgyRNW7IrTkbmbAcNFiia%2BVpGmiSGoiumUBAA4IHYmpIcBfB5Jl6mgDOgu42dm4mHl4mvkjeIAA0IABuNHgAljQARgA2CEEYIMZiQiDm%2BpYYRGXSAMxlIg4iCd5AA) should work.

    You can use `Control+C` to terminate the server.
    
    ![](https://i.imgur.com/Xa5Mz0T.gif)

4) You can run your services with the rest of the API by following the instructions at
## Usage

To use this API, follow the [**Running The Entire API** section](https://github.com/michelleFae/audienceEngagementApi)

## License

[MIT](htsps://choosealicense.com/licenses/mit/)