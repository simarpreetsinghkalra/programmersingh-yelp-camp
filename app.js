"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = require("body-parser");
var app = express_1.default();
app.use(body_parser_1.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
mongoose_1.default.connect('mongodb://localhost/yelp_camp');
var campGroundSchema = new mongoose_1.default.Schema({
    name: String,
    image: String,
    description: String,
});
var CampGround = mongoose_1.default.model('Campground', campGroundSchema);
app.get('/', function (req, res) {
    res.render('home');
});
// SHOW - shows more info about campgrounds
app.get('/campgrounds', function (req, res) {
    // Get camppgrounds from DB
    CampGround.find({}, function (err, allCampgrounds) {
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
    CampGround.create({
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
    CampGround.findById(req.params.id, function (err, foudCampground) {
        if (err) {
            console.log('ERROR!', err);
        }
        else {
            res.render('show', { ground: foudCampground });
        }
    });
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Server is up on http://localhost:3000/');
});
