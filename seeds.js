"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDB = void 0;
var mongo_models_1 = require("./models/mongo-models");
var data = [
    {
        name: 'Clouds Rest',
        image: 'https://api.creativecommons.engineering/v1/thumbs/7b2c40b2-eb2c-494e-b6cf-d91affb087e6',
        description: 'Blah blah blah'
    },
    {
        name: 'Dessert Mesa',
        image: 'https://api.creativecommons.engineering/v1/thumbs/89763173-8c71-4d19-ac0a-d366dd4a8ac0',
        description: 'Blah blah blah'
    },
    {
        name: 'Canyon Floor',
        image: 'https://api.creativecommons.engineering/v1/thumbs/6394965e-8e87-4fe3-b58d-9ad52408a683',
        description: 'Blah blah blah'
    },
];
function seedDB() {
    mongo_models_1.CampGround.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Removed Campgrounds...');
        data.forEach(function (seed) {
            mongo_models_1.CampGround.create(seed, function (err, campground) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('Added a campground');
                    console.log(campground);
                    // Create Comment
                    mongo_models_1.Comment.create({
                        text: 'This place it great, I wish there was internet..!',
                        author: 'Homer'
                    }, function (err, comment) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log('Created a comment');
                        }
                    });
                }
            });
        });
    });
}
exports.seedDB = seedDB;
