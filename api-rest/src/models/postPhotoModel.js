const mongoose = require('mongoose');

const postPhotoSchema = new mongoose.Schema({
    photo:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('PostPhoto', postPhotoSchema);