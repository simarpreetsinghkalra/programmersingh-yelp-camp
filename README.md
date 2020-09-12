# YelpCamp App from Colt Steele Tutorial
#### using ES6/Typescript
LIVE DEMO: https://programmersingh-yelp-camp.herokuapp.com/

1. Clone Repo
2. Run command `npm i`
3. Run `npm run mybuild`



## DAY 1 (2020/09/05)
- Added following pages
    + Home
    + CampGround Listing
    + Add New CampGround
    + Header/Footer
- Added Some design using inline css and Bootstrap 3
- Configured Routes
- Dummy data is added right now.

## DAY 2 (2020/09/06)
- Configured MongoDB on my system
- Tested it using TypeScript and ES6 in file _src/cats.ts_

## DAY 3 (2020/09/07)
- Added MongoDB suppport in YelpCamp Project
- Added page Show Campground (campgrounds/:id) to get the details of particular campground
- Added Restful Routes

#### RESTFUL ROUTES

|name       |url                |verb       |description                |
|-----------|-------------------|-----------|---------------------------|
|INDEX      |/campgrounds       |GET        |DisplayList of grounds     |
|NEW        |/campgrounds/new   |GET        |Displayform to add ground  |
|CREATE     |/campgrounds       |POST       |Add newground to DB        |
|SHOW       |/campgrounds/:id   |GET        |Displayground details by id|

## DAY 4/5 (2020/09/08 - 2020/09/9)
Whole work bout RESTful Routing in Repo https://github.com/simarpreetsighkalra/programmersingh-blogsite

## DAY 6 (2020/09/10)
- Studied in MongoDB and how they are achieved (by Embedding data and Refernecing data.)
- Studied about **Data Models** for MongoDB and implemented it in this project for campground using TypeScript. _(src/models/mongo-mdels.ts)_

## DAY 7 (2020/09/11)
- Tried making **association** of _Campgrounds_ and _Comments_ by **Referencing** comment schema into campground.
- Added a seed script _(/src/seed.ts)_ to delete all data and autogenerate some data for testing, whenever I restart the server.

## DAY 8 (2020/09/12)
- Did some research and changed process of using Mongoose with TypeScript to new one. Added new file _src/models/models.ts_ which will contain data models being used by me.
- Added RESTful Routes for Comments on Campgrounds.
- Also implemented the concept of **Nested Routes** in support of previous point.
- Moved campground related .ejs file to _/views/campgrounds/_ and added comments related files to _/views/comments/_ directories.
- Completed the Add New Comment functionality.
- Added some design to improve the looks of front end.
 
 #### RESTFUL ROUTES ADDED

|name       |url                        |verb       |description                |
|-----------|---------------------------|-----------|---------------------------|
|NEW        |/campgrounds/:id/comments  |GET        |Displayform to add ground  |
|CREATE     |/campgrounds/:id/comments  |POST       |Add newground to DB        |

PS. I am not concentrating on design right now.
