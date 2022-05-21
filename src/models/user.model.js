const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },

    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }

}, { strict: false,timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
