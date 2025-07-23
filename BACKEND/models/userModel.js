import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
    },
},{timestamps: true});

const userModel = mongoose.models.user || mongoose.model("User", userSchema);

export default userModel;