import React, {useState, useEffect} from "react";
import axios from "axios";

const CommentsList = ({postId}) =>{
  const [commentLists, setCommentList] = useState({});

  const fetchCommentsList = async ()=>{
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setCommentList(res.data);
  }

  useEffect(()=>{
    fetchCommentsList()
  }, []);

  const renderedComments = Object.values(commentLists).map(comment=>{
    return <div key={comment.id}>{comment.content}</div>
  })

  return (<div className="">
       {renderedComments}
  </div>)
}

export default CommentsList;