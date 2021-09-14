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

## What does this walking skeleton do?
It returns data from a containerised postgres database, to a React front end via a spring boot webservice when the user clicks a button on the front end.