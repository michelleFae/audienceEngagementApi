
# ReviewsApi

Reviews Api is an API for Grace Hopper Conference Reviews.

Supported queries:
```graphql
getReviews:[Review]
getReviewById(…):Review
```

Supported entities:
```graphql
type Review @key(fields: "reviewId")
```

## Installation (Required only if you are implementing the eventsAPI)


0) If you haven't already done so, clone https://github.com/michelleFae/graceHopperApi (`git clone https://github.com/michelleFae/graceHopperApi`). Make sure you have run `npm install` at the top level of the directory, as per the instructions in the repository readme.

1) Fork this (reviewsAPI) repository (click the `FORK` button on the top right of github).
    ![](https://i.imgur.com/oJWUOVh.png)

    Then, clone your **forked** repo after navigating into the _graceHopperApi/services_ directory:
    
    e.g. On a terminal, write out:
    ```bash
    cd services
    git clone https://github.com/YOUR-GITHUB-USERNAME/reviewsApi.git
    ```

2) Using the terminal, navigate to the _reviewsApi_ directory in the _services_ folder and run `npm install`:

    ```bash
    cd services/reviewsApi
    npm install # needed if you want to test this service independently from other services
    ```

3) Begin looking through the code in the eventsApi subdirectory. You will need to change the files in the _schema_ and the _resolver_ folders only. It will be helpful to read through the other files in the subdirectory.
    
4) After you've filled in the missing code, you can test out your individual service using `npm run start` when you are inside the _reviewsApi_ subdirectory. You should see a message which looks like this:

    ```bash
    🎀 Reviews server ready at http://localhost:5003/ ✔️⭐
    ```

    Go to `http://localhost:5003/` in your browser. If promted, click `Query your server`. 
    ![](https://i.imgur.com/JOiWRsP.png)

    Write out a query to test your service. For example, running [this](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A5003%2F&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAKIAeAhnAA4A2CAiroQBQAkeCAbgJYIDuASTDoiggCIBCAJRFgAHSREiAcwQoAStz78AQgWEtOvAcNEdtpsLIVLlRKBDiJUi%2B0WM7hb%2B3gooeJBUfZW5kFDkQ%2BzDUbzt3TwEAZ0j49wcnFxQo5QBfKPy0xP58VPSifxRkMAQEOPLipP0AQRQqpBqEMvKM53CcokL3IcGfNU1LfhTbBP9A4LtC3JAAGhAuCjweCgAjeiSMEBmieRBi7wwTkA0AJlO3RUVl3KA) should work.

    You can use `Control+C` to terminate the server.
    
    ![](https://i.imgur.com/TSefM4u.gif)


5) Push your code to your fork.
    ```bash
    git add .
    git commit -m "implement reviewsAPI"
    git push origin main
    ```

6) Continue following the instructions on the [graceHopperApi readme](https://github.com/michelleFae/graceHopperApi).
    
## Usage

To use this API, follow the [**Running The Entire API** section](https://github.com/michelleFae/graceHopperApi)

## License

[MIT](htsps://choosealicense.com/licenses/mit/)