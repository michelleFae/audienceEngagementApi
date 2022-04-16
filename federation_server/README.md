# Audience Engagement Api

Root directory for the Audience Engagement Api for conferences.


## Installation

0) If you haven't already done so, use the terminal/command line to clone this repo:
    ```bash
    git clone https://github.com/michelleFae/audienceEngagementApi.git
    cd audienceEngagementApi
    ```
    
1) Check that you have npm installed using `npm -v` on the command line / terminal. 
If you do not, follow these instructions to install npm:
- For windows: https://phoenixnap.com/kb/install-node-js-npm-on-windows
- For macOs: https://phoenixnap.com/kb/install-npm-mac
- For centOs: https://phoenixnap.com/kb/install-node-js-npm-centos
- For ubuntu: https://phoenixnap.com/kb/install-latest-node-js-and-nmp-on-ubuntu

2) After you're inside the _audienceEngagementApi_ subdirectory, run `npm install` on the command line.

3) Here are the subgraphs in the API, along with a link to their repos:
    

    | API | Link to repo |
    | -------- | ------- |
    | 🟢 <div style="color:green">UsersApi</div>   | [Here](https://github.com/michelleFae/usersApi)     |
    | 🟠 <div style="color:orange">EventsApi <div> | [Here](https://github.com/michelleFae/eventsApi)|
    | 🔴 <div style="color:red">UserActivityApi</div> | [Here](https://github.com/michelleFae/userActivityApi)     |


4) You will need to clone each API:
    ```bash
    cd ../services

    # If you did not implement the usersApi:
    git clone UsersApi # Example: git clone https://github.com/michFae2/usersApi.git

    # If you did not implement the eventsApi:
    git clone EventsApi # Example: git clone https://github.com/michFae2/eventsApi.git 

    # If you did not implement the userActivityApi:
    git clone UserActivityApi # Example: git clone https://github.com/michFae2/userActivityApi.git
    ```

5) Proceed to *Running The Entire API* section below.

## Running The Entire API
1) Navigate to the root of the _audienceEngagementApi_ directory. 
    ```bash
    cd ..
    ```

2) Bring up all service: 
    ```bash
    npm run start-services
    ```
    
    You should see:
    ```bash
    [start-service-*users-api] 🎀 Users server ready at http://localhost:5001/ 👩‍💻🧑‍💻
    [start-service-*events-api] 🎀 Events server ready at http://localhost:5002/ 🎫🎉
    [start-service-*user-activity-api] 🎀 User Activity server ready at http://localhost:5003/ ✔️⭐
    ```

3) In another terminal, bring up the gateway:
    ```bash
    npm run start-gateway
    ```
    You should see:
    ```bash
    🎀 Gateway ready at http://localhost:5000/ 🏁
    ```
    
4) Open _http://localhost:5000/_ in a browser. If promted, click `Query your server`. 
    ![](https://i.imgur.com/JOiWRsP.png)

    Write out a query to test your service and click `Query`. For example, running [this](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A5000%2F&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAIq6EAUAJAIYorJgIICSY6RLAIgIQA0RKggBuyFGw7d%2BgvCICWCAO4TOvAJRFgAHSREiAcwQoAgvUbMAQgTYU6DJE1btBd8043bdeoq4fM2Ot4%2BhoHeKAQADgihAL6hhigAoqKoVjYiYipCKeJgHqF6SDSIBT5mfggAzpqlejQhXkFFJY1Eca2ywgqK1Z5BelAQcIiotUSd3fg1rU3F0TNtpe16ywZGpvaOvaXN8yvxRsli2627sQcoAErySmlgFBNKWY-KedNBg8NipS9Tff1nBbhKJjF6VKwbNzvfoDIYjFBjVb7LyrBLXLpKE5BPB0ORIfTnJAxEB8EDCGh4OQ0ABGABsqhgQP8tCBfI4AhgiCzjABmFl8UIsjKoDkcFmJACs-MFIBeoq5IEuAEYWTpBUSQDEgA) should work.
    
    You can use `Control+C` to terminate the server & gateway.
    ![](https://i.imgur.com/wplk28N.png)

5) After you are sure your audienceEngagementApi for conferences works, add the link of your fork to [this spreadsheet](https://docs.google.com/spreadsheets/d/1dvTavqVvkwyG3IbhhRciA376hHxVKvFfnhXGbZZLX7k/edit#gid=0), under the relevant section.

    ![](https://i.imgur.com/9fonnEf.gif)
    
6) Practice your federation and subscription knowledge. try changing the schema of an already implemented subgraph in any way you choose. You can add:
- mutations to delete users / events / reactions, 
- queries to get the newest user or the user with the most/least reactions
- subscriptions for the newest workshop event, poster event, etc.

## License
[MIT](https://choosealicense.com/licenses/mit/)