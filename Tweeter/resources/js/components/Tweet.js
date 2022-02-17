import axios from 'axios';
import {React, useState} from 'react';
import { useNavigate} from 'react-router-dom';

export default function Tweet({tweet_id, user_id, body, image, onTweetClick}) {
    const [showDelete, setShowDelete] = useState(false);

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `tweet/${tweet_id}`;
        navigate(path);
    } 

    const deleteTweet = () =>{
        console.log(tweet_id + ' deleted')
        
        axios
            .delete(`http://127.0.0.1:8000/api/tweets/${tweet_id}`)
            .then(res =>{
                console.log(res)
                window.location.reload(false);
                
            })
            .catch(err =>{
                console.log(err.response.data);
            })
    }

    return (
        <div id={tweet_id} className="w-full flex flex-col gap-2 p-4 rounded-md border-2">
            <div className="relative h-5 w-full">
                <div className="absolute right-0 flex flex-row gap-2">
                    {showDelete && <div className="bg-red-600">Do you want to delete this tweet? <i onClick={deleteTweet} className="fas fa-times text-red-800 font-bold cursor-pointer"></i></div>}
                    <div className="" onClick={() => setShowDelete(!showDelete)}>{showDelete ? <i className="fal fa-check text-green-800 font-bold cursour-pointer"></i> : <i className="fas fa-times text-red-800 font-bold cursor-pointer"></i>}</div>
                </div>
            </div>
            <div className="flex flex-col gap-2" onClick={() => onTweetClick(tweet_id)}>
                {/* Image */}
                <img className="w-1/2 mx-auto" src={image} alt="En stor bild på en anka"/>
                {/* Text content */}
                <div>
                    <p className="text-s">{body}</p>
                </div>
                {/* Like share comment */}
                <div className="flex">
                    <span className="ml-4"><i className="fas fa-thumbs-up"></i></span>
                    <span className="mx-auto"><i className="far fa-comments"></i></span>
                    <span className="mr-4"><i className="fas fa-thumbs-down"></i></span>
                </div>
            </div>
        </div>
    );
}




