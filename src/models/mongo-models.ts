import mongoose from 'mongoose';

const campGroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
});

const CampGround = mongoose.model('Campground', campGroundSchema);

export {
    CampGround
};