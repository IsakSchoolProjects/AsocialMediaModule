import React from 'react';

export default function Comment({body, created_at, updated_at}) {
    
    return (
        <div>
            <div>
                
            </div>
            <span>Created at {created_at}</span>
            <span>Updated at {updated_at}</span>
            <p>{body}</p>
            <p>written by author with id: author</p>
        </div>
    )
}