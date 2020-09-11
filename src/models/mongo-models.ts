import mongoose from 'mongoose';

const campGroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

const CampGround = mongoose.model('Campground', campGroundSchema);


const commentSchema = new mongoose.Schema({
    text: String,
    author: String,
});

const Comment = mongoose.model('Comment', commentSchema);
export {
    CampGround,
    Comment
};