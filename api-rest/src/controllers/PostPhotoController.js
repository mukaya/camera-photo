const PostPhoto = require('../models/postPhotoModel');
class PostPhotoController {
    static postPhoto(){
        return async (request, response, next)=>{
            console.log(request.file);
            const {filename} = request.file;
            if(!filename)return response.status(422).json({error:'file required'});           
            const filePost = new PostPhoto({photo:filename});

            await filePost.save()
            .then(result=>response.json(result))
            .catch(error=>console.log(error));
        }
    }
    static displayPhoto(){
        return async (request, response, next)=>{
            await PostPhoto.find()
            .then(result=>response.json(result))
            .catch(error=>console.log(error));
        }
    }
}

module.exports = PostPhotoController;