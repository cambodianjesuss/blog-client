import React from "react";

const CommentsList = ({comments}) =>{
  
  const renderedComments = Object.values(comments).map(comment=>{
    return (
      <li 
        key={comment.id}>
        {comment.content}
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