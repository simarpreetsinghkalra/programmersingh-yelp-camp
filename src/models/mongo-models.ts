import { IUser, IComment } from './models';
import mongoose, { Schema } from 'mongoose';

const campGroundSchema: Schema = new Schema({
    name: String,
    image: String,
    description: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});


const CampGround = mongoose.model<IUser>('Campground', campGroundSchema);


const commentSchema: Schema = new Schema({
    text: String,
    author: String,
});

const Comment = mongoose.model<IComment>('Comment', commentSchema);
export {
    CampGround,
    Comment
};