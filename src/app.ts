import path from 'path';
import express from 'express';
import mongoose from 'mongoose';

import { urlencoded } from 'body-parser';

var app = express();
app.use(urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb://localhost/yelp_camp');

let campGroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
});

let CampGround = mongoose.model('Campground', campGroundSchema);

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
            res.render('index', { campgrounds: allCampgrounds });
        }
    });
});

app.post('/campgrounds', (req, res) => {
    // Create new campground and save it to DB
    CampGround.create({
        name: req.body.name ,
        image: req.body.image,
        description: req.body.description
    }, (err, campground) => {
        if (err) {
            console.log('ERROR!', err);
        } else {
            console.log('CampGround Added!');
            res.redirect('/campgrounds');
        }
    });
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new.ejs');
});

app.get('/campgrounds/:id', (req, res) => {
    // Find campground by id
    CampGround.findById(req.params.id, (err, foudCampground) => {
        if (err) {
            console.log('ERROR!', err);
        } else {
            res.render('show', {ground: foudCampground});
        }
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is up on http://localhost:3000/');
})
