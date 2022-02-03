import React from "react"

// This function is the component for each tweet
export default function Tweet() {
    return (
        <div className="bg-gray-200 w-full">
            {/* Image */}
            <img className=" bg-green-200" src="" alt="En stor bild på en anka" />
            {/* Text content */}
            <div>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed rerum molestiae autem ab quidem unde explicabo, iste aperiam nisi illum nam voluptas laudantium error tempora deleniti dolores, eligendi incidunt cupiditate ipsam omnis aut accusamus vero! Harum molestias sed saepe sint totam facilis iusto placeat eveniet atque temporibus delectus porro ab amet quisquam possimus fugiat corporis reiciendis dolores consequatur ad, dolorum doloremque maiores quod sunt. Consequuntur ad sequi sint porro ullam dolorem accusamus perspiciatis. Aliquam expedita eligendi, quisquam adipisci saepe, in esse alias exercitationem, deleniti repudiandae perferendis! Illo veniam perferendis atque eligendi quisquam dolore similique necessitatibus! Sapiente ea expedita tempore autem.</p>
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