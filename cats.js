"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost/cat_app');
// Define Schema
var catSchema = new mongoose_1.default.Schema({
    name: String,
    age: Number,
    temperament: String,
});
var Cat = mongoose_1.default.model('Cat', catSchema);
// Add a new cat
// let billo = new Cat({
//     name: 'Mrs. Norris',
//     age: 7,
//     temperament: 'Evil',
// })
// billo.save((err, cat) => {
//     if (err) {
//         console.log('ERROR', err)
//     } else {
//         console.log('Cat Saved!')
//         console.log(cat)
//     }
// })
Cat.create({
    name: 'Snow White',
    age: 15,
    temperament: 'Bland',
}, function (err, cat) {
    if (err) {
        console.log('ERROR', err);
    }
    else {
        console.log('Cat Saved!');
        console.log(cat);
    }
});
// Retrive all cats
Cat.find({}, function (err, cats) {
    if (err) {
        console.log('Error', err);
    }
    else {
        console.log('All the cats');
        console.log(cats);
    }
});
