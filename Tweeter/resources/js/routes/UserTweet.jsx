import {React, useState, useEffect as onLoad} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UserTweet(){
    let id = useParams().tweet_Id;
    const [userTweet, setUserTweet] = useState([]);


    onLoad(() => {
        axios
            .get(`http://127.0.0.1:8000/api/tweet/${id}`)
            .then(res => {
                // console.log(res.data);
                setUserTweet(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]); 

    return (
        
        <article className="flex mx-auto bg-black w-1/3">
            <div className="bg-blue-300 w-full flex flex-col items-center">
                <h1 className="text-6xl my-5">tweet by {userTweet.id}</h1>
                <div className="w-full px-5 flex flex-col gap-8">
                    <div id={userTweet.id} className="bg-gray-200 w-full flex flex-col gap-2 p-4 rounded-md">
                        {/* Text content */}
                        <div>
                            <p className="text-xs">{userTweet.body}</p>
                        </div>
                        {/* Image */}
                        <img className="bg-green-200 w-1/2 mr-auto" src={userTweet.image} alt="En stor bild på en anka"/>
                        {/* Like share comment */}
                        <div className="flex">
                            <span className="ml-4"><i className="fas fa-thumbs-up"></i></span>
                            <span className="mx-auto"><i className="far fa-comments"></i></span>
                            <span className="mr-4"><i className="fas fa-thumbs-down"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
    );

}