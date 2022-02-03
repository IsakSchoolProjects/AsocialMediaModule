import React from "react"

// This function is the component for each tweet
export default function Tweet(props) {
    return (
        <div className="bg-gray-200 w-full">
            {/* Image */}
            <img className="bg-green-200" src="" alt="En stor bild på en anka" />
            {/* Text content */}
            <div>
                <p className="text-xs">{props.tweet.content}</p>
            </div>
            {/* Like share comment */}
            <div className="flex">
                <span className="ml-4">Like</span>
                <span className="mx-auto">dislike</span>
                <span className="mr-4">Comment</span>
            </div>
        </div>
    )
}