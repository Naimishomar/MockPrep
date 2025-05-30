const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true 
    },
    contactNumber:{
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        default: ''
    },
    history:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
},{timestamps: true})

const User = mongoose.model('User', userSchema);
module.exports = User;