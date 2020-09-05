import path from 'path';
import express from 'express';
import { urlencoded } from 'body-parser';

var app = express();
app.use(urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var campgrounds = [
    {name: 'jammu Kashmir', image: 'https://api.creativecommons.engineering/v1/thumbs/6fc611d6-033b-4332-86d4-c9cd2d070772'},
    {name: 'Shimla', image: 'https://api.creativecommons.engineering/v1/thumbs/cb1b3449-6af7-4bb7-9ad3-411eae0ef769'},
    {name: 'Solan', image: 'https://api.creativecommons.engineering/v1/thumbs/717d0a63-1e57-4769-96fc-8b317f3a9dbf'}
];

app.get('/',(req, res) => {
    res.render('home');
});

app.get('/campgrounds',(req, res) => {
    res.render('campgrounds', {campgrounds});
});

app.post('/campgrounds', (req, res) => {
    campgrounds.push({ name: req.body.name, image: req.body.image });
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new.ejs');
});

app.listen(3000, () => {
    console.log('Server is up on http://localhost:3000/');
})
