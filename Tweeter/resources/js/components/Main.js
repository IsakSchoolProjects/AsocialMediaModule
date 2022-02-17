import React from 'react';
import {useNavigate} from 'react-router-dom'
import Tweets from './Tweets';
import Profile from './Profile';

export default function Main({data}) {

    let navigate = useNavigate();
    const routeChange = (tweet_id) =>{
        console.log(tweet_id)
        let path = `tweet/${tweet_id}`;
        navigate(path);
    } 
    
    return (
        <main>
            <div className="bg-white flex grow">
                <article className="flex border mx-auto w-1/3">
                    <Profile />
                    <div className="bg-gray-100 w-full flex flex-col items-center">
                        <h1 className="text-6xl my-5">Start exploring</h1>
                        <Tweets data={data} onTweetClick={routeChange}/>
                    </div>
                </article>
            </div>
        </main>
    );
}





