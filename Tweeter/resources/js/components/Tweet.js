import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Tweet({tweet_id, body, image, onTweetClick}) {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `tweet/${tweet_id}`;
        navigate(path);
    } 

    return (
        <div id={tweet_id} className="bg-gray-200 w-full flex flex-col gap-2 p-4 rounded-md" onClick={() => onTweetClick(tweet_id)}>
            {/* Text content */}
            <div>
                <p className="text-xs">{body}</p>
            </div>
            {/* Image */}
            <img className="bg-green-200 w-1/2 mr-auto" src={image} alt="En stor bild på en anka"/>
            {/* Like share comment */}
            <div className="flex">
                <span className="ml-4"><i className="fas fa-thumbs-up"></i></span>
                <span className="mx-auto"><i className="far fa-comments"></i></span>
                <span className="mr-4"><i className="fas fa-thumbs-down"></i></span>
            </div>
        </div>
    );
}




