"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.CampGround = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var campGroundSchema = new mongoose_1.default.Schema({
    name: String,
    image: String,
    description: String,
    comments: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Comment'
        }]
});
var CampGround = mongoose_1.default.model('Campground', campGroundSchema);
exports.CampGround = CampGround;
var commentSchema = new mongoose_1.default.Schema({
    text: String,
    author: String,
});
var Comment = mongoose_1.default.model('Comment', commentSchema);
exports.Comment = Comment;
