import {React, useState, useEffect as onLoad} from 'react';
import axios from 'axios';
import { useParams, Link, Outlet} from 'react-router-dom';

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

    function editPost()
    {
       
            edit = true;

    }


    return (
        
        <article className="flex mx-auto bg-black w-1/3">
            <div className="bg-blue-300 w-full flex flex-col items-center">
                <h1 className="text-6xl my-5">tweet by {userTweet.id}</h1>
                <div className="w-full px-5 flex flex-col gap-8">
                    <div id={userTweet.id} className="bg-gray-200 w-full flex flex-col gap-2 p-4 rounded-md">
                        {/* {if userid == tweet_id && <div>update knapp</div>} */}
                        <Link to='editUserPost' className="ml-auto"><i className="far fa-edit text-red-800 font-bold cursor-pointer"></i></Link>
                        {/* Text content */}
                        <div>
                            <p className="text-xs">{userTweet.body}</p>
                        </div>
                        {/* Image */}
                        <img className="bg-green-200 w-1/2 mr-auto" src={userTweet.image} alt="En stor bild på en anka"/>
                        {/* Like share comment */}
                        <div className="flex">
                            {/* Like */}
                            <span className="ml-4" onClick={likeTweet}>
                                <i className="fas fa-thumbs-up"></i>
                            </span>
                            {/* Comments */}        
                            <span className="mx-auto">
                                <Link to='comment'><i className="far fa-comments"></i></Link>
                            </span>
                            {/* Dislike */} 
                            <span className="mr-4" onClick={disLikeTweet}>
                                <i className="fas fa-thumbs-down"></i>
                            </span>
                        </div>
                    </div>
                    {/* <Outlet/> */}
                </div>
            </div>
        </article>
        
    );

}