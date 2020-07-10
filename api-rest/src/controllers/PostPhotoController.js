const PostPhoto = require('../models/postPhotoModel');

class PostPhotoController {
    static postPhoto(){
        return async (request, response, next)=>{
            
            const {filename} = request.file;
            const goodFileName = `${filename}.png`;
            if(!goodFileName)return response.status(422).json({error:'file required'});
            const filePost = new PostPhoto({photo:goodFileName});

            await filePost.save()
            .then(result=>response.json(result))
            .catch(error=>console.log(error));
        }
    }
    static displayPhoto(){
        return async (request, response, next)=>{
            await this.postPhoto.find()
            .then(result=>response.json(result))
            .catch(error=>console.log(error));
        }
    }
}

module.exports = PostPhotoController;