import React, {useState} from 'react';
import axios from 'axios';

const CommentsCreate = ({postId}) => {
  const [content, setContent] = useState('');
  
  const onSubmit = async (e)=>{
    e.preventDefault();
    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content
    });

    setContent('');
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>New Comments</label>
          <input 
            value={content}
            onChange={e => setContent(e.target.value)}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary' style={{marginTop: "10px"}}>Submit</button>
      </form>
    </div>
  )
}

export default CommentsCreate;
