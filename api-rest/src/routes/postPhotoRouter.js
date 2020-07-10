const express = require('express');
const Router = express.Router();
const PostPhotoController = require('../controllers/PostPhotoController');
const multer = require("multer");
const upoadConfig = require("../middlewere/upload");
const upload = multer(upoadConfig);

Router.post('/api/photos',upload.single('filename'),PostPhotoController.postPhoto());
Router.get('/api/photos', PostPhotoController.displayPhoto());

module.exports = Router;