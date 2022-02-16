import axios from "axios";
import { useState } from "react";

export default function CreateTweet() {
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [userId, setUserId] = useState('');

    const TweetCreated = (Tweet) =>
    {
            axios
                .post('http://127.0.0.1:8000/api/tweets', {
                    body: Tweet.body,
                    image: Tweet.image,
                    user_id: Tweet.userId,
                    likes: 0,
                    dislikes: 0
                })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err.response.data);
                })
    }

    const onSubmit = (e) =>
    {
        e.preventDefault();
        // Kör
        TweetCreated({ body, image, userId })

    }
    return (
        <div className="bg-gray-600">
            <form className="flex flex-col gap-5 bg-gray-800" onSubmit={onSubmit}>
                <label>Body</label>
                <textarea 
                    type="textarea"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    cols="30" 
                    rows="10"
                    className="border border-blue-600"
                    >
                    
                </textarea>
                <label>Image</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="border border-blue-600"
                    />
                <label>Author</label>
                <input 
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="border border-blue-600"
                />
                <label>Image needs to be from <a target="_blank" href='https://imgur.com/'>https://imgur.com/</a></label>
                <button type="submit">Create tweet</button>
            </form>
        </div>
    )
}