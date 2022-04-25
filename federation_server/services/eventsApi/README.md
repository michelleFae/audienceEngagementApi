# EventsApi

Events Api is an API for Grace Hopper Conference Events.

Supported queries:
```graphql
getEvents:[Event!]
getEventById(…):Event
```

Supported entities:
```graphql
type Event @key(fields: "eventId")
```

## Installation (Required only if you are implementing the eventsAPI)


0) If you haven't already done so, clone https://github.com/michelleFae/graceHopperApi (`git clone https://github.com/michelleFae/graceHopperApi`). Make sure you have run `npm install` at the top level of the directory, as per the instructions in the repository readme.

1) Fork this (eventsAPI) repository (click the `FORK` button on the top right of github).
    ![](https://i.imgur.com/oJWUOVh.png)

    Then, clone your **forked** repo after navigating into the _graceHopperApi/services_ directory:
    
    e.g. On a terminal, write out:
    ```bash
    cd services
    git clone https://github.com/YOUR-GITHUB-USERNAME/eventsApi.git
    ```

2) Using the terminal, navigate to the _eventsApi_ directory in the _services_ folder and run `npm install`:

    ```bash
    cd services/eventsApi
    npm install # needed if you want to test this service independently from other services
    ```

3) Begin looking through the code in the eventsApi subdirectory. You will need to change the files in the _schema_ and the _resolver_ folders only. It will be helpful to read through the other files in the subdirectory.
    
4) After you've filled in the missing code, you can test out your individual service using `npm run start` when you are inside the _eventsApi_ subdirectory. You should see a message which looks like this:

    ```bash
    🎀 Events server ready at http://localhost:5002/ 🎫🎉
    ```

    Go to `http://localhost:5002/` in your browser. If promted, click `Query your server`. 
    ![](https://i.imgur.com/JOiWRsP.png)

    Write out a query to test your service. For example, running [this](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A5002%2F&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAKIAeAhnAA4A2CAiroQBQAkCAbsigJJjoivACIBCAJRFgAHSREiAcwQoS3VACEC-Flx79BHNXzCSZc%2BUV2p%2Bsi0SRUEti2AQBnKHgCW1FF4hIzvJWKAAqBNRO5vIUKCjIru5SQRax8UiJNtEWIW7J2XYOiCnyAL4p5eaV8koqRnlmhY7OlaUgADQgnBTeFABG9G4YII1E0iAhNhhjICQADOOysm2lQA) should work.

    You can use `Control+C` to terminate the server.
    
    ![](https://i.imgur.com/ybB2SLx.gif)
    

5) Push your code to your fork.
    ```bash
    git add .
    git commit -m "implement eventsAPI"
    git push origin main
    ```

6) Continue following the instructions on the [graceHopperApi readme](https://github.com/michelleFae/graceHopperApi).
    
## Usage

To use this API, follow the [**Running The Entire API** section](https://github.com/michelleFae/graceHopperApi)

## License

[MIT](htsps://choosealicense.com/licenses/mit/)