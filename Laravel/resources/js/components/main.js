import React from "react"
import Tweets from "./Tweets"
import Profile from "./Profile"


export default function Main() {


    return (
        <div className="bg-blue-200 flex grow">
            <div className="flex mx-auto -translate-x-24 ">
                < Profile />
                <div className="bg-blue-300 flex flex-col items-center">
                    <h1 className="text-6xl my-5">Start exploring</h1>
                    < Tweets/>
                </div>
            </div>
        </div>
    );
}