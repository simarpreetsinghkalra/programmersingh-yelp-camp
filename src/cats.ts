import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/cat_app')

// Define Schema
let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String,
})

let Cat = mongoose.model('Cat', catSchema)

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
}, (err, cat) => {
    if (err) {
        console.log('ERROR', err)
    } else {
        console.log('Cat Saved!')
        console.log(cat)
    }
})

// Retrive all cats

Cat.find({}, (err, cats) => {
    if (err) {
        console.log('Error', err)
    } else {
        console.log('All the cats')
        console.log(cats)
    }
})