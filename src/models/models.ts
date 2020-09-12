import { Document } from "mongoose";

export interface IUser extends Document {
    name: String;
    image: String;
    description: String;
    comments?: IComment['_id'][];
}

export interface IComment extends Document {
    text: String;
    author: String;
}