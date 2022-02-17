import React from 'react';
import Tweet from './Tweet';

export default function Tweets({data, onTweetClick}) {
    console.log(data.length)
    return (
        <div className="w-full px-5 flex flex-col gap-8">
            {data.map(tweet => {
                return < Tweet key={tweet.id} tweet_id={tweet.id} user_id={tweet.user_id} body={tweet.body} image={tweet.image} onTweetClick={onTweetClick}/>
            })}
        </div>
    );
}




