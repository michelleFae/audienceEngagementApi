# graceHopperApi

Root directory for the graceHopperApi for conferences.

## General Note
If you are attending this workshop in person, feel free to pair program with someone sitting next to you. Just ask them: "Hey there! Would you like to program this together?". It would help you learn Apollo Federation and grow your network at the same time! If you are not attending this in person - do not worry! This project is very doable even if you code it out by yourself!

## Installation

0) If you haven't already done so, use the terminal/command line to clone this repo:
    ```bash
    git clone https://github.com/michelleFae/graceHopperApi.git
    cd graceHopperApi
    ```
    
1) Check that you have npm installed using `npm -v` on the command line / terminal. 
If you do not, follow these instructions to install npm:
- For windows: https://phoenixnap.com/kb/install-node-js-npm-on-windows
- For macOs: https://phoenixnap.com/kb/install-npm-mac
- For centOs: https://phoenixnap.com/kb/install-node-js-npm-centos
- For ubuntu: https://phoenixnap.com/kb/install-latest-node-js-and-nmp-on-ubuntu

2) After you're inside the _graceHopperApi_ subdirectory, run `npm install` on the command line.

3) Decide which API you would like to implement. Proceed to the relevant repo link, following the instructions on the readme there.
    

    | API | Difficulty-Level | Recommendation | Link to repo |
    | -------- | ---------- | ---- | ------- |
    | <div style="color:green">AttendeesApi</div>    | <div style="color:green">🟢 Easy</div> | <div style="color:green">Recommended if you do not know Javascript / are not too comfortable coding. You will be implementing your own entity but not using entities from other subgraphs.</div>     | [Here](https://github.com/michelleFae/attendeesApi)     |
    | <div style="color:orange">EventsApi <div> | <div style="color:orange">🟠 Medium</div> | <div style="color:orange">Recommended if you know basic Javascript. Fill in only parts of the resolver and schema with the help of guiding comments.</div>| [Here](https://github.com/michelleFae/eventsApi)|
    | <div style="color:red">ReviewsApi</div>    | <div style="color:red">🔴 Harder</div> | <div style="color:red">Recommended if you know vanilla GraphQL and/or would like to try implementing the resolver and the schema, with less starter code provided</div> | [Here](https://github.com/michelleFae/reviewsApi)     |


4) After implementing your own api (done in step 3) test it out with other subgraphs. For example, if you implemented the _EventsApi_, find an implemented git fork for the _AttendeesApi_ and for the _ReviewsApi_. Find other subgraph branch names from [this spreadsheet](https://docs.google.com/spreadsheets/d/1dvTavqVvkwyG3IbhhRciA376hHxVKvFfnhXGbZZLX7k/edit#gid=0). Then go into the _services_ directory and clone those repos and check out those branches. For example:
    ```bash
    cd ../services

    # If you did not implement the attendeesApi:
    git clone LINK_FROM_SPREADSHEET # Example: git clone https://github.com/michFae2/attendeesApi.git

    # If you did not implement the eventsApi:
    git clone LINK_FROM_SPREADSHEET # Example: git clone https://github.com/michFae2/eventsApi.git 

    # If you did not implement the reviewsApi:
    git clone LINK_FROM_SPREADSHEET # Example: git clone https://github.com/michFae2/reviewsApi.git
    ```

5) Proceed to *Running The Entire API* section below.

## Running The Entire API
1) Navigate to the root of the _graceHopperApi_ directory. 
    ```bash
    cd ..
    ```

2) Bring up all service: 
    ```bash
    npm run start-services
    ```
    
    You should see:
    ```bash
    [start-service-*attendees-api] 🎀 Attendees server ready at http://localhost:5001/ 👩‍💻🧑‍💻
    [start-service-*events-api] 🎀 Events server ready at http://localhost:5002/ 🎫🎉
    [start-service-*reviews-api] 🎀 Reviews server ready at http://localhost:5003/ ✔️⭐
    ```

3) In another terminal, bring up the gateway:
    ```bash
    npm run start-gateway
    ```
    You should see:
    ```bash
    🎀 Gateway ready at http://localhost:4000/ 🏁
    ```
    
4) Open _http://localhost:4000/_ in a browser. If promted, click `Query your server`. 
    ![](https://i.imgur.com/JOiWRsP.png)

    Write out a query to test your service and click `Query`. For example, running [this](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A4000%2F&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAIq6EAUAJAIYorJgIICSY6RLAIgIQA0RKggBuyFGw7d%2BgvCICWCAO4TOvAJRFgAHSREiAcwQoAgvUbMAQgTYU6DJE1btBd8043bdeoq4fM2Ot4%2BhoHeKAQADgihAL6hhigAoqKoVjYiYipCKeJgHqF6SDSIBT5mfggAzpqlejQhXkFFJY1Eca2ywgqK1Z5BelAQcIiotUSd3fg1rU3F0TNtpe16ywZGpvaOvaXN8yvxRsli2627sQcoAErySmlgFBNKWY-KedNBg8NipS9Tff1nBbhKJjF6VKwbNzvfoDIYjFBjVb7LyrBLXLpKE5BPB0ORIfTnJAxEB8EDCGh4OQ0ABGABsqhgQP8tCBfI4AhgiCzjABmFl8UIsjKoDkcFmJACs-MFIBeoq5IEuAEYWTpBUSQDEgA) should work.
    
    You can use `Control+C` to terminate the server & gateway.
    ![](https://i.imgur.com/wplk28N.png)

5) After you are sure your graceHopperApi for conferences works, add the link of your fork to [this spreadsheet](https://docs.google.com/spreadsheets/d/1dvTavqVvkwyG3IbhhRciA376hHxVKvFfnhXGbZZLX7k/edit#gid=0), under the relevant section.

    ![](https://i.imgur.com/9fonnEf.gif)
    
6) If you finish early, you could:
- Delete a folder for a subgraph you did not implement (e.g. `rm -rf reviewsApi`) and try implementing it (go back to step 3 from Installation).
- try changing the schema of an already implemented subgraph in any way you choose. You can add mutations as well.
- Read through the solution implmenation for the [attendeesApi](https://github.com/michFae2/attendeesApi), the [eventsApi](https://github.com/michFae2/eventsApi), or the [reviewsApi](https://github.com/michFae2/reviewsApi).
- Help others around you / on the virtual call

## License
[MIT](https://choosealicense.com/licenses/mit/)