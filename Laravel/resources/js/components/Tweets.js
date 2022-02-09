import React from "react"
import Tweet from "./tweet"
export default function Tweets(tweets) {
    return (
        <div className="w-full px-5 flex flex-col gap-8">
            {tweets.map((tweet) => {     
                return (<Tweet key={tweet.id} tweet={tweet} />) 
            })}
        </div>
    )
}