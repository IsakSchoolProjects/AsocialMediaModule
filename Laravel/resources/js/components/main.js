import React from "react"
import Tweets from "./Tweets"



export default function Main() {


    return (
        <div className="bg-blue-200 flex grow">
            <div className="bg-blue-300 absolute left-16 px-10 mt-4 flex flex-col gap-10">
                <img src="" alt="ProfilBild" />
                <p>Emil Åberg</p>
                <button>Logga ut</button>
            </div>

            <div className="bg-blue-300 w-1/2 flex flex-col items-center mx-auto ">
                <h1 className="text-6xl my-5">Start exploring</h1>
                < Tweets/>
            </div>
        </div>
    );
}