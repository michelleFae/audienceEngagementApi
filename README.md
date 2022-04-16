# Audience Engagement Api

Root directory for the Audience Engagement Api for conferences. We store user and event information. Users can attend events and record activity for each event.


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

2) After you're inside the _audienceEngagementApi_ subdirectory, run `npm install` on the command line. You will also need to run this command everywhere a package.json file exists (e.g. in federation_server, react-app, and subscription_server, as well as for each serivce in federation_server/services)


## Running The Entire API
0) Navigate to the root of the _audienceEngagementApi_ directory. Next, navigate to federation_server
    ```bash
    cd federation_server
    ```
0) Bring up a redis instance.
    ```bash
    redis-server
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

    Write out a query to test your service and click `Query`. For example, running [this]() should work.
    
    You can use `Control+C` to terminate the server & gateway.
    ![](https://i.imgur.com/wplk28N.png)

5) Navigate to the subscription_server/src directory and bring up that service.
    ```bash
    cd ../subscription_server/src
    npm run start
    ```
6) You can test the subscriptions by bringing up the react app.
    ```bash
    cd ../../react-app
    npm run start
    ```
    
7) Practice your federation and subscription knowledge. try changing the schema of an already implemented subgraph in any way you choose. You can add:
- mutations to delete users / events / reactions, 
- queries to get the newest user or the user with the most/least reactions
- subscriptions for the newest workshop event, poster event, etc.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements
Special thanks to Apollo Graph Solutions for creating this federation-subscription demo: https://github.com/apollosolutions/federation-subscription-tools . Our subscription server and react app are heavily modeled off of this example.