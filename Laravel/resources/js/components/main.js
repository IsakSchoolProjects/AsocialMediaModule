import React from "react"
import Tweets from "./Tweets"
import Profile from "./Profile"


export default function Main() {

    return (
        <div className="bg-blue-200 flex grow">
            <article className="flex mx-auto bg-black w-1/3">
                < Profile />
                <div className="bg-blue-300 w-full flex flex-col items-center">
                    <h1 className="text-6xl my-5">Start exploring</h1>
                    < Tweets/>
                </div>
            </article>
        </div>
    );
}