import Comment from "./Comment"

export default function Comments({data}) {
    return (
        <div>
            {data.map(tweet => {
                return < Comment key={tweet.id} body={tweet.body} created_at={tweet.created_at} updated_at={tweet.updated_at}/>
            })}
        </div>
    )
}