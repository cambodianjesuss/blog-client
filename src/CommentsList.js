import React from "react";

const CommentsList = ({comments}) =>{
  
  const renderedComments = Object.values(comments).map(comment=>{
    let content;

    if (comment.status === 'approved'){
      content = comment.content;
    }

    if(comment.status === 'pending'){
      content = 'This comment is awaiting moderation'
    }

    if(comment.status === 'rejected'){
      content = 'This commnet has been rejected'
    }

    return (
      <li 
        key={comment.id}>
        {content}
      </li>)
  })

  return (<div className="">
        <div>
          <i>{comments.length} comments</i>
        </div>
        <ul>
          {renderedComments}  
        </ul>
  </div>)
}

export default CommentsList;