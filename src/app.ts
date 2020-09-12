import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import { urlencoded } from 'body-parser';

import { envVars } from './env';

// import models for MongoDB
import { CampGround, Comment } from './models/mongo-models';

//import seedDB function from seed.ts
import { seedDB } from './seeds';

var app = express();
app.use(urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

mongoose.connect(envVars.databaseUrl);
seedDB();



app.get('/', (req, res) => {
    res.render('home');
});

// SHOW - shows more info about campgrounds
app.get('/campgrounds', (req, res) => {
    // Get camppgrounds from DB
    CampGround.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log('ERROR!', err);
        } else {
            res.render('campgrounds/index', { campgrounds: allCampgrounds });
        }
    });
});

app.post('/campgrounds', (req, res) => {
    // Create new campground and save it to DB
    CampGround.create({
        name: req.body.name ,
        image: req.body.image,
        description: req.body.description
    }, (err: any, campground: any) => {
        if (err) {
            console.log('ERROR!', err);
        } else {
            console.log('CampGround Added!');
            res.redirect(`/campgrounds`);
        }
    });
});

app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});

app.get('/campgrounds/:id', (req, res) => {
    // Find campground by id
    CampGround.findById(req.params.id).populate('comments').exec((err, foudCampground) => {
        if (err) {
            console.log('ERROR!', err);
        } else {
            res.render('campgrounds/show', {ground: foudCampground});
        }
    });
});

// ======================================================
// ==================COMMENTS ROUTES====================
// ======================================================

app.get('/campgrounds/:id/comments/new', (req, res) => {
    // Find campground by ID
    CampGround.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
        } else {
            res.render('comments/new', { campground });
        }
    });
});

app.post('/campgrounds/:id/comments', (req, res) => {
    // Find campground by ID
    CampGround.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
            res.redirect('/campgrounds/:id');
        } else {
            Comment.create(req.body.comment, (err: any, comment: any) => {
                if (err) {
                    console.log(err);
                } else {
                    if (campground) {
                        campground?.comments?.push(comment)
                        campground.save();
                        res.redirect(`/campgrounds/${campground._id}`);
                    }
                }
            });
        }
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is up on http://localhost:3000/');
})
