import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    const allComments = comments.map(comment => {
        return (
            <div className="col-8" key={comment.id}>
                <Comment comment ={comment} />
            </div>

        )
    })

    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        {allComments}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CommentsList
