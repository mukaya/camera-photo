const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require ('cors');
const app = express();
const mongoose = require('mongoose');

const {MONGOURI} = require("./config/keys");

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(error)=>{
    if(error) return console.log('erreur de connexion');
    return console.log('la connexion a reussit');
})

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(require('./routes/postPhotoRouter'));


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});