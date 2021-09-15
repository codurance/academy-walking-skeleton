# Walking Skeleton
This is a monorepo comprising of code that creates a React front end, a spring boot backend and a postgres database using docker

Disclaimer: This is not intended to be a production hardened system but a framwork around which a simple application can be created

## Prerequisites
* Docker Desktop
* Java 11
* NodeJS
* An RDBMS eg. DBeaver, DbSchema etc... (optional)
* A http client eg. Postman (optional)

## What is a walking skeleton?
It's a colllection of lean services that solve some problem from end to end. It represents a minimal implementation that will produce some valuable outcome. 

## How to run this application

* In the project root, run the command `make` to get the postgres image and start the container that will hold it (the database will run on port `5432`)
* `cd` into the `simpleWebservice` directory
* run the command `./gradlew bootRun` (the service should run on port `8080` by default)
* We can verify this was successful by going to `http://localhost:8080/getUsers` using a http client or more simply via a browser
* In another terminal `cd` into the `simpleFrontEnd` directory
* If this is our first time running the service we need to retrieve our dependencies using `npm install` or `npm i`
* We then run the front end locally by using the command `npm start`
* This should automatically open a browser on port `http://localhost:3000` where we will see a simple webpage
* If we click on the button it will make a `get` request to our locally running webservice where we retrieve data and display it on the page

## Notes
* The ports we use are hardcoded, so if we wish to run these services on other ports we will need to update our code accordingly
* The optional RDBMS is suggested if you wish to connect directly to the database running on port `5432`
* The optional http client is suggested if we wish to more closely inspect the responses we get from our running webservice 
