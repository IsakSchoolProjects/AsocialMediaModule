import React from "react"

// This function is the component for each tweet
export default function Tweet(props) {
    return (
        <div className="bg-gray-200 w-full flex flex-col gap-2 p-4 rounded-md">
            {/* Image */}
            <img className="bg-green-200" src="" alt="En stor bild på en anka" />
            {/* Text content */}
            <div>
                <p className="text-xs">{props.tweet.content}</p>
            </div>
            {/* Like share comment */}
            <div className="flex">
                <span className="ml-4"><i className="fas fa-thumbs-up"></i></span>
                <span className="mx-auto"><i className="far fa-comments"></i></span>
                <span className="mr-4"><i className="fas fa-thumbs-down"></i></span>
            </div>
        </div>
    )
}