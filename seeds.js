"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDB = void 0;
var mongo_models_1 = require("./models/mongo-models");
var data = [
    {
        name: 'Clouds Rest',
        image: 'https://api.creativecommons.engineering/v1/thumbs/7b2c40b2-eb2c-494e-b6cf-d91affb087e6',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor justo, tristique id aliquet id, lacinia porta est. In et lacus velit. Suspendisse potenti. In hac habitasse platea dictumst. Cras bibendum, lacus at auctor malesuada, purus dui sagittis justo, ut tempus nibh nunc a felis. Cras vel odio justo. Pellentesque nec congue dui. Integer eu sapien ipsum. Donec purus sem, aliquet ultrices diam nec, sodales faucibus erat. Phasellus at velit sit amet metus commodo luctus sit amet in sapien. Aliquam euismod consequat tortor et egestas. Sed mollis ante ac magna consectetur, quis ornare justo lacinia. Fusce tincidunt sapien velit, ac lobortis velit convallis id. Donec efficitur venenatis rhoncus. Quisque id est elit. Aliquam fringilla rutrum turpis id fringilla. Pellentesque gravida urna vel nibh feugiat, sed consequat dolor dignissim. Donec magna risus, dignissim a molestie id, varius in ligula. Pellentesque lobortis dapibus vehicula. Sed luctus efficitur ornare. Aenean sed libero in mi iaculis blandit sit amet quis nunc. Sed a nunc at lacus rutrum pretium. Phasellus in quam ante. '
    },
    {
        name: 'Dessert Mesa',
        image: 'https://api.creativecommons.engineering/v1/thumbs/89763173-8c71-4d19-ac0a-d366dd4a8ac0',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor justo, tristique id aliquet id, lacinia porta est. In et lacus velit. Suspendisse potenti. In hac habitasse platea dictumst. Cras bibendum, lacus at auctor malesuada, purus dui sagittis justo, ut tempus nibh nunc a felis. Cras vel odio justo. Pellentesque nec congue dui. Integer eu sapien ipsum. Donec purus sem, aliquet ultrices diam nec, sodales faucibus erat. Phasellus at velit sit amet metus commodo luctus sit amet in sapien. Aliquam euismod consequat tortor et egestas. Sed mollis ante ac magna consectetur, quis ornare justo lacinia. Fusce tincidunt sapien velit, ac lobortis velit convallis id. Donec efficitur venenatis rhoncus. Quisque id est elit. Aliquam fringilla rutrum turpis id fringilla. Pellentesque gravida urna vel nibh feugiat, sed consequat dolor dignissim. Donec magna risus, dignissim a molestie id, varius in ligula. Pellentesque lobortis dapibus vehicula. Sed luctus efficitur ornare. Aenean sed libero in mi iaculis blandit sit amet quis nunc. Sed a nunc at lacus rutrum pretium. Phasellus in quam ante. '
    },
    {
        name: 'Canyon Floor',
        image: 'https://api.creativecommons.engineering/v1/thumbs/6394965e-8e87-4fe3-b58d-9ad52408a683',
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor justo, tristique id aliquet id, lacinia porta est. In et lacus velit. Suspendisse potenti. In hac habitasse platea dictumst. Cras bibendum, lacus at auctor malesuada, purus dui sagittis justo, ut tempus nibh nunc a felis. Cras vel odio justo. Pellentesque nec congue dui. Integer eu sapien ipsum. Donec purus sem, aliquet ultrices diam nec, sodales faucibus erat. Phasellus at velit sit amet metus commodo luctus sit amet in sapien. Aliquam euismod consequat tortor et egestas. Sed mollis ante ac magna consectetur, quis ornare justo lacinia. Fusce tincidunt sapien velit, ac lobortis velit convallis id. Donec efficitur venenatis rhoncus. Quisque id est elit. Aliquam fringilla rutrum turpis id fringilla. Pellentesque gravida urna vel nibh feugiat, sed consequat dolor dignissim. Donec magna risus, dignissim a molestie id, varius in ligula. Pellentesque lobortis dapibus vehicula. Sed luctus efficitur ornare. Aenean sed libero in mi iaculis blandit sit amet quis nunc. Sed a nunc at lacus rutrum pretium. Phasellus in quam ante.'
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
