import { useState, useEffect as onLoad} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditUserPost() {
    const [userTweet, setUserTweet] = useState([]);
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    let id = useParams().tweet_Id;
    onLoad(() => {

        axios
        .get(`http://127.0.0.1:8000/api/tweet/${id}`)
        .then(res => {
            setUserTweet(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[]); 
    

    const onUpdate = (updateTweet) => {
        console.log(updateTweet)  
        
        axios
            .put(`http://127.0.0.1:8000/api/tweets/${id}`, {
                body: updateTweet.body,
                image: updateTweet.image
            })
            .then(function (res) {
                // console.log(res.data);
                navigate(-1);
            })
            .catch(err => {
                console.log(err.response.data);
            })
        ;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onUpdate({ body, image })

    }

    return (
        <div>
            form for updating
            <form onSubmit={onSubmit}>
                <label>Body</label>
                <textarea 
                    type="textarea"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    cols="30" 
                    rows="10">
                    
                </textarea>
                <label>Image</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    />
                <label>Image needs to be from <a target="_blank" href='https://imgur.com/'>https://imgur.com/</a></label>
                <button type="submit">Update tweet</button>
            </form>
        </div>
    );
}