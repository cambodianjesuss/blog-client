import React, {useState, useEffect} from "react";
import axios from "axios";

const CommentsList = ({postId}) =>{
  const [comments, setComments] = useState({});

  const fetchComments = async ()=>{
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setComments(res.data);
  }

  useEffect(()=>{
    fetchComments()
  }, []);

  const renderedComments = Object.values(comments).map(comment=>{
    return <div key={comment.id}>{comment.content}</div>
  })

  return (<div className="">
       {renderedComments}
  </div>)
}

export default CommentsList;