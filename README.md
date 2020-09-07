# YelpCamp App from Colt Steele Tutorial
#### using ES6/Typescript

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

## DAY 3
- Added MongoDB suppport in YelpCamp Project
- Added page Show Campground (campgrounds/:id) to get the details of particular campground
- RESTFUL ROUTES
    **name**    **url**             **verb**    **description**
    ========================================================================
    INDEX       /campgrounds        GET         Display List of grounds
    NEW         /campgrounds/new    GET         Display form to add ground
    CREATE      /campgrounds        POST        Add new ground to DB
    SHOW        /campgrounds/:id    GET         Display ground details by id

PS. I am not concentrating on design right now.

