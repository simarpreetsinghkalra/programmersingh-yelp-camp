"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = require("body-parser");
var env_1 = require("./env");
// import models for MongoDB
var mongo_models_1 = require("./models/mongo-models");
//import seedDB function from seed.ts
var seeds_1 = require("./seeds");
seeds_1.seedDB();
var app = express_1.default();
app.use(body_parser_1.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
mongoose_1.default.connect(env_1.envVars.databaseUrl);
app.get('/', function (req, res) {
    res.render('home');
});
// SHOW - shows more info about campgrounds
app.get('/campgrounds', function (req, res) {
    // Get camppgrounds from DB
    mongo_models_1.CampGround.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log('ERROR!', err);
        }
        else {
            res.render('index', { campgrounds: allCampgrounds });
        }
    });
});
app.post('/campgrounds', function (req, res) {
    // Create new campground and save it to DB
    mongo_models_1.CampGround.create({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description
    }, function (err, campground) {
        if (err) {
            console.log('ERROR!', err);
        }
        else {
            console.log('CampGround Added!');
            res.redirect('/campgrounds');
        }
    });
});
app.get('/campgrounds/new', function (req, res) {
    res.render('new.ejs');
});
app.get('/campgrounds/:id', function (req, res) {
    // Find campground by id
    mongo_models_1.CampGround.findById(req.params.id).populate('comments').exec(function (err, foudCampground) {
        if (err) {
            console.log('ERROR!', err);
        }
        else {
            console.log(foudCampground);
            res.render('show', { ground: foudCampground });
        }
    });
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Server is up on http://localhost:3000/');
});
