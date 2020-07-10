import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { CameraFeed } from './components/camera-feed';

const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post("http://localhost:5000/api/photos",formData)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err); 
    })
};
function App() {
    return (
        <div className="App">
            <h1>Image capture test</h1>
            <CameraFeed sendFile={uploadImage} />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

