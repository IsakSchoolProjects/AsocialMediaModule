import {React, useState, useEffect as onLoad} from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Comments from '../components/Comments';


export default function UserTweet(){
    let id = useParams().tweet_Id;
    const [userTweet, setUserTweet] = useState([]);
    const [comments, setComments] = useState([]);

    const [showComments, setShowComments] = useState(false);
    const [loadedComments, setLoadedComments] = useState(false);

    onLoad(() => {
        axios
            .get(`http://127.0.0.1:8000/api/tweet/${id}`)
            .then(res => {
                setUserTweet(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]); 


    function likeTweet()
    {
        axios
            .put(`http://127.0.0.1:8000/api/tweet/${id}/like`)
            .then(res => {
                console.log(res);

            })
            .catch(err => {
                console.log(err.response.data);
            })
    }
    function disLikeTweet()
    {
        axios
            .put(`http://127.0.0.1:8000/api/tweet/${id}/dislike`)
            .then(res => {
                console.log(res);

            })
            .catch(err => {
                console.log(err.response.data);
            })
    }
    function comment()
    {
        setShowComments(!showComments);
        if(!loadedComments)
        {
            setLoadedComments(!loadedComments);

            axios
            .get(`http://127.0.0.1:8000/api/comment/${userTweet.user_id}`)
            .then(res =>{
                setComments(res.data);
                // console.log(res);
            })
            .catch(err =>{
                console.log(err.response.data);
            })
        }
        
    }
    return (
        
        <article className="flex mx-auto">
            <div className="bg-green-100 w-1/3 mt-10 mx-auto flex flex-col items-center">
                <h1 className="text-6xl my-5">tweet by {id}</h1>
                <div className="w-full px-5 mb-5 flex flex-col gap-8">
                    <div id={userTweet.id} className="bg-gray-200 w-full flex flex-col gap-2 p-4 rounded-md">
                        {/* {if userid == tweet_id && <div>update knapp</div>} */}
                        <Link to='editUserPost' className="ml-auto"><i className="far fa-edit text-red-800 font-bold cursor-pointer"></i></Link>
                        {/* Image */}
                        <img className="w-1/2 mx-auto" src={userTweet.image} alt="En stor bild på en anka"/>
                        {/* Text content */}
                        <div>
                            <p className="text-xs">{userTweet.body}</p>
                        </div>
                        {/* Like share comment */}
                        <div className="flex">
                            {/* Like */}
                            <span className="ml-4" onClick={likeTweet}>
                                <i className="fas fa-thumbs-up"></i>
                            </span>
                            {/* Comments */}        
                            <span className="mx-auto">
                                <button onClick={comment}><i className="far fa-comments"></i></button>
                                {/* <Link to='comment'></Link> */}
                            </span>
                            {/* Dislike */} 
                            <span className="mr-4" onClick={disLikeTweet}>
                                <i className="fas fa-thumbs-down"></i>
                            </span>
                        </div>
                    </div>
                    {showComments && 
                        <div>
                            < Comments data={comments}/>                        
                        </div>
                    }
                </div>
            </div>
        </article>
        
    );

}