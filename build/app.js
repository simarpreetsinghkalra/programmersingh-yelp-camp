"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var app = express_1.default();
app.use(body_parser_1.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
var campgrounds = [
    { name: 'jammu Kashmir', image: 'https://api.creativecommons.engineering/v1/thumbs/6fc611d6-033b-4332-86d4-c9cd2d070772' },
    { name: 'Shimla', image: 'https://api.creativecommons.engineering/v1/thumbs/cb1b3449-6af7-4bb7-9ad3-411eae0ef769' },
    { name: 'Solan', image: 'https://api.creativecommons.engineering/v1/thumbs/717d0a63-1e57-4769-96fc-8b317f3a9dbf' }
];
app.get('/', function (req, res) {
    res.render('home');
});
app.get('/campgrounds', function (req, res) {
    res.render('campgrounds', { campgrounds: campgrounds });
});
app.post('/campgrounds', function (req, res) {
    campgrounds.push({ name: req.body.name, image: req.body.image });
    res.redirect('/campgrounds');
});
app.get('/campgrounds/new', function (req, res) {
    res.render('new.ejs');
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Server is up on http://localhost:3000/');
});
