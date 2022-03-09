import {model, Schema} from "mongoose";

const adminModel = new Schema<any> ( {
    username: {type: String, required: true},
    password: {type: String, required: true}
} )

export default model ( "Admin", adminModel )