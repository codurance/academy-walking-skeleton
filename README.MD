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
It's a colllection of lean services that solve some problem from end to end. It represents the minimal implementation that will produce some valuable outcome. 

## How to run this application

Use `Makefile` to start or stop PostgreSQL database. When database is up and running, cd into `simpleWebservice` folder
and execute `./gradlew bootRun`.
