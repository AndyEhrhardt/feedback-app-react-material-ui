# Project Name

Simple Feeback Entry App

## Demo

![Alt Text](https://media2.giphy.com/media/UggB1oajKw79TJhCxh/giphy.gif?cid=790b761102f0cb2d7906bb220322ce52688dc4d23328d72e&rid=giphy.gif)

## Description

This app collects ratings and comments from a user. Each item the user enters is on it's own page. The user's inputs are intially stored in a redux store meaning the user has the ability to go back and change their response to any item. The user will also see their inital entry when navigating to a previous entry. 

The user provides ratings on a scale on 3 different items; feeling, support and understanding. The user is then asked for any comments and if they would like to request a 1:1. After the comments page the user is able to review all their feedback, at which point they may navigate back and change any reponses they'd like. 

Once they hit submit on the review page, their reponses are posted via axios to a database. At this point the user is thanked for their input and asked if they would like to leave more feedback. 

This data in the database is accessible through a get request on an admin page, and is viewed through a table. On this table the admin is able to update if any feedback needs review, through a put request, and also delete any feedback from the database. 


## Set Up

Use the database information provided in the data.sql file to create an sql database. Make sure the database is named "prime_feedback"
npm install
npm run server
*in a new terminal tab*
npm run client
