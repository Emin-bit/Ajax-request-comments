import React from 'react'

const Comment = ({comment}) => {
    console.log(comment);
    return (
         
        <div className="card mt-3">
            <div className="card-header">
                <h3>{comment.id}. {comment.email}</h3>
            </div>
            <div className="card-body">
                <h4> {comment.name}</h4>
                <p>{comment.body}</p>
            </div>
        </div>

    )
}

export default Comment
