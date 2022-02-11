import React from 'react';
import Tweet from '../components/Tweet';

export default function UserTweet({tweet_id}){
    return (
        <div>
            <ul>
                This is a Tweet: {tweet_id}
            </ul>
        </div>
        
    );

}